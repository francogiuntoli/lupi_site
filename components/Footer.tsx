import Link from "next/link";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
  AiFillInstagram,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="flex h-16 items-center justify-center ">
        <div className="my-0 mx-5 h-1 w-screen bg-green-200/30"></div>

        <ul className="flex flex-row items-center gap-3 space-x-6">
          <li>
            <Link
              href="http://instragram.com/marconinutri/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram
                className="cursor-pointer text-gray-600 dark:text-white "
                size={30}
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://api.whatsapp.com/send?phone=4591690715&text=Hola!%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20planes%20de%20nutrici%C3%B3n"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineWhatsApp
                className="cursor-pointer text-gray-600 dark:text-white "
                size={30}
              />
            </Link>
          </li>
          <li>
            <Link
              href="mailto:marconinutricion@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineMail
                className="cursor-pointer text-gray-600 dark:text-white "
                size={30}
              />
            </Link>
          </li>
        </ul>
        <div className="mx-5 h-1 w-screen bg-green-200/30"></div>
      </div>
    </footer>
  );
};

export default Footer;
