import React from "react";

function Education({ resume, setResume }) {
  const handleChange = (index, e) => {
    const values = [...resume.education];
    values[index][e.target.name] = e.target.value;

    setResume({
      ...resume,
      education: values,
    });
  };

  const addEducation = () => {
    setResume({
      ...resume,
      education: [
        ...resume.education,
        {
          college: "",
          degree: "",
          field: "",
          startYear: "",
          endYear: "",
          cgpa: "",
        },
      ],
    });
  };

  const removeEducation = (index) => {
    const values = [...resume.education];
    values.splice(index, 1);

    setResume({
      ...resume,
      education: values,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">
        Education
      </h2>

      {resume.education.map((edu, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 mb-4 space-y-3"
        >
          <input
            type="text"
            name="college"
            placeholder="College Name"
            value={edu.college}
            onChange={(e) => handleChange(index, e)}
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            name="degree"
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) => handleChange(index, e)}
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            name="field"
            placeholder="Field of Study"
            value={edu.field}
            onChange={(e) => handleChange(index, e)}
            className="w-full border p-2 rounded"
          />

          <div className="grid grid-cols-3 gap-3">
            <input
              type="text"
              name="startYear"
              placeholder="Start Year"
              value={edu.startYear}
              onChange={(e) => handleChange(index, e)}
              className="border p-2 rounded"
            />

            <input
              type="text"
              name="endYear"
              placeholder="End Year"
              value={edu.endYear}
              onChange={(e) => handleChange(index, e)}
              className="border p-2 rounded"
            />

            <input
              type="text"
              name="cgpa"
              placeholder="CGPA"
              value={edu.cgpa}
              onChange={(e) => handleChange(index, e)}
              className="border p-2 rounded"
            />
          </div>

          {resume.education.length > 1 && (
            <button
              type="button"
              onClick={() => removeEducation(index)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Remove
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={addEducation}
        className="bg-green-600 text-white px-5 py-2 rounded"
      >
        + Add Education
      </button>
    </div>
  );
}

export default Education;