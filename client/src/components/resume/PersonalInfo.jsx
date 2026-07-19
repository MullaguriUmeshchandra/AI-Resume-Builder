function PersonalInfo({ resume, handleChange }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">
        Personal Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={resume.fullName}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={resume.email}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={resume.phone}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={resume.address}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />
      </div>
    </div>
  );
}

export default PersonalInfo;