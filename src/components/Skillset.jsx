import SpecialCharacter from "./utils/SpecialCharacter.jsx";
import "../index.css";

const Skillset = () => {
  return (
    <section id="skill">
      <div className="py-8 px-6 w-full bg-main-bg">
        {/* title */}
        <div className="flex justify-center items-center py-8 text-white montserrat">
          <SpecialCharacter tag={1} />
          <h2 className="font-bold text-xl mr-2">Skillset</h2>
          <SpecialCharacter tag={2} />
        </div>

        <div>
          <div className="flex justify-start items-center text-white  montserrat">
            <SpecialCharacter tag={1} />
            <h2 className="font-bold text-xl mr-2">Frontend</h2>
            <SpecialCharacter tag={2} />
          </div>
          <div className="py-6 px-4 flex space-x-4">
            <img
              src="html.webp"
              alt="html"
              className="w-16 h-16 transition-all grayscale hover:grayscale-0"
            />

            <img
              src="css.webp"
              alt="css"
              className="w-16 h-16 transition-all grayscale hover:grayscale-0"
            />

            <img
              src="tailwind.webp"
              alt="tailwind"
              className="w-16 h-16 transition-all grayscale hover:grayscale-0"
            />
            <img 
              src="react.png"
              alt="react"
              className="w-16 h-16 transition-all grayscale hover:grayscale-0"
              />
          </div>
        </div>

        <div>
          <div className="flex justify-start items-center text-white montserrat">
            <h2 className="font-bold text-xl mr-2">
              <span className="text-indigo-500 mr-2">&#123;</span>
              <span className="text-teal-300">&quot;type&quot;</span>
              <span className="text-indigo-500 mr-2">: </span>
              <span className="text-white mr-2">&quot;back_end&quot;</span>
              <span className="text-indigo-500">&#125;</span>
            </h2>
          </div>
          <div className="py-6 px-4 flex space-x-4">
            <img
              src="nodejs.webp"
              alt="nodejs"
              className="w-16 h-16 transition-all grayscale hover:grayscale-0"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-start items-center text-white montserrat">
            <h2 className="font-bold text-xl mr-2">
              <span className="text-indigo-500">type:</span> Networking
            </h2>
          </div>
          <div className="py-6 px-4 flex space-x-4">
            <img
              src="mikrotik.png"
              alt="mikrotik"
              className="w-16 h-16 transition-all grayscale hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skillset;
