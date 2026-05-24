import { useEffect, useState } from "react"

export default function App() {

  const [loading, setLoading] = useState(true)

  // LOADING SCREEN
  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)

  }, [])

  // CURSOR GLOW EFFECT
  useEffect(() => {

    const glow = document.createElement("div")

    glow.style.position = "fixed"
    glow.style.width = "300px"
    glow.style.height = "300px"
    glow.style.borderRadius = "9999px"
    glow.style.pointerEvents = "none"
    glow.style.background =
      "radial-gradient(circle, rgba(139,92,246,0.18) 0%, rgba(59,130,246,0.08) 40%, transparent 70%)"

    glow.style.transform = "translate(-50%, -50%)"
    glow.style.zIndex = "9999"
    glow.style.filter = "blur(30px)"

    document.body.appendChild(glow)

    const moveGlow = (e: MouseEvent) => {
      glow.style.left = e.clientX + "px"
      glow.style.top = e.clientY + "px"
    }

    window.addEventListener("mousemove", moveGlow)

    return () => {
      window.removeEventListener("mousemove", moveGlow)
      document.body.removeChild(glow)
    }

  }, [])

  // LOADING PAGE
  if (loading) {
    return (
      <div className="h-screen bg-[#060816] flex items-center justify-center overflow-hidden">

        <div className="text-center animate-[float_6s_ease-in-out_infinite]">

          <div className="w-32 h-32 rounded-full border-4 border-purple-500/20 border-t-purple-500 animate-spin mx-auto"></div>

          <h1 className="mt-10 text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            NeuroNote AI
          </h1>

          <p className="mt-4 text-gray-400">
            Initializing AI Systems...
          </p>

        </div>

      </div>
    )
  }

  // MAIN WEBSITE
  return (
    <div className="min-h-screen bg-[#060816] text-white relative overflow-hidden">
      {/* GALAXY */}

<div className="galaxy">

  <div className="star w-1 h-1 bg-white top-[10%] left-[20%]" style={{ animationDuration: "18s" }}></div>

  <div className="star w-2 h-2 bg-purple-400 top-[30%] left-[70%]" style={{ animationDuration: "25s" }}></div>

  <div className="star w-1 h-1 bg-blue-400 top-[60%] left-[40%]" style={{ animationDuration: "20s" }}></div>

  <div className="star w-2 h-2 bg-pink-400 top-[80%] left-[10%]" style={{ animationDuration: "28s" }}></div>

  <div className="star w-1 h-1 bg-cyan-400 top-[50%] left-[85%]" style={{ animationDuration: "16s" }}></div>

  <div className="star w-2 h-2 bg-yellow-300 top-[15%] left-[50%]" style={{ animationDuration: "22s" }}></div>

</div>
      {/* STARS */}

<div className="absolute inset-0 overflow-hidden">

  <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>

  <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>

  <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>

  <div className="absolute bottom-10 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping"></div>

  <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>

</div>

      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-600 rounded-full blur-[150px] opacity-20"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-600 rounded-full blur-[150px] opacity-20"></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            🧠 NeuroNote AI
          </h1>

          <div className="hidden md:flex items-center gap-8 text-gray-300">

            <a href="#" className="hover:text-white transition">
              Features
            </a>

            <a href="#" className="hover:text-white transition">
              Demo
            </a>

            <a href="#" className="hover:text-white transition">
              Pricing
            </a>

            <a href="#" className="hover:text-white transition">
              Testimonials
            </a>

          </div>

          <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 hover:scale-105 transition-all duration-300 font-medium">
            Get Started
          </button>

        </div>

      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-32">

        <div className="text-center">

          <div className="inline-block px-4 py-2 rounded-full border border-purple-500/30 bg-white/5 backdrop-blur-md text-sm text-purple-300">
            ✨ AI-powered learning assistant
          </div>

          <h1 className="mt-8 text-6xl md:text-8xl font-bold leading-tight">
           <span className="drop-shadow-[0_0_40px_rgba(168,85,247,0.8)]">
  Study Smarter
</span>

 <br />
<span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(139,92,246,0.7)] animate-pulse">
              With AI
            </span>

          </h1>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Summarize notes, generate flashcards,
            solve doubts instantly, and prepare for exams
            10x faster using AI.
          </p>

          <div className="mt-10 flex gap-4 justify-center flex-wrap">

          <button className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 overflow-hidden font-semibold text-white hover:scale-110 transition-all duration-500">

  <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-700"></span>

  <span className="relative z-10">
    🚀 Start Free
  </span>

