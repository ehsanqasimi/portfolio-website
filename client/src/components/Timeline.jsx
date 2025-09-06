function Timeline({ items }) {
  return (
    <div className="border-l-2 border-green-600 ml-4 pl-4">
      {items.map((item, index) => (
        <div key={index} className="mb-6 relative">
          <div className="absolute -left-3 top-0 w-6 h-6 bg-green-600 rounded-full"></div>

          {/* Check if it's education or work experience */}
          {item.school ? (
            <>
              <h3 className="font-bold text-green-700">{item.school}</h3>
              <p className="text-green-900">{item.degree}</p>
            </>
          ) : (
            <>
              <h3 className="font-bold text-green-700">{item.company}</h3>
              <p className="text-green-900">{item.role}</p>
            </>
          )}

          <span className="text-green-500 text-sm">{item.timeframe}</span>
          <br />
          <span className="text-green-500 text-sm">{item.description}</span>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
