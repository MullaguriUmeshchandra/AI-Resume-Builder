function Hero() {
  return (
    <section className="min-h-screen bg-slate-900 text-white flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold mb-6">
        AI Resume Builder
      </h1>

      <p className="text-xl text-gray-300 mb-8">
        Create professional resumes with AI-powered ATS analysis.
      </p>

      <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-semibold transition">
        Get Started
      </button>
    </section>
  );
}

export default Hero;