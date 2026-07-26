function ATSResume({ resume }) {
  return (
    <div className="bg-white p-8 shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center">
        {resume.fullName || "Your Name"}
      </h1>

      <p className="text-center">
        {resume.email} | {resume.phone}
      </p>

      <hr className="my-4" />

      <h2 className="font-bold text-lg">Career Objective</h2>
      <p>{resume.objective}</p>

      <hr className="my-4" />

      <h2 className="font-bold text-lg">Skills</h2>
      <p>{resume.skills}</p>

      <hr className="my-4" />

      <h2 className="font-bold text-lg">Education</h2>

      {resume.education.map((edu, index) => (
        <div key={index} className="mb-3">
          <strong>{edu.degree}</strong>
          <p>{edu.college}</p>
          <p>{edu.startYear} - {edu.endYear}</p>
        </div>
      ))}
    </div>
  );
}

export default ATSResume;