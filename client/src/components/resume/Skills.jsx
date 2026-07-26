function Skills({ resume, handleChange }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">
        Skills
      </h2>

      <textarea
        name="skills"
        rows="4"
        placeholder="React, Java, Python, MongoDB..."
        value={resume.skills}
        onChange={handleChange}
        className="w-full border rounded-lg p-3"
      />
    </div>
  );
}

export default Skills;