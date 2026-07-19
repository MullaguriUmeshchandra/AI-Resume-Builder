function ResumePreview({ resume }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h1 className="text-3xl font-bold">
        {resume.fullName || "Your Name"}
      </h1>

      <p>{resume.email}</p>
      <p>{resume.phone}</p>
      <p>{resume.address}</p>

      <hr className="my-4" />

      <h2 className="text-xl font-bold text-blue-600">
        Career Objective
      </h2>

      <p>{resume.objective}</p>

      <hr className="my-4" />

      <h2 className="text-xl font-bold text-blue-600">
        Skills
      </h2>

      <p>{resume.skills}</p>
    </div>
  );
}

export default ResumePreview;