import "../../index.css";
import SpecialCharacter from "../utils/SpecialCharacter.jsx";
import data from "../../lib/data.js";

const Education = () => {
  return (
    <>
      {/* title */}
      <div className="flex justify-center items-center py-8 text-white montserrat">
        <SpecialCharacter tag={1} />
        <h2 className="font-bold text-xl mr-2">Education</h2>
        <SpecialCharacter tag={2} />
      </div>

      <div className="relative col-span-9 space-y-6 px-4">
        <div className="relative col-span-8 space-y-8 px-4 before:absolute before:-left-3 before:bottom-0 before:top-2 before:w-0.5 before:bg-gray-700">
          {/* Mapping data */}
          {data.education.map((educationItem, index) => (
            <div
              className="relative flex flex-col before:absolute before:left-[-35px] before:top-2 before:z-[1] before:h-4 before:w-4 before:rounded-full before:bg-teal-300"
              key={index}
            >
              <h3 className="text-lg text-white font-bold md:text-2xl">
                {educationItem.name}
              </h3>
              <p className="text-sm italic text-gray-400 md:text-lg">
                {educationItem.course}
              </p>
              <time className="text-sm text-gray-400 md:text-lg">
                {educationItem.time}
              </time>
              <ul className="ml-6 mt-3 list-disc space-y-1 text-sm text-gray-300 md:text-lg">
                {educationItem.achievement && (
                  <ul className="ml-6 mt-3 list-disc space-y-1 text-sm text-gray-300 md:text-lg">
                    <li>{educationItem.achievement}</li>
                  </ul>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Education;
