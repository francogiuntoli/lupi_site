import Iframe from "../../components/Iframe";

export default function PrimeraConsulta() {
  return (
    <div className="m-auto mt-6 flex flex-col items-center justify-center">
      <div className="m-auto mb-5 w-[90%] rounded-lg border-2 border-green-200 border-opacity-50 p-10 text-center text-gray-700 shadow-2xl dark:bg-zinc-800 dark:text-white sm:mb-0 md:w-[65%] lg:w-[50%]">
        <ul className="text-gray-700">
          <h1 className="text-2xl text-green-400 underline decoration-green-400 decoration-2 underline-offset-8 dark:text-green-200 dark:decoration-green-200">
            Incluye:
          </h1>
          <li className="my-4 font-semibold text-gray-700 dark:text-white ">
            Modalidad online, desde cualquier parte del mundo.
          </li>
          <li className="my-4 font-semibold text-gray-700 dark:text-white ">
            Aprox. 30-40 min de duración.
          </li>
          <li className="my-4 font-semibold text-gray-700 dark:text-white ">
            Incluye anamnesis alimentaria y plan de alimentación 100%
          </li>
          <li className="my-4 font-semibold text-gray-700 dark:text-white ">
            personalizado, adaptado a tus necesidades y objetivos, estilo de
            vida, preferencias e intolerancias alimentarias que se envía por
            e-mail luego de la consulta.
          </li>
        </ul>
        <br />
        <ul>
          <h1 className="text-2xl text-green-400 underline decoration-green-400 decoration-2 underline-offset-8 dark:text-green-200 dark:decoration-green-200">
            Precios:
          </h1>
          <li className="my-4 font-semibold text-gray-700 dark:text-white ">
            Argentina $4000 ARS
          </li>
          <li className="my-4 font-semibold text-gray-700 dark:text-white ">
            Dinamarca: 250 DKK
          </li>
          <li className="my-4 font-semibold text-gray-700 dark:text-white ">
            Resto del mundo $35 USD
          </li>
        </ul>
      </div>
      <div className="mt-5">
        <Iframe />
      </div>
    </div>
  );
}
