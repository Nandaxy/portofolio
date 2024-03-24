import "./../index.css";
import SpecialCharacter from "./utils/SpecialCharacter.jsx";
import Education from "./about/Education.jsx";

const About = () => {
  return (
    <section id="about">
      <div className="py-8 px-4 w-full bg-second">
        <div className="flex justify-center items-center py-8 text-white  montserrat">
          <SpecialCharacter tag={1} />
          <h2 className="font-bold text-xl mr-2">About</h2>{" "}
          <SpecialCharacter tag={2} />
        </div>
        <div className="w-full flex flex-col md:flex-row mt-2 md:items-center">
          <div className="flex items-center justify-center md:px-4 h-full md:mt-6">
            <img
              src="logo.png"
              alt="logo Nandaxy"
              className="rounded-full w-36 md:w-48 h-auto my-auto"
            />
          </div>
          <div className="mt-6 px-4  font-light opacity-80 text-gray-400 text-sm poppins">
            <p>
              Halo semuanya! Nama saya Nanda Ilham Buqori.
            </p>
            <p className="pt-4">
              Saya memiliki minat untuk terus belajar lebih banyak. Saya telah
              mempelajari banyak teknologi baru dalam beberapa tahun terakhir
              sendiri di Internet.
            </p>
          </div>
        </div>
        <Education />
      </div>
    </section>
  );
};

export default About;
