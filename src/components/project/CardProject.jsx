import data from "../../lib/data.js";

const CardProject = () => {
  return (
    <>
      {data.projects.map((project, index) => (
        <div
          key={index}
          className="bg-main-bg  border-gray-800 shadow shadow-white/10 mb-8 text-white rounded poppins group border-2 border-transparent transition-all duration-500 hover:border-teal-300"
        >
          <img
            src={project.image}
            alt={`project${index + 1}`}
            className="grayscale group-hover:grayscale-0"
          />
          <div className="py-6 px-4">
            <div className="flex justify-between items-center pr-4 py-2">
              <p className="font-bold">{project.name}</p>
              <div className="flex items-center space-x-3">
               <a href={project.url} className="text-sm">
                  &lt;/&gt;
                </a>
                {project.demo && (
                  <a href={project.demo}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 2048 2048"
                    >
                      <path
                        fill="currentColor"
                        d="M2048 0v1664h-384v384H0V384h384V0zm-128 1536V128H512v256h256v128H128v1408h1408v-640h128v256zm-979-339l-90-90l594-595h-421V384h640v640h-128V603z"
                      />
                    </svg>
                  </a>
                )}

              </div>
            </div>
            <p className="font-light text-gray-400 text-sm">
              {project.description}
            </p>
            <div className="flex items-center space-x-2 mt-3 ">
              {project.technologies.map((technology, index) => (
                <img
                  key={index}
                  src={technology}
                  alt={technology}
                  className="w-4 h-auto grayscale group-hover:grayscale-0"
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardProject;
