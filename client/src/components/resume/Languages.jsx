function Languages({ resume, setResume }) {
  const handleChange = (index, e) => {
    const values = [...resume.languages];
    values[index][e.target.name] = e.target.value;

    setResume({
      ...resume,
      languages: values,
    });
  };

  const addLanguage = () => {
    setResume({
      ...resume,
      languages: [
        ...resume.languages,
        {
          language: "",
          proficiency: "",
        },
      ],
    });
  };

  const removeLanguage = (index) => {
    const values = [...resume.languages];
    values.splice(index, 1);

    setResume({
      ...resume,
      languages: values,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">
        Languages
      </h2>

      {resume.languages.map((lang, index) => (
        <div key={index} className="border rounded-lg p-4 mb-4 space-y-3">

          <input
            type="text"
            name="language"
            placeholder="Language"
            value={lang.language}
            onChange={(e) => handleChange(index, e)}
            className="w-full border rounded-lg p-2"
          />

          <select
            name="proficiency"
            value={lang.proficiency}
            onChange={(e) => handleChange(index, e)}
            className="w-full border rounded-lg p-2"
          >
            <option value="">Select Proficiency</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Native">Native</option>
          </select>

          {resume.languages.length > 1 && (
            <button
              type="button"
              onClick={() => removeLanguage(index)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Remove
            </button>
          )}

        </div>
      ))}

      <button
        type="button"
        onClick={addLanguage}
        className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
      >
        + Add Language
      </button>
    </div>
  );
}

export default Languages;