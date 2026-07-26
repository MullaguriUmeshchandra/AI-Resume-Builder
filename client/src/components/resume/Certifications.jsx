function Certifications({ resume, setResume }) {
  const handleChange = (index, e) => {
    const values = [...resume.certifications];
    values[index][e.target.name] = e.target.value;

    setResume({
      ...resume,
      certifications: values,
    });
  };

  const addCertification = () => {
    setResume({
      ...resume,
      certifications: [
        ...resume.certifications,
        {
          title: "",
          organization: "",
          year: "",
        },
      ],
    });
  };

  const removeCertification = (index) => {
    const values = [...resume.certifications];
    values.splice(index, 1);

    setResume({
      ...resume,
      certifications: values,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">
        Certifications
      </h2>

      {resume.certifications.map((cert, index) => (
        <div key={index} className="border rounded-lg p-4 mb-4 space-y-3">

          <input
            type="text"
            name="title"
            placeholder="Certification Name"
            value={cert.title}
            onChange={(e) => handleChange(index, e)}
            className="w-full border rounded-lg p-2"
          />

          <input
            type="text"
            name="organization"
            placeholder="Organization"
            value={cert.organization}
            onChange={(e) => handleChange(index, e)}
            className="w-full border rounded-lg p-2"
          />

          <input
            type="text"
            name="year"
            placeholder="Year"
            value={cert.year}
            onChange={(e) => handleChange(index, e)}
            className="w-full border rounded-lg p-2"
          />

          {resume.certifications.length > 1 && (
            <button
              type="button"
              onClick={() => removeCertification(index)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Remove
            </button>
          )}

        </div>
      ))}

      <button
        type="button"
        onClick={addCertification}
        className="bg-green-600 text-white px-5 py-2 rounded-lg"
      >
        + Add Certification
      </button>
    </div>
  );
}

export default Certifications;