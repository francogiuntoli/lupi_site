import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export default function Contacto() {
  return (
    <div className="m-auto mt-6 flex flex-col items-center justify-center">
      <h1 className="mb-10 text-3xl text-gray-700 underline decoration-green-400 decoration-2 underline-offset-8 dark:text-green-200 dark:decoration-green-200">
        Contacto
      </h1>
      <div className="m-auto mb-5 flex w-[90%] justify-center rounded-lg border-2 border-green-200 border-opacity-50 p-4 text-center text-gray-700 shadow-2xl dark:bg-zinc-800 dark:text-white sm:mb-0 sm:w-[80%] md:w-[70%] lg:w-[55%] xl:w-[45%]">
        <div className="flex w-full flex-col items-center justify-center sm:w-[80%] sm:flex-row">
          <Image
            className="m-5 h-60 w-60 select-none rounded-3xl object-cover ring-2 ring-green-200"
            src="/images/profile_main.jpg"
            width="350"
            height="350"
            alt="profile main"
          />
          <ul>
            <li>
              <Link
                href="http://instragram.com/marconinutri/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                <AiOutlineInstagram
                  className="cursor-pointer text-gray-600 dark:text-white "
                  size={40}
                />
                <span className="ml-2">@marconinutri</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://api.whatsapp.com/send?phone=4591690715&text=Hola!%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20planes%20de%20nutrici%C3%B3n"
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                <AiOutlineWhatsApp
                  className="cursor-pointer text-gray-600 dark:text-white "
                  size={40}
                />
                <span className="ml-2">+45 91 69 07 15</span>
              </Link>
            </li>
            <li>
              <Link
                href="mailto:marconinutricion@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                <AiOutlineMail
                  className="cursor-pointer text-gray-600 dark:text-white "
                  size={40}
                />
                <span className="ml-2">marconinutricion@gmail.com</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
