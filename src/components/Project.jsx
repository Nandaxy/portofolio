import "./../index.css";
import SpecialCharacter from "./utils/SpecialCharacter.jsx";
import CardProject from "./project/CardProject.jsx";

const Project = () => {
  return (
    <>
      <div className="py-8 px-4 w-full bg-second">
        <div className="flex justify-center items-center py-8 text-white montserrat">
          <SpecialCharacter tag={1} />
          <h2 className="font-bold text-xl mr-2">Projects</h2>{" "}
          <SpecialCharacter tag={2} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardProject />
        </div>
      </div>
    </>
  );
};

export default Project;
