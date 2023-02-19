import React from "react";
import Iframe from "../../components/Iframe";

function Seguimiento() {
  return (
    <div className="m-auto mt-6 flex flex-col items-center justify-center">
      <div className="m-auto mb-5 w-[90%] rounded-lg border-2 border-green-200 border-opacity-50 p-10 text-center text-gray-700 shadow-2xl dark:bg-zinc-800 dark:text-white sm:mb-0 md:w-[65%] lg:w-[50%]">
        <ul className="text-gray-700">
          <h1 className="text-2xl text-green-400 underline decoration-green-400 decoration-2 underline-offset-8 dark:text-green-200 dark:decoration-green-200">
            Incluye:
          </h1>
          <li className="my-4 font-semibold text-gray-700 dark:text-white ">
            Ideal para despejar dudas y seguir acompañándote en el proceso,
            realizando cualquier ajuste que sea necesario en el plan y mantener
            la motivación!
            <li className="my-4 font-semibold text-gray-700 dark:text-white ">
              Duración aprox. 30 min
            </li>
          </li>
        </ul>
        <br />
        <ul>
          <h1 className="text-2xl text-green-400 underline decoration-green-400 decoration-2 underline-offset-8 dark:text-green-200 dark:decoration-green-200">
            Precios:
          </h1>
          <li className="my-4 font-semibold text-gray-700 dark:text-white ">
            Argentina: $2500 ARS
          </li>
          <li className="my-4 font-semibold text-gray-700 dark:text-white ">
            Dinamarca: 175 DKK
          </li>
          <li className="my-4 font-semibold text-gray-700 dark:text-white ">
            Resto del mundo: $25 USD
          </li>
        </ul>
      </div>
      <div className="mt-5">
        <Iframe />
      </div>
    </div>
  );
}

export default Seguimiento;
