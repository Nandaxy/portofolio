import SpecialCharacter from "./utils/SpecialCharacter.jsx";
import "../index.css";

const Hero = () => {
  return (
    <div className="min-h-[95vh] md:min-h-screen max-h-screen w-full bg-main-bg flex justify-center items-center">
      <div className="flex justify-center items-center flex-col px-4">
        <img
          src="logo.png"
          alt="logo Nandaxy"
          className="rounded-full w-40 h-40 border-4 border-gray-800 shadow"
        />
        <div className="mt-8 text-white text-center ">
          <h1 className="text-2xl font-bold montserrat">
            Hi, I&apos;m <SpecialCharacter tag={1} />
            NandaXy <SpecialCharacter tag={2} />
          </h1>
          <p className="poppins text-gray-400 font-light my-5 px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            eveniet dicta dolorem,
          </p>
          <a
            href="#contact"
            className="poppins px-6 py-2 bg-teal-300 rounded-lg text-black font-semibold hover:bg-teal-500 shadow hover:shadow transition-all"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
