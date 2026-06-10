import { Brain, BookOpen, Target, BarChart3, Timer, Heart } from "lucide-react";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";


 

export default function Home() {
  const features = [
    {
      icon: <Target size={24} />,
      title: "Habits & Goals",
      desc: "Track daily habits, long-term goals and celebrate progress.",
    },
    {
      icon: <BookOpen size={24} />,
      title: "Journal & Mood",
      desc: "Reflect on your day and discover patterns with AI insights.",
    },
    {
      icon: <Brain size={24} />,
      title: "AI Coach",
      desc: "Personalized guidance based on your habits and goals.",
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Analytics",
      desc: "Visualize consistency, growth trends and productivity.",
    },
    {
      icon: <Timer size={24} />,
      title: "Pomodoro Focus",
      desc: "Stay focused with built-in timers and deep work sessions.",
    },
    {
      icon: <Heart size={24} />,
      title: "Wellness",
      desc: "Track sleep, water intake, gratitude and mindfulness.",
    },
  ];
//   const [darkMode, setDarkMode] = useState(() => {
//     if (typeof window === "undefined") return false;
//     return localStorage.getItem("theme") !== "light";
//   });

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);

//   useEffect(() => {
//   console.log(document.documentElement.classList.value);
// }, [darkMode]);

  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="relative min-h-screen bg-white text-black dark:bg-[#050816] dark:text-white transition-colors duration-300 overflow-x-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-75 h-75 md:w-125 md:h-125 lg:w-175 lg:h-175 bg-green-500/10 blur-[150px] rounded-full" />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 py-4 border-b border-gray-200 dark:border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-green-500 flex items-center justify-center font-bold">
            G 
          </div>

          <h1 className="font-bold text-lg md:text-xl">GrowthOS</h1>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button
  type="button"
  onClick={() => setDarkMode(!darkMode)}
  className="p-2 rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-white/10 hover:scale-105 transition-all"
>
  {darkMode ? (
    <Sun size={20} className="text-yellow-500" />
  ) : (
    <Moon size={20} className="text-slate-700" />
  )}
</button>
          <button className="text-sm md:text-base text-gray-300 hover:text-white transition">
            Sign In
          </button>

          <button className="bg-green-500 hover:bg-green-600 px-4 md:px-5 py-2 rounded-xl text-sm md:text-base font-medium transition">
            Start Free
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 pt-16 md:pt-24 pb-16 md:pb-20">
        <span className="px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs sm:text-sm">
          ✨ AI-Powered Life Tracking
        </span>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mt-6">
          Tend your habits,
          <span className="text-green-400">grow your life.</span>
        </h1>

        <p className="max-w-xl md:max-w-2xl text-gray-400 text-sm sm:text-base md:text-lg mt-5">
          Build better habits, achieve goals, journal your thoughts, and get
          AI-powered guidance for personal growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 px-6 py-3 rounded-2xl font-semibold transition">
            Start Your Journey
          </button>

          <button className="w-full sm:w-auto border border-white/20 hover:border-green-500 px-6 py-3 rounded-2xl transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pb-16 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-gray-100 dark:bg-white/5 border-gray-300 dark:border-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border">
            <h3 className="text-2xl md:text-3xl font-bold text-green-400">
              10K+
            </h3>
            <p className="text-gray-400 mt-2">Habits Tracked</p>
          </div>

          <div className="bg-gray-100 dark:bg-white/5 border-gray-300 dark:border-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border">
            <h3 className="text-2xl md:text-3xl font-bold text-green-400">
              50K+
            </h3>
            <p className="text-gray-400 mt-2">Journal Entries</p>
          </div>

          <div className="bg-gray-100 dark:bg-white/5 border-gray-300 dark:border-white/10 backdrop-blur-lg rounded-3xl p-6 md:p-8 border">
            <h3 className="text-2xl md:text-3xl font-bold text-green-400">
              95%
            </h3>
            <p className="text-gray-400 mt-2">User Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-20 md:pb-24">
        <div className="text-center mb-12 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Everything you need to grow
          </h2>

          <p className="text-gray-400 mt-4 text-sm md:text-base">
            A complete system for personal growth and productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-white/5 border-gray-300 dark:border-white/10 group backdrop-blur-lg border rounded-3xl p-6 md:p-8 hover:border-green-500 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-green-400 mb-5">{feature.icon}</div>

              <h3 className="text-lg md:text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-sm md:text-base text-gray-400">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-4 sm:px-6 pb-20 md:pb-24">
        <div className="max-w-5xl mx-auto bg-linear-to-r from-green-500/20 to-emerald-500/10 border border-green-500/20 rounded-[30px] md:rounded-[40px] p-6 md:p-12 text-center">
          <h2 className="text-2xl md:text-4xl font-bold">
            Ready to transform your life?
          </h2>

          <p className="text-gray-300 mt-4 text-sm md:text-base">
            Join thousands of users building better habits every day.
          </p>

          <button className="mt-6 md:mt-8 w-full sm:w-auto bg-green-500 hover:bg-green-600 px-8 py-4 rounded-2xl font-semibold transition">
            Get Started Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-xs md:text-sm text-gray-500">
        © 2026 GrowthOS. Built with ❤️ for growth.
      </footer>
    </div>
  );
}
