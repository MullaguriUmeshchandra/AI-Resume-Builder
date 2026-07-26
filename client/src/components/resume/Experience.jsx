function Experience({ resume, setResume }) {
  const handleChange = (index, e) => {
    const values = [...resume.experience];
    values[index][e.target.name] = e.target.value;

    setResume({
      ...resume,
      experience: values,
    });
  };

  const addExperience = () => {
    setResume({
      ...resume,
      experience: [
        ...resume.experience,
        {
          company: "",
          role: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    });
  };

  const removeExperience = (index) => {
    const values = [...resume.experience];
    values.splice(index, 1);

    setResume({
      ...resume,
      experience: values,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">
        Experience
      </h2>

      {resume.experience.map((exp, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 mb-4 space-y-3"
        >
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={exp.company}
            onChange={(e) => handleChange(index, e)}
            className="w-full border rounded-lg p-2"
          />

          <input
            type="text"
            name="role"
            placeholder="Job Role"
            value={exp.role}
            onChange={(e) => handleChange(index, e)}
            className="w-full border rounded-lg p-2"
          />

          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              name="startDate"
              placeholder="Start Date"
              value={exp.startDate}
              onChange={(e) => handleChange(index, e)}
              className="border rounded-lg p-2"
            />

            <input
              type="text"
              name="endDate"
              placeholder="End Date"
              value={exp.endDate}
              onChange={(e) => handleChange(index, e)}
              className="border rounded-lg p-2"
            />
          </div>

          <textarea
            name="description"
            rows="4"
            placeholder="Describe your work..."
            value={exp.description}
            onChange={(e) => handleChange(index, e)}
            className="w-full border rounded-lg p-2"
          />

          {resume.experience.length > 1 && (
            <button
              type="button"
              onClick={() => removeExperience(index)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Remove
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={addExperience}
        className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
      >
        + Add Experience
      </button>
    </div>
  );
}

export default Experience;