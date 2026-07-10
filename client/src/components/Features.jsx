function Features() {
  return (
    <section className="bg-gray-100 py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Features
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-3">
            🤖 AI Resume Analysis
          </h3>
          <p>
            Get ATS scores, grammar suggestions, and resume improvements powered by AI.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-3">
            📄 Professional Templates
          </h3>
          <p>
            Choose from multiple modern and ATS-friendly resume templates.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-3">
            ⬇️ PDF Export
          </h3>
          <p>
            Download high-quality resumes as PDF with one click.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Features;