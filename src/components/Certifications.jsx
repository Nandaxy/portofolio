import SpecialCharacter from "./utils/SpecialCharacter.jsx";
import data from "../lib/data.js";

const Certifications = () => {
  // console.log(data)
  return (
    <section id="certificat">
      <div className="py-8 px-6 w-full bg-main-bg">
        {/* title */}
        <div className="flex justify-center items-center py-8 text-white  montserrat">
          <SpecialCharacter tag={1} />
          <h2 className="font-bold text-xl mr-2">Certifications</h2>
          <SpecialCharacter tag={2} />
        </div>

        <div className="relative col-span-9 space-y-6 px-4">
          <div className="relative col-span-8 space-y-8 px-4 before:absolute before:-left-3 before:bottom-0 before:top-2 before:w-0.5 before:bg-gray-700">
            {/* Mapping data */}
            {data.certifications.map((certificationsItem, index) => (
              <div
                className="relative flex flex-col before:absolute before:left-[-35px] before:top-2 before:z-[1] before:h-4 before:w-4 before:rounded-full before:bg-teal-300"
                key={index}
              >
                <h3 className="text-lg text-white font-bold md:text-2xl">
                  {certificationsItem.name}
                </h3>
                <p className="text-sm italic text-gray-400 md:text-lg">
                  {certificationsItem.course}
                </p>
                <time className="text-sm text-gray-400 md:text-lg">
                  {certificationsItem.time}
                </time>

                {certificationsItem.downloads && (
                  <a
                    href={certificationsItem.downloads}
                    className="w-fit mt-3 py-2 px-3 bg-gray-800 text-white rounded-md text-sm md:text-lg flex items-center shadow hover:opacity-70"
                  >
                    <span className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
                        />
                      </svg>
                    </span>
                    View Certificate
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