</button>

            <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300">
              ▶ Watch Demo
            </button>

          </div>

        </div>

      </section>
{/* FEATURES SECTION */}

<section className="py-32 px-6 relative z-10 reveal reveal-delay-1">

  <div className="max-w-7xl mx-auto">

    <h2 className="text-5xl md:text-6xl font-bold text-center">

      Powerful AI Tools

    </h2>

    <p className="text-gray-400 text-center mt-6 text-lg">
      Everything students need to learn faster and smarter.
    </p>

    <div className="grid md:grid-cols-3 gap-8 mt-20">

      {/* CARD 1 */}

      <div className="tilt-card group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-purple-500/40 hover:scale-105 transition-all duration-500 relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

        <div className="relative z-10">

          <div className="text-6xl">
            🧠
          </div>

          <h3 className="mt-6 text-3xl font-bold">
            AI Notes
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">
            Instantly summarize long chapters into smart notes.
          </p>

        </div>

      </div>

      {/* CARD 2 */}

      <div className="tilt-card group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-pink-500/40 hover:scale-105 transition-all duration-500 relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

        <div className="relative z-10">

          <div className="text-6xl">
            ⚡
          </div>

          <h3 className="mt-6 text-3xl font-bold">
            Quiz Generator
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">
            Generate exam-level quizzes using AI.
          </p>

        </div>

      </div>

      {/* CARD 3 */}

      <div className="tilt-card group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-blue-500/40 hover:scale-105 transition-all duration-500 relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

        <div className="relative z-10">

          <div className="text-6xl">
            🎤
          </div>

          <h3 className="mt-6 text-3xl font-bold">
            Voice Notes
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">
            Convert lectures into structured notes automatically.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
{/* AI DASHBOARD SECTION */}

<section className="py-32 px-6 relative z-10 reveal reveal-delay-2">

  <div className="max-w-6xl mx-auto">

    <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 overflow-hidden relative">

      {/* Glow */}

      <div className="absolute top-[-100px] left-[-100px] w-[250px] h-[250px] bg-purple-500 rounded-full blur-[120px] opacity-20"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[250px] h-[250px] bg-blue-500 rounded-full blur-[120px] opacity-20"></div>

      {/* Window Top */}

      <div className="flex gap-3 mb-8">

        <div className="w-4 h-4 rounded-full bg-red-500"></div>

        <div className="w-4 h-4 rounded-full bg-yellow-500"></div>

        <div className="w-4 h-4 rounded-full bg-green-500"></div>

      </div>

      {/* Dashboard */}

      <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">

        {/* LEFT */}

        <div>

          <div className="p-6 rounded-3xl bg-black/30 border border-white/10">

            <p className="text-gray-500 text-sm">
              AI Summary
            </p>

            <h3 className="mt-4 text-3xl font-bold leading-relaxed">
              Photosynthesis converts light energy into chemical energy.
            </h3>

          </div>

        </div>

        {/* RIGHT */}

        <div className="space-y-6">

          <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10">

            <div className="flex justify-between">

              <span className="text-gray-300">
                Focus Score
              </span>

              <span className="font-bold">
                92%
              </span>

            </div>

            <div className="mt-4 h-4 rounded-full bg-white/10 overflow-hidden">

              <div className="h-full w-[92%] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>

            </div>

          </div>

          <div className="p-6 rounded-3xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-white/10">

            <div className="flex justify-between">

              <span className="text-gray-300">
                Study Speed
              </span>

              <span className="font-bold">
                10x
              </span>

            </div>

            <div className="mt-4 h-4 rounded-full bg-white/10 overflow-hidden">

              <div className="h-full w-[85%] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
{/* STATS SECTION */}

