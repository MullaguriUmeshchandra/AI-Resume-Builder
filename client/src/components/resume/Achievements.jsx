function Achievements({ resume, setResume }) {
  const handleChange = (index, e) => {
    const values = [...resume.achievements];
    values[index][e.target.name] = e.target.value;

    setResume({
      ...resume,
      achievements: values,
    });
  };

  const addAchievement = () => {
    setResume({
      ...resume,
      achievements: [
        ...resume.achievements,
        {
          title: "",
          description: "",
        },
      ],
    });
  };

  const removeAchievement = (index) => {
    const values = [...resume.achievements];
    values.splice(index, 1);

    setResume({
      ...resume,
      achievements: values,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">
        Achievements
      </h2>

      {resume.achievements.map((achievement, index) => (
        <div key={index} className="border rounded-lg p-4 mb-4 space-y-3">
          <input
            type="text"
            name="title"
            placeholder="Achievement Title"
            value={achievement.title}
            onChange={(e) => handleChange(index, e)}
            className="w-full border rounded-lg p-2"
          />

          <textarea
            name="description"
            placeholder="Achievement Description"
            value={achievement.description}
            onChange={(e) => handleChange(index, e)}
            className="w-full border rounded-lg p-2"
            rows="3"
          />

          {resume.achievements.length > 1 && (
            <button
              type="button"
              onClick={() => removeAchievement(index)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Remove
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={addAchievement}
        className="bg-green-600 text-white px-5 py-2 rounded-lg"
      >
        + Add Achievement
      </button>
    </div>
  );
}

export default Achievements;