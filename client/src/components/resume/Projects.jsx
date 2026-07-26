function Projects({ resume, setResume }) {
  const handleChange = (index, e) => {
    const values = [...resume.projects];
    values[index][e.target.name] = e.target.value;

    setResume({
      ...resume,
      projects: values,
    });
  };

  const addProject = () => {
    setResume({
      ...resume,
      projects: [
        ...resume.projects,
        {
          title: "",
          description: "",
          technologies: "",
          github: "",
          live: "",
        },
      ],
    });
  };

  const removeProject = (index) => {
    const values = [...resume.projects];
    values.splice(index, 1);

    setResume({
      ...resume,
      projects: values,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">
        Projects
      </h2>

      {resume.projects.map((project, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 mb-4 space-y-3"
        >
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={project.title}
            onChange={(e) => handleChange(index, e)}
            className="w-full border rounded-lg p-2"
          />

          <textarea
            name="description"
            rows="4"
            placeholder="Project Description"
            value={project.description}
            onChange={(e) => handleChange(index, e)}
            className="w-full border rounded-lg p-2"
          />

          <input
            type="text"
            name="technologies"
            placeholder="Technologies Used"
            value={project.technologies}
            onChange={(e) => handleChange(index, e)}
            className="w-full border rounded-lg p-2"
          />

          <input
            type="url"
            name="github"
            placeholder="GitHub Link"
            value={project.github}
            onChange={(e) => handleChange(index, e)}
            className="w-full border rounded-lg p-2"
          />

          <input
            type="url"
            name="live"
            placeholder="Live Demo Link"
            value={project.live}
            onChange={(e) => handleChange(index, e)}
            className="w-full border rounded-lg p-2"
          />

          {resume.projects.length > 1 && (
            <button
              type="button"
              onClick={() => removeProject(index)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Remove
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={addProject}
        className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
      >
        + Add Project
      </button>
    </div>
  );
}

export default Projects;