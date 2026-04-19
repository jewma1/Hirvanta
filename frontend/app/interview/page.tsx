"use client";

import { useEffect, useRef, useState } from "react";
import { Mic, PhoneOff, Volume2, MessageSquare, Sparkles } from "lucide-react";

type SessionResponse = {
  client_secret?: {
    value?: string;
  };
};

export default function InterviewPage() {
  const [mode, setMode] = useState<"chat" | "voice">("chat");
  const [role, setRole] = useState("");
  const [question, setQuestion] = useState("Tell me about yourself.");
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const [voiceStatus, setVoiceStatus] = useState<"idle" | "connecting" | "live">("idle");
  const [voiceError, setVoiceError] = useState("");

  const pcRef = useRef<RTCPeerConnection | null>(null);
  const audioElRef = useRef<HTMLAudioElement | null>(null);
  const dcRef = useRef<RTCDataChannel | null>(null);
  const localStreamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    audioElRef.current = document.createElement("audio");
    audioElRef.current.autoplay = true;
    return () => {
      stopVoiceSession();
    };
  }, []);

  async function getChatFeedback() {
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
        body: JSON.stringify({ prompt })
      });

      const data = await res.json();
      setResult(data.text || "No response.");
    } catch {
      setResult("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  async function startVoiceSession() {
    try {
      setVoiceError("");
      setVoiceStatus("connecting");

      const api = process.env.NEXT_PUBLIC_API_URL;
      const sessionRes = await fetch(`${api}/api/realtime/session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const sessionData: SessionResponse = await sessionRes.json();
      const ephemeralKey = sessionData?.client_secret?.value;

      if (!ephemeralKey) {
        throw new Error("No realtime client secret received from backend.");
      }

      const pc = new RTCPeerConnection();
      pcRef.current = pc;

      const audioEl = audioElRef.current;
      pc.ontrack = (event) => {
        if (audioEl) {
          audioEl.srcObject = event.streams[0];
        }
      };

      const localStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      localStreamRef.current = localStream;

      for (const track of localStream.getTracks()) {
        pc.addTrack(track, localStream);
      }

      const dc = pc.createDataChannel("oai-events");
      dcRef.current = dc;

      dc.onopen = () => {
        setVoiceStatus("live");

        dc.send(
          JSON.stringify({
            type: "response.create",
            response: {
              instructions: `You are Hirvanta's premium live Interview Coach.
Role: ${role || "Not provided"}.
Start by greeting the user, then ask this interview question: ${question}.
After the user answers, coach them on confidence, clarity, structure, vocabulary, and nervousness control.`
            }
          })
        );
      };

      dc.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);

          if (msg.type === "response.output_text.delta" && msg.delta) {
            setResult((prev) => prev + msg.delta);
          }

          if (msg.type === "response.done") {
            setResult((prev) => prev.trim());
          }
        } catch {
          // ignore parse issues for non-text events
        }
      };

      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);

      const baseUrl = "https://api.openai.com/v1/realtime";
      const model = "gpt-4o-realtime-preview";

      const sdpResponse = await fetch(`${baseUrl}?model=${model}`, {
        method: "POST",
        body: offer.sdp,
        headers: {
          Authorization: `Bearer ${ephemeralKey}`,
          "Content-Type": "application/sdp"
        }
      });

      const answerSdp = await sdpResponse.text();
      await pc.setRemoteDescription({
        type: "answer",
        sdp: answerSdp
      });
    } catch (error: any) {
      setVoiceStatus("idle");
      setVoiceError(error?.message || "Voice session failed.");
      stopVoiceSession();
    }
  }

  function stopVoiceSession() {
    if (dcRef.current) {
      dcRef.current.close();
      dcRef.current = null;
    }

    if (pcRef.current) {
      pcRef.current.close();
      pcRef.current = null;
    }

    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach((track) => track.stop());
      localStreamRef.current = null;
    }

    setVoiceStatus("idle");
  }

  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
        <h1 className="text-4xl font-bold text-slate-900">Interview Coach</h1>
        <p className="mt-2 text-slate-500">
          Use Chat mode for typed coaching or Voice mode for premium live spoken interview practice.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <button
            onClick={() => setMode("chat")}
            className={`rounded-2xl border p-5 text-left ${
              mode === "chat" ? "border-blue-600 bg-blue-50" : "border-slate-200"
            }`}
          >
            <div className="flex items-center gap-3">
              <MessageSquare className="h-5 w-5 text-blue-600" />
              <div>
                <div className="font-semibold">Chat Interview</div>
                <div className="text-sm text-slate-500">Text answers + AI feedback</div>
              </div>
            </div>
          </button>

          <button
            onClick={() => setMode("voice")}
            className={`rounded-2xl border p-5 text-left ${
              mode === "voice" ? "border-blue-600 bg-blue-50" : "border-slate-200"
            }`}
          >
            <div className="flex items-center gap-3">
              <Mic className="h-5 w-5 text-blue-600" />
              <div>
                <div className="font-semibold">Premium Live Voice</div>
                <div className="text-sm text-slate-500">Real one-to-one speaking practice</div>
              </div>
            </div>
          </button>
        </div>

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

            {mode === "chat" ? (
              <>
                <textarea
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Your Answer"
                  className="min-h-[220px] w-full rounded-2xl border border-slate-200 p-4"
                />

                <button
                  onClick={getChatFeedback}
                  disabled={loading}
                  className="w-full rounded-2xl bg-blue-600 px-4 py-3 text-white font-semibold"
                >
                  {loading ? "Generating..." : "Get AI Feedback"}
                </button>
              </>
            ) : (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="text-sm font-medium text-slate-700">Voice Session</div>
                <div className="mt-2 text-lg font-semibold text-slate-900">
                  {voiceStatus === "idle" && "Ready"}
                  {voiceStatus === "connecting" && "Connecting..."}
                  {voiceStatus === "live" && "Live now"}
                </div>

                {voiceError ? (
                  <div className="mt-3 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                    {voiceError}
                  </div>
                ) : null}

                <div className="mt-5 flex gap-3">
                  <button
                    onClick={startVoiceSession}
                    disabled={voiceStatus !== "idle"}
                    className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 text-white font-semibold disabled:opacity-60"
                  >
                    <Mic className="h-4 w-4" />
                    Start Live Voice
                  </button>

                  <button
                    onClick={stopVoiceSession}
                    disabled={voiceStatus === "idle"}
                    className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-white font-semibold disabled:opacity-60"
                  >
                    <PhoneOff className="h-4 w-4" />
                    End Voice
                  </button>
                </div>

                <p className="mt-4 text-sm text-slate-500">
                  Chrome works best for this feature.
                </p>
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <Sparkles className="h-5 w-5 text-blue-600" />
              AI Coaching Result
            </div>

            <div className="mt-4 whitespace-pre-wrap text-sm leading-7 text-slate-700 min-h-[420px]">
              {result || "Your AI interview feedback or live conversation text will appear here."}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