<section className="py-32 px-6 relative z-10">

  <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">

    {/* STAT 1 */}

    <div className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 transition-all duration-500">

      <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
        1M+
      </h2>

      <p className="mt-4 text-gray-400">
        Active Students
      </p>

    </div>

    {/* STAT 2 */}

    <div className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 transition-all duration-500">

      <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
        50K+
      </h2>

      <p className="mt-4 text-gray-400">
        AI Notes Generated
      </p>

    </div>

    {/* STAT 3 */}

    <div className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 transition-all duration-500">

      <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
        99%
      </h2>

      <p className="mt-4 text-gray-400">
        Success Rate
      </p>

    </div>

    {/* STAT 4 */}

    <div className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-105 transition-all duration-500">

      <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
        24/7
      </h2>

      <p className="mt-4 text-gray-400">
        AI Assistance
      </p>

    </div>

  </div>

</section>
{/* AI TERMINAL */}

<section className="py-32 px-6 relative z-10">

  <div className="max-w-5xl mx-auto">

    <div className="rounded-[40px] border border-white/10 bg-black/40 backdrop-blur-2xl overflow-hidden shadow-2xl shadow-purple-500/10">

      {/* Top Bar */}

      <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10">

        <div className="w-4 h-4 rounded-full bg-red-500"></div>

        <div className="w-4 h-4 rounded-full bg-yellow-500"></div>

        <div className="w-4 h-4 rounded-full bg-green-500"></div>

        <p className="ml-4 text-sm text-gray-400">
          NeuroNote AI Terminal
        </p>

      </div>

      {/* Terminal Content */}

      <div className="p-8 font-mono text-sm md:text-base space-y-4">

        <p className="text-green-400">
          ✓ AI System Initialized
        </p>

        <p className="text-cyan-400">
          ✓ Neural Learning Engine Active
        </p>

        <p className="text-pink-400">
          ✓ Smart Quiz Generator Online
        </p>

        <p className="text-yellow-400">
          ✓ Voice Recognition Enabled
        </p>

        <div className="flex items-center gap-2 text-purple-400">

          <span>
            &gt;
          </span>

          <span className="animate-pulse">
            Waiting for student input...
          </span>

        </div>

      </div>

    </div>

  </div>

</section>
{/* LIVE AI ACTIVITY */}

<section className="py-32 px-6 relative z-10 reveal reveal-delay-3">

  <div className="max-w-6xl mx-auto">

    <div className="text-center">

      <h2 className="text-5xl md:text-6xl font-bold">
        Live AI Activity
      </h2>

      <p className="mt-6 text-gray-400 text-lg">
        Students using NeuroNote AI right now.
      </p>

    </div>

    <div className="mt-20 grid md:grid-cols-3 gap-8">

      {/* Activity 1 */}

      <div className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:scale-105 transition-all duration-500">

        <div className="flex items-center gap-4">

          <div className="w-4 h-4 rounded-full bg-green-400 animate-ping"></div>

          <p className="text-green-400 font-semibold">
            LIVE
          </p>

        </div>

        <h3 className="mt-6 text-2xl font-bold">
          AI Summary Generated
        </h3>

        <p className="mt-4 text-gray-400 leading-relaxed">
          Biology Chapter 7 summarized in 12 seconds.
        </p>

      </div>

      {/* Activity 2 */}

      <div className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:scale-105 transition-all duration-500">

        <div className="flex items-center gap-4">

          <div className="w-4 h-4 rounded-full bg-blue-400 animate-ping"></div>

          <p className="text-blue-400 font-semibold">
            LIVE
          </p>

        </div>

        <h3 className="mt-6 text-2xl font-bold">
          Smart Quiz Created
        </h3>

        <p className="mt-4 text-gray-400 leading-relaxed">
          25 AI-generated questions created for Physics.
        </p>

      </div>

      {/* Activity 3 */}

      <div className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:scale-105 transition-all duration-500">

        <div className="flex items-center gap-4">

          <div className="w-4 h-4 rounded-full bg-pink-400 animate-ping"></div>

          <p className="text-pink-400 font-semibold">
            LIVE
          </p>

        </div>

        <h3 className="mt-6 text-2xl font-bold">
          Voice Notes Processed
        </h3>

        <p className="mt-4 text-gray-400 leading-relaxed">
          48-minute lecture converted into notes automatically.
        </p>

      </div>

    </div>

  </div>

