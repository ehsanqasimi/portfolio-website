function Card({ title, description, image, github, live }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform">
      <img src={image} alt={title}  className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-green-700">{title}</h2>
        <p className="mt-2 text-green-900">{description}</p>
        <div className="flex gap-4 mt-4">
          {github && (
            <a
              href={github}
              target="_blank"
              className="text-white bg-green-600 px-3 py-1 rounded hover:bg-green-700"
            >
              GitHub
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              className="text-white bg-green-600 px-3 py-1 rounded hover:bg-green-700"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
