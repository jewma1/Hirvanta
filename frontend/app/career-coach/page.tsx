"use client";

import { useEffect, useRef, useState } from "react";
import {
  Mic,
  MessageSquare,
  Volume2,
  Sparkles,
  ArrowRight,
  Briefcase,
  TrendingUp,
  IndianRupee,
} from "lucide-react";

declare global {
  interface Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
    speechSynthesis: SpeechSynthesis;
  }
}

export default function CareerCoachPage() {
  const [mode, setMode] = useState<"chat" | "voice">("chat");
  const [topic, setTopic] = useState("Career Growth");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const [voiceReady, setVoiceReady] = useState(false);
  const [listening, setListening] = useState(false);

  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const Speech =
      typeof window !== "undefined" &&
      (window.SpeechRecognition || window.webkitSpeechRecognition);

    if (Speech) {
      const recognition = new Speech();
      recognition.lang = "en-US";
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => setListening(true);

      recognition.onresult = (event: any) => {
        const text = event.results[0][0].transcript;
        setMessage(text);
      };

      recognition.onend = () => setListening(false);

      recognitionRef.current = recognition;
      setVoiceReady(true);
    }
  }, []);

  function speak(text: string) {
    if (!window.speechSynthesis) return;

    window.speechSynthesis.cancel();

    const msg = new SpeechSynthesisUtterance(text);
    msg.rate = 1;
    msg.pitch = 1;
    window.speechSynthesis.speak(msg);
  }

  function startVoice() {
    if (recognitionRef.current) {
      recognitionRef.current.start();
    }
  }

  async function getAdvice() {
    try {
      setLoading(true);
      setResult("");

      const api = process.env.NEXT_PUBLIC_API_URL;

      const prompt = `
You are an expert AI Career Coach.

Topic: ${topic}

User Message:
${message}

Give:
1. Clear career advice
2. Next 30 day action plan
3. Skill gap analysis
4. Salary growth suggestion
5. Motivation boost
`;

      const res = await fetch(`${api}/api/ai/career`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      const text = data.text || "No advice generated.";
      setResult(text);

      if (mode === "voice") {
        speak(text);
      }
    } catch {
      setResult("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  const topics = [
    "Career Growth",
    "Skill Gap",
    "Interview Plan",
    "Salary Guidance",
    "Job Switch",
    "Confidence Help",
  ];

  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">

        <h1 className="text-4xl font-bold text-slate-900">
          Career Assistant
        </h1>

        <p className="mt-2 text-slate-500">
          Get AI career advice using Chat or Voice mode.
        </p>

        {/* Mode */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">

          <button
            onClick={() => setMode("chat")}
            className={`rounded-2xl border p-5 text-left ${
              mode === "chat"
                ? "border-blue-600 bg-blue-50"
                : "border-slate-200"
            }`}
          >
            <div className="flex items-center gap-3">
              <MessageSquare className="h-5 w-5 text-blue-600" />
              <div>
                <div className="font-semibold">Chat Assistant</div>
                <div className="text-sm text-slate-500">
                  Type and get AI guidance
                </div>
              </div>
            </div>
          </button>

          <button
            onClick={() => setMode("voice")}
            className={`rounded-2xl border p-5 text-left ${
              mode === "voice"
                ? "border-blue-600 bg-blue-50"
                : "border-slate-200"
            }`}
          >
            <div className="flex items-center gap-3">
              <Mic className="h-5 w-5 text-blue-600" />
              <div>
                <div className="font-semibold">Voice Assistant</div>
                <div className="text-sm text-slate-500">
                  Talk one-to-one with AI
                </div>
              </div>
            </div>
          </button>

        </div>

        {/* Topics */}
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {topics.map((item) => (
            <button
              key={item}
              onClick={() => setTopic(item)}
              className={`rounded-2xl px-4 py-3 text-sm font-semibold ${
                topic === item
                  ? "bg-blue-600 text-white"
                  : "border border-slate-200"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Main Area */}
        <div className="mt-8 grid gap-6 xl:grid-cols-2">

          <div className="space-y-4">

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me your problem, career goal, salary issue, skill gap, interview issue..."
              className="min-h-[280px] w-full rounded-2xl border border-slate-200 p-4"
            />

            {mode === "voice" && (
              <button
                onClick={startVoice}
                disabled={!voiceReady || listening}
                className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-white font-semibold"
              >
                {listening ? "Listening..." : "🎤 Start Voice Session"}
              </button>
            )}

            <button
              onClick={getAdvice}
              disabled={loading}
              className="w-full rounded-2xl bg-blue-600 px-4 py-3 text-white font-semibold"
            >
              {loading ? "Thinking..." : "Get AI Advice"}
            </button>

          </div>

          {/* Result */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <Sparkles className="h-5 w-5 text-blue-600" />
              AI Career Result
            </div>

            <div className="mt-4 whitespace-pre-wrap text-sm leading-7 text-slate-700 min-h-[420px]">
              {result || "Your AI career guidance will appear here."}
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-3">

              <div className="rounded-xl bg-white p-4 border border-slate-200">
                <Briefcase className="h-5 w-5 text-blue-600 mb-2" />
                <div className="text-sm font-semibold">Job Growth</div>
              </div>

              <div className="rounded-xl bg-white p-4 border border-slate-200">
                <TrendingUp className="h-5 w-5 text-blue-600 mb-2" />
                <div className="text-sm font-semibold">Skill Growth</div>
              </div>

              <div className="rounded-xl bg-white p-4 border border-slate-200">
                <IndianRupee className="h-5 w-5 text-blue-600 mb-2" />
                <div className="text-sm font-semibold">Salary Growth</div>
              </div>

            </div>

          </div>

        </div>

      </section>
    </div>
  );
}
