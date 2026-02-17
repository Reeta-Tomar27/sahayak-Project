import { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  X,
  Send,
  Mic,
  Maximize2,
  Minimize2,
  Volume2,
  Settings
} from "lucide-react";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [language, setLanguage] = useState("en-IN");
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hello! I am your Sahayak Assistant. How may I guide you today?"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showAccessibility, setShowAccessibility] = useState(false);

  const recognitionRef = useRef<any>(null);

  // 🎤 Live Speech Recognition
  const startListening = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = language;
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onresult = (event: any) => {
      let transcript = "";
      for (let i = 0; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      setInputValue(transcript);
    };

    recognition.onend = () => {
      setIsListening(false);
      if (inputValue.trim()) handleSend(inputValue);
    };

    recognition.start();
    recognitionRef.current = recognition;
    setIsListening(true);
  };

  // 🔊 Speak Response
  const speak = (text: string) => {
    if (!voiceEnabled) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;

    const voices = window.speechSynthesis.getVoices();
    const indianVoice = voices.find(v => v.lang.includes(language));
    if (indianVoice) utterance.voice = indianVoice;

    window.speechSynthesis.speak(utterance);
  };

  const sendMessageToAI = async (text: string) => {
    const response = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text, language })
    });

    const data = await response.json();
    return data.reply;
  };

  const handleSend = async (voiceText?: string) => {
    const text = voiceText || inputValue;
    if (!text.trim()) return;

    setMessages(prev => [...prev, { type: "user", text }]);
    setInputValue("");
    setIsLoading(true);

    const reply = await sendMessageToAI(text);

    setMessages(prev => [...prev, { type: "bot", text: reply }]);
    setIsLoading(false);

    speak(reply);
  };

  useEffect(() => {
    if (!voiceEnabled) {
      window.speechSynthesis.cancel();
    }
  }, [voiceEnabled]);

  return (
    <>
      {!isOpen && (
  <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">

    {/* Text Bubble */}
    <div className="bg-[#2563EB] text-white px-5 py-3 rounded-full shadow-lg text-base font-medium">
      How may I help you?
    </div>

    {/* Chat Icon Button */}
    <button
      onClick={() => setIsOpen(true)}
      className="w-14 h-14 bg-[#2563EB] text-white rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition"
    >
      <MessageCircle size={22} />
    </button>

  </div>
)}
      

      {isOpen && (
        <div
          className={`fixed bottom-6 right-6 bg-white rounded-2xl shadow-2xl flex flex-col z-50 transition-all
          ${isMaximized ? "w-[600px] h-[80vh]" : "w-96 h-[600px]"}`}
        >
          {/* HEADER */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#2563EB] text-white rounded-t-2xl">
            <h3 className="font-semibold">Sahayak Assistant</h3>

            <div className="flex items-center gap-3">
              {/* Accessibility */}
              <div className="relative">
                <button
                  onClick={() => setShowAccessibility(!showAccessibility)}
                  title="Accessibility Settings"
                >
                  <Settings size={18} />
                </button>

                {showAccessibility && (
                  <div className="absolute right-0 mt-3 w-56 bg-white border rounded-xl shadow-xl p-4 space-y-3 text-sm text-black">
                    <div className="font-semibold">Accessibility</div>

                    <button
                      className="w-full px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                      onClick={() => setFontSize(fontSize + 2)}
                    >
                      Increase Text Size
                    </button>

                    <button
                      className="w-full px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                      onClick={() => setFontSize(fontSize - 2)}
                    >
                      Decrease Text Size
                    </button>

                    <div className="border-t pt-2 font-semibold">Language</div>

                    <button
                      className="w-full px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                      onClick={() => setLanguage("en-IN")}
                    >
                      English
                    </button>

                    <button
                      className="w-full px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                      onClick={() => setLanguage("hi-IN")}
                    >
                      Hindi
                    </button>
                  </div>
                )}
              </div>

              {/* Voice Toggle */}
              <button
                onClick={() => setVoiceEnabled(!voiceEnabled)}
                title="Toggle Voice Response"
              >
                <Volume2 size={18} color={voiceEnabled ? "white" : "gray"} />
              </button>

              {/* Maximize */}
              <button
                onClick={() => setIsMaximized(!isMaximized)}
                title="Expand / Minimize"
              >
                {isMaximized ? (
                  <Minimize2 size={18} />
                ) : (
                  <Maximize2 size={18} />
                )}
              </button>

              {/* Close */}
              <button onClick={() => setIsOpen(false)} title="Close">
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  style={{ fontSize }}
                  className={`max-w-[85%] px-4 py-3 rounded-xl ${
                    msg.type === "user"
                      ? "bg-[#2563EB] text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="bg-gray-100 px-4 py-2 rounded-xl w-fit">
                Thinking...
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2 items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />

              <button
                onClick={startListening}
                className={`p-3 rounded-xl ${
                  isListening ? "bg-red-500 text-white" : "bg-gray-200"
                }`}
                title="Speak"
              >
                <Mic size={18} />
              </button>

              <button
                onClick={() => handleSend()}
                className="px-4 py-3 bg-[#2563EB] text-white rounded-xl"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
