function ModernResume({ resume }) {
  return (
    <div className="bg-blue-50 rounded-xl shadow-lg p-8">
      <div className="border-b-4 border-blue-600 pb-4">
        <h1 className="text-4xl font-bold text-blue-700">
          {resume.fullName}
        </h1>

        <p>{resume.email}</p>
        <p>{resume.phone}</p>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-bold text-blue-600">
          Career Objective
        </h2>

        <p>{resume.objective}</p>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-bold text-blue-600">
          Skills
        </h2>

        <p>{resume.skills}</p>
      </div>
    </div>
  );
}

export default ModernResume;