import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiOutlineMail,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BsDownload } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div>
      <img
        src="https://scontent.fkhi16-1.fna.fbcdn.net/v/t1.6435-9/176982088_1770658113095801_4663210915542176475_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeFxYwI6kXoNBkdHgT5Ek8pVSxD7Xc-dJ7RLEPtdz50ntKq5siN_XEMUKgQaMDvkQNyQ44pOVu4noMv7dxR3DH-9&_nc_ohc=zLU6Ifz9clMAX-JI9q9&_nc_ht=scontent.fkhi16-1.fna&oh=2d2a643ce76c001b34dc56bd3c0f75cb&oe=60AB1C1C"
        alt="user avatar"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Yasir</span> Ahmed Ghouri
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
        Full Stack Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
        href=""
        download=""
      >
        <BsDownload className="w-5 h-5 mr-2" />
        Download Resume
      </a>
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full">
        <a href="https://www.facebook.com/cristiano.yasir.7/">
          <AiFillFacebook className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/yasir-ghouri-83019a135/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/yasirghouri">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      <div
        className="py-4 my-5 bg-gray-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Karachi, Pakistan</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <AiOutlineMail />
          <span className="my-2">yasir.ag7@gmail.com</span>
        </div>
      </div>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-tr from-green to-blue-400 focus:outline-none"
        onClick={() => window.open("mailto:yasir.ag7@gmail.com")}
      >
        Email Me
      </button>
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-tr from-green to-blue-400 focus:outline-none">
        Dark UI
      </button>
    </div>
  );
};

export default Sidebar;
