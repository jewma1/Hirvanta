"use client";

import { useEffect, useRef, useState } from "react";
import {
  Mic,
  MessageSquare,
  Volume2,
  VolumeX,
  Sparkles,
  ArrowRight,
  Briefcase,
  TrendingUp,
  IndianRupee,
  Brain,
  GraduationCap,
} from "lucide-react";

declare global {
  interface Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
    speechSynthesis: SpeechSynthesis;
  }
}

type VoiceStatus = "idle" | "listening" | "processing";

const quickTopics = [
  "Skill gap analysis",
  "Career roadmap",
  "Upskilling suggestions",
  "Interview plan",
  "Salary guidance",
  "Job switch strategy",
  "Confidence and communication",
  "Career growth plan"
];

export default function CareerCoachPage() {
  const [mode, setMode] = useState<"chat" | "voice">("chat");
  const [topic, setTopic] = useState("Skill gap analysis");
  const [currentRole, setCurrentRole] = useState("");
  const [targetRole, setTargetRole] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [skills, setSkills] = useState("");
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const [voiceSupported, setVoiceSupported] = useState(false);
  const [voiceStatus, setVoiceStatus] = useState<VoiceStatus>("idle");
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const Recognition =
      typeof window !== "undefined" &&
      (window.SpeechRecognition || window.webkitSpeechRecognition);

    if (Recognition) {
      setVoiceSupported(true);
      const recognition = new Recognition();
      recognition.lang = "en-US";
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => setVoiceStatus("listening");

      recognition.onresult = (event: any) => {
        const text = Array.from(event.results)
          .map((result: any) => result[0].transcript)
          .join(" ");
        setTranscript(text);
        setQuestion(text);
        setVoiceStatus("processing");
      };

      recognition.onerror = () => setVoiceStatus("idle");

      recognition.onend = () => {
        setVoiceStatus((prev) => (prev === "processing" ? "processing" : "idle"));
      };

      recognitionRef.current = recognition;
    }
  }, []);

  function speakText(text: string) {
    if (!voiceEnabled || typeof window === "undefined" || !window.speechSynthesis) {
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;
    window.speechSynthesis.speak(utterance);
  }

  function startListening() {
    if (!recognitionRef.current) return;
    setTranscript("");
    recognitionRef.current.start();
  }

  function stopSpeaking() {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }

  async function getCareerAdvice(customText?: string) {
    try {
      setLoading(true);
      setResult("");

      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const finalQuestion = customText ?? question;

      const prompt = `
You are Hirvanta's premium AI Career Assistant.

User topic:
${topic}

Current Role:
${currentRole || "Not provided"}

Target Role:
${targetRole || "Not provided"}

Experience Level:
${experienceLevel || "Not provided"}

Current Skills:
${skills || "Not provided"}

User Question / Situation:
${finalQuestion || "Not provided"}

Please provide:
1. Direct career advice
2. Skill gap analysis if relevant
3. Step-by-step roadmap
4. Salary or growth guidance if relevant
5. Communication/confidence improvement suggestions
6. Practical next action for the next 7 days

Keep the advice useful for real students, freshers, and professionals.
      `;

      const response = await fetch(`${apiUrl}/api/ai/career`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
      });

      const data = await response.json();
      const output = data.text || "No career advice generated.";
      setResult(output);

      if (mode === "voice") {
        speakText(output);
      }
    } catch {
      const message = "Something went wrong while getting career advice.";
      setResult(message);

      if (mode === "voice") {
        speakText(message);
      }
    } finally {
      setLoading(false);
      setVoiceStatus("idle");
    }
  }

  async function handleVoiceAdvice() {
    const finalText = transcript || question;
    if (!finalText.trim()) return;
    await getCareerAdvice(finalText);
  }

  return (
    <div className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">
              Career Assistant
            </h1>
            <p className="mt-2 max-w-3xl text-slate-500">
              Get personalized guidance for skill gaps, job switches, interview planning,
              salary growth, communication confidence, and long-term career roadmap.
            </p>
          </div>

          <button
            onClick={() => setVoiceEnabled((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            {voiceEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            {voiceEnabled ? "Voice On" : "Voice Off"}
          </button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <button
            onClick={() => setMode("chat")}
            className={`rounded-3xl border p-5 text-left transition ${
              mode === "chat"
                ? "border-[#2546A8] bg-brand-50 ring-2 ring-[#2546A8]/10"
                : "border-slate-200 bg-white"
            }`}
          >
            <div className="flex items-center gap-3">
              <MessageSquare className="h-6 w-6 text-[#2546A8]" />
              <div>
                <div className="text-xl font-semibold text-slate-900">Chat Career Coach</div>
                <div className="mt-1 text-sm text-slate-500">
                  Ask questions and get premium text-based career advice
                </div>
              </div>
            </div>
          </button>

          <button
            onClick={() => setMode("voice")}
            className={`rounded-3xl border p-5 text-left transition ${
              mode === "voice"
                ? "border-[#2546A8] bg-brand-50 ring-2 ring-[#2546A8]/10"
                : "border-slate-200 bg-white"
            }`}
          >
            <div className="flex items-center gap-3">
              <Mic className="h-6 w-6 text-[#2546A8]" />
              <div>
                <div className="text-xl font-semibold text-slate-900">Voice Assistant AI</div>
                <div className="mt-1 text-sm text-slate-500">
                  One-on-one voice mentoring for real-time guidance
                </div>
              </div>
            </div>
          </button>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="mb-5 grid gap-3 md:grid-cols-2">
              {quickTopics.map((item) => (
                <button
                  key={item}
                  onClick={() => setTopic(item)}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    topic === item
                      ? "bg-[#2546A8] text-white"
                      : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                value={currentRole}
                onChange={(e) => setCurrentRole(e.target.value)}
                placeholder="Current Role"
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500"
              />
              <input
                value={targetRole}
                onChange={(e) => setTargetRole(e.target.value)}
                placeholder="Target Role"
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500"
              />
              <input
                value={experienceLevel}
                onChange={(e) => setExperienceLevel(e.target.value)}
                placeholder="Experience Level"
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500 md:col-span-2"
              />
            </div>

            <textarea
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="Current Skills"
              className="mt-4 min-h-[100px] w-full rounded-2xl border border-slate-200 p-4 outline-none focus:border-brand-500"
            />

            {mode === "chat" ? (
              <>
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Ask anything about career growth, salary, switching jobs, interview preparation, upskilling, or confidence..."
                  className="mt-4 min-h-[180px] w-full rounded-2xl border border-slate-200 p-4 outline-none focus:border-brand-500"
                />

                <button
                  onClick={() => getCareerAdvice()}
                  disabled={loading}
                  className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-[#2546A8] px-5 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
                >
                  {loading ? "Thinking..." : "Get Career Advice"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </>
            ) : (
              <>
                <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="text-sm font-medium text-slate-700">Voice Session Status</div>
                  <div className="mt-2 text-lg font-semibold text-slate-900">
                    {voiceSupported
                      ? voiceStatus === "idle"
                        ? "Ready"
                        : voiceStatus === "listening"
                        ? "Listening..."
                        : "Processing..."
                      : "Voice not supported in this browser"}
                  </div>

                  <div className="mt-4 text-sm text-slate-500">
                    Spoken transcript:
                  </div>
                  <div className="mt-2 min-h-[120px] rounded-2xl bg-white p-4 text-sm leading-7 text-slate-700">
                    {transcript || "Your spoken question will appear here."}
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <button
                    onClick={startListening}
                    disabled={!voiceSupported || voiceStatus === "listening"}
                    className="inline-flex items-center gap-2 rounded-2xl bg-[#2546A8] px-5 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
                  >
                    <Mic className="h-4 w-4" />
                    Start Voice Session
                  </button>

                  <button
                    onClick={handleVoiceAdvice}
                    disabled={loading || !(transcript || question)}
                    className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-50 disabled:opacity-60"
                  >
                    <Brain className="h-4 w-4" />
                    Get Voice Advice
                  </button>

                  <button
                    onClick={stopSpeaking}
                    className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-50"
                  >
                    <VolumeX className="h-4 w-4" />
                    Stop AI Voice
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900">
              <Sparkles className="h-6 w-6 text-brand-600" />
              Career Guidance Output
            </div>

            <div className="mb-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <GraduationCap className="h-4 w-4 text-brand-600" />
                  Skill Gap Analysis
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Briefcase className="h-4 w-4 text-brand-600" />
                  Career Roadmap
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <TrendingUp className="h-4 w-4 text-brand-600" />
                  Growth Plan
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <IndianRupee className="h-4 w-4 text-brand-600" />
                  Salary Guidance
                </div>
              </div>
            </div>

            <div className="min-h-[560px] whitespace-pre-wrap rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">
              {result ||
                `Your AI career guidance will appear here.

You can use this page for:
- skill gap analysis
- career roadmap
- upskilling suggestions
- interview planning
- salary growth advice
- communication and confidence support
- career switch strategy`}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