</section>
{/* HOLOGRAPHIC FOOTER */}

<footer className="relative z-10 px-6 pb-20 pt-10">

  <div className="max-w-7xl mx-auto rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden relative">

    {/* Glow */}

    <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-500 rounded-full blur-[140px] opacity-20"></div>

    <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-500 rounded-full blur-[140px] opacity-20"></div>

    <div className="relative z-10 p-10">

      <div className="flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT */}

        <div>

          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">

            🧠 NeuroNote AI

          </h2>

          <p className="mt-4 text-gray-400 max-w-md leading-relaxed">
            The futuristic AI learning platform helping students study smarter,
            faster and more effectively.
          </p>

        </div>

        {/* CENTER */}

        <div className="flex gap-10 text-gray-300">

          <div>

            <h3 className="font-bold mb-4">
              Product
            </h3>

            <div className="space-y-2 text-gray-400">

              <p className="hover:text-white transition cursor-pointer">
                Features
              </p>

              <p className="hover:text-white transition cursor-pointer">
                Pricing
              </p>

              <p className="hover:text-white transition cursor-pointer">
                AI Tools
              </p>

            </div>

          </div>

          <div>

            <h3 className="font-bold mb-4">
              Company
            </h3>

            <div className="space-y-2 text-gray-400">

              <p className="hover:text-white transition cursor-pointer">
                About
              </p>

              <p className="hover:text-white transition cursor-pointer">
                Careers
              </p>

              <p className="hover:text-white transition cursor-pointer">
                Contact
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-gray-500 text-sm">
          © 2026 NeuroNote AI. All rights reserved.
        </p>

        <div className="flex gap-4 text-2xl">

          <span className="hover:scale-125 transition cursor-pointer">
            🚀
          </span>

          <span className="hover:scale-125 transition cursor-pointer">
            🤖
          </span>

          <span className="hover:scale-125 transition cursor-pointer">
            ⚡
          </span>

        </div>

      </div>

    </div>

  </div>

</footer>
{/* AI CHATBOT */}

<div className="fixed bottom-8 right-8 z-50">

  {/* Chat Window */}

  <div className="mb-4 w-[320px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden shadow-2xl shadow-purple-500/10">

    {/* Top */}

    <div className="p-4 border-b border-white/10 flex items-center gap-3">

      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
        🤖
      </div>

      <div>

        <h3 className="font-bold">
          NeuroBot AI
        </h3>

        <p className="text-xs text-green-400">
          Online
        </p>

      </div>

    </div>

    {/* Messages */}

    <div className="p-4 space-y-4">

      <div className="bg-purple-500/20 border border-purple-500/20 p-3 rounded-2xl text-sm">
        Hi 👋 I can summarize notes, generate quizzes and solve doubts instantly.
      </div>

      <div className="bg-white/5 border border-white/10 p-3 rounded-2xl text-sm">
        Try asking:
        <br />
        “Explain Photosynthesis”
      </div>

    </div>

    {/* Input */}

    <div className="p-4 border-t border-white/10 flex gap-2">

      <input
        type="text"
        placeholder="Ask NeuroBot..."
        className="flex-1 px-4 py-3 rounded-xl bg-black/30 border border-white/10 outline-none text-sm"
      />

      <button className="px-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 hover:scale-105 transition-all duration-300">
        ➤
      </button>

    </div>

  </div>

  {/* Floating Button */}

  <button className="ml-auto w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-2xl shadow-2xl shadow-purple-500/30 hover:scale-110 transition-all duration-500 animate-bounce">

    🤖

  </button>

</div>
    </div>
  )
}