import SpecialCharacter from "./utils/SpecialCharacter.jsx";
import "../index.css";

const Footer = () => {
  return (
    <>
      <div className="py-8 px-8 w-full bg-main-bg poppins">
        {/* title */}
        <div className="flex justify-start items-center pt-4 pb-2 text-white  montserrat">
          <SpecialCharacter tag={1} />
          <h2 className="font-bold text-xl mr-2">Nandaxy</h2>
          <SpecialCharacter tag={2} />
        </div>
        <p className="text-gray-400 poppins font-light text-sm">
          Full Stack Developer by day, DevOps Engineer by night, FOSS and Linux
          Enthusiast all the time
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          <div>
            <h4 className="text-lg font-bold text-teal-400">Social</h4>
            <ul className="text-gray-100 montserrat pt-2 space-y-1">
              <li>
                <a
                  href="https://github.com/Nandaxy"
                  className="hover:border-b-2 border-teal-400"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Nandaxy"
                  className="hover:border-b-2 border-teal-400"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Nandaxy"
                  className="hover:border-b-2 border-teal-400"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Nandaxy"
                  className="hover:border-b-2 border-teal-400"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Nandaxy"
                  className="hover:border-b-2 border-teal-400"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Nandaxy"
                  className="hover:border-b-2 border-teal-400"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-teal-400">Navigation</h4>
            <ul className="text-gray-100 montserrat pt-2 space-y-1">
              <li>
                <a href="#" className="hover:border-b-2 border-teal-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:border-b-2 border-teal-400">
                  About
                </a>
              </li>
              <li>
                <a href="#skill" className="hover:border-b-2 border-teal-400">
                  Skill set
                </a>
              </li>
              <li>
                <a href="#project" className="hover:border-b-2 border-teal-400">
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#certificat"
                  className="hover:border-b-2 border-teal-400"
                >
                  Certifications
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:border-b-2 border-teal-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-teal-400">Links</h4>
            <ul className="text-gray-100 montserrat pt-2 space-y-1">
              <li>
                <a
                  href="https://github.com/Nandaxy/portofolio"
                  className="hover:border-b-2 border-teal-400"
                >
                  Source Code
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full mt-10">
          <p className="text-center text-gray-400 poppins text-sm hover:underline">
            Made with ❤ by Nanda
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
