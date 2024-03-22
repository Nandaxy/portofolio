import "./../index.css";
import SpecialCharacter from "./utils/SpecialCharacter.jsx";

const Contact = () => {
  return (
    <section id="contact">
      <div className="py-8 px-4 w-full bg-second">
        <div className="flex justify-center items-center pt-8 pb-4 text-white  montserrat">
          <SpecialCharacter tag={1} />
          <h2 className="font-bold text-xl mr-2">Contact</h2>{" "}
          <SpecialCharacter tag={2} />
        </div>

        <p className="text-gray-400 font-light text-center px-8 pb-4 poppins text-sm">
          Jangan ragu untuk menghubungi saya kapan pun Anda membutuhkan bantuan
          atau ingin mendiskusikan apa pun. Saya di sini untuk membantu Anda
          dengan senang hati! 🚀
        </p>

        <div className="w-full mx-auto">
          <form className=" rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-200 text-sm font-bold mb-2"
              >
                Nama:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-600"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-200 text-sm font-bold mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-600"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-200 text-sm font-bold mb-2"
              >
                Pesan:
              </label>
              <textarea
                name="message"
                id="message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-600 h-24"
              />
            </div>
            <div className="flex items-center justify-end">
              <button
                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline"
                type="button"
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
