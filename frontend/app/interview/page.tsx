"use client";

import { useEffect, useRef, useState } from "react";
import {
  Mic,
  MessageSquare,
  Volume2,
  VolumeX,
  ArrowRight,
  Sparkles,
} from "lucide-react";

declare global {
  interface Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
    speechSynthesis: SpeechSynthesis;
  }
}

export default function InterviewPage() {
  const [mode, setMode] = useState<"chat" | "voice">("chat");
  const [role, setRole] = useState("");
  const [question, setQuestion] = useState("Tell me about yourself.");
  const [answer, setAnswer] = useState("");
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
        setAnswer(text);
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

  async function getFeedback() {
    try {
      setLoading(true);
      setResult("");

      const api = process.env.NEXT_PUBLIC_API_URL;

      const prompt = `
You are an expert interview coach.

Role: ${role}
Question: ${question}
Candidate Answer: ${answer}

Give:
1. Better answer
2. Confidence tips
3. Communication tips
4. Vocabulary suggestions
5. One next interview question
`;

      const res = await fetch(`${api}/api/ai/interview`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      const text = data.text || "No response.";
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

  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">

        <h1 className="text-4xl font-bold text-slate-900">
          Interview Coach
        </h1>

        <p className="mt-2 text-slate-500">
          Practice interviews with AI using Chat or Voice mode.
        </p>

        {/* Mode Switch */}
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
                <div className="font-semibold">Chat Interview</div>
                <div className="text-sm text-slate-500">
                  Text answers + AI feedback
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
                <div className="font-semibold">Voice Interview</div>
                <div className="text-sm text-slate-500">
                  Speak answers + AI talks back
                </div>
              </div>
            </div>
          </button>

        </div>

        {/* Inputs */}
        <div className="mt-8 grid gap-6 xl:grid-cols-2">

          <div className="space-y-4">

            <input
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Job Role (Project Engineer)"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3"
            />

            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Interview Question"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3"
            />

            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Your Answer"
              className="min-h-[220px] w-full rounded-2xl border border-slate-200 p-4"
            />

            {mode === "voice" && (
              <button
                onClick={startVoice}
                disabled={!voiceReady || listening}
                className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-white font-semibold"
              >
                {listening ? "Listening..." : "🎤 Start Voice Answer"}
              </button>
            )}

            <button
              onClick={getFeedback}
              disabled={loading}
              className="w-full rounded-2xl bg-blue-600 px-4 py-3 text-white font-semibold"
            >
              {loading ? "Generating..." : "Get AI Feedback"}
            </button>

          </div>

          {/* Result */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <Sparkles className="h-5 w-5 text-blue-600" />
              AI Coaching Result
            </div>

            <div className="mt-4 whitespace-pre-wrap text-sm leading-7 text-slate-700 min-h-[420px]">
              {result || "Your AI interview feedback will appear here."}
            </div>

          </div>

        </div>

      </section>
    </div>
  );
}
