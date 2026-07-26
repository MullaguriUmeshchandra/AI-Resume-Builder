function CreativeResume({ resume }) {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-8 rounded-xl shadow-lg">

      <h1 className="text-4xl font-bold">
        {resume.fullName}
      </h1>

      <p>{resume.email}</p>
      <p>{resume.phone}</p>

      <div className="mt-6">
        <h2 className="text-2xl font-bold">
          About Me
        </h2>

        <p>{resume.objective}</p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold">
          Skills
        </h2>

        <p>{resume.skills}</p>
      </div>
    </div>
  );
}

export default CreativeResume;