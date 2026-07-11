function Hero() {
  return (
    <section className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Build <span className="text-blue-500">ATS-Friendly</span> Resumes
            with AI
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            Create professional resumes, analyze ATS compatibility,
            and get AI-powered suggestions to improve your chances of
            getting hired.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold">
              Create Resume
            </button>

            <button className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold transition">
              Analyze Resume
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src="https://placehold.co/500x500?text=Resume+Illustration"
            alt="Resume Illustration"
            className="rounded-xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;