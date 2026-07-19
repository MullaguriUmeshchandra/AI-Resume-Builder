function DashboardCards() {
  const cards = [
    {
      title: "My Resumes",
      value: 0,
    },
    {
      title: "ATS Analyses",
      value: 0,
    },
    {
      title: "Downloads",
      value: 0,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h3 className="text-lg font-semibold text-gray-700">
            {card.title}
          </h3>

          <p className="text-4xl font-bold text-blue-600 mt-4">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;