function ResumePreview({ resume }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-8 sticky top-5">
      <h1 className="text-3xl font-bold text-center">
        {resume.fullName || "Your Name"}
      </h1>

      <p className="text-center text-gray-600 mt-2">
        {resume.email} | {resume.phone}
      </p>

      <p className="text-center text-gray-600">{resume.address}</p>

      {resume.linkedin && (
        <p className="text-center text-blue-600">
          LinkedIn: {resume.linkedin}
        </p>
      )}

      {resume.github && (
        <p className="text-center text-blue-600">
          GitHub: {resume.github}
        </p>
      )}

      {resume.portfolio && (
        <p className="text-center text-blue-600">
          Portfolio: {resume.portfolio}
        </p>
      )}

      {/* Objective */}
      {resume.objective && (
        <>
          <hr className="my-5" />
          <h2 className="text-xl font-bold mb-2">Career Objective</h2>
          <p>{resume.objective}</p>
        </>
      )}

      {/* Education */}
      {resume.education.length > 0 && (
        <>
          <hr className="my-5" />
          <h2 className="text-xl font-bold mb-3">Education</h2>

          {resume.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">{edu.degree}</h3>
              <p>{edu.field}</p>
              <p>{edu.college}</p>
              <p>
                {edu.startYear} - {edu.endYear}
              </p>
              <p>CGPA: {edu.cgpa}</p>
            </div>
          ))}
        </>
      )}

      {/* Experience */}
      {resume.experience.length > 0 && (
        <>
          <hr className="my-5" />
          <h2 className="text-xl font-bold mb-3">Experience</h2>

          {resume.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">{exp.role}</h3>
              <p>{exp.company}</p>
              <p>
                {exp.startDate} - {exp.endDate}
              </p>
              <p>{exp.description}</p>
            </div>
          ))}
        </>
      )}

      {/* Projects */}
      {resume.projects.length > 0 && (
        <>
          <hr className="my-5" />
          <h2 className="text-xl font-bold mb-3">Projects</h2>

          {resume.projects.map((project, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold">{project.title}</h3>
              <p>{project.description}</p>
              <p>
                <strong>Technologies:</strong> {project.technologies}
              </p>
            </div>
          ))}
        </>
      )}

      {/* Skills */}
      {resume.skills && (
        <>
          <hr className="my-5" />
          <h2 className="text-xl font-bold mb-2">Skills</h2>
          <p>{resume.skills}</p>
        </>
      )}

      {/* Certifications */}
      {resume.certifications.length > 0 && (
        <>
          <hr className="my-5" />
          <h2 className="text-xl font-bold mb-3">Certifications</h2>

          {resume.certifications.map((cert, index) => (
            <div key={index}>
              <p>
                <strong>{cert.title}</strong> - {cert.organization} ({cert.year})
              </p>
            </div>
          ))}
        </>
      )}

      {/* Achievements */}
      {resume.achievements.length > 0 && (
        <>
          <hr className="my-5" />
          <h2 className="text-xl font-bold mb-3">Achievements</h2>

          {resume.achievements.map((achievement, index) => (
            <div key={index} className="mb-3">
              <h3 className="font-semibold">{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </>
      )}

      {/* Languages */}
      {resume.languages.length > 0 && (
        <>
          <hr className="my-5" />
          <h2 className="text-xl font-bold mb-3">Languages</h2>

          {resume.languages.map((lang, index) => (
            <p key={index}>
              {lang.language} - {lang.proficiency}
            </p>
          ))}
        </>
      )}
    </div>
  );
}

export default ResumePreview;