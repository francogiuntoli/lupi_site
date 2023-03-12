import React from "react";
import Iframe from "../../components/Iframe";

function Seguimiento() {
  return (
    <div className="m-auto mt-6 flex flex-col items-center justify-center">
      <h1 className="mb-10 text-3xl text-gray-700 underline decoration-green-400 decoration-2 underline-offset-8 dark:text-green-200 dark:decoration-green-200">
        Seguimiento
      </h1>
      <div className="m-auto mb-5 flex w-[90%] justify-center rounded-lg border-2 border-green-200 border-opacity-50 p-10 text-center text-gray-700 shadow-2xl dark:bg-zinc-800 dark:text-white sm:mb-0 md:w-[65%] lg:w-[50%]">
        <div className="max-w-[70%]">
          <ul className="text-gray-700">
            <h1 className="text-2xl text-green-400 underline decoration-green-400 decoration-2 underline-offset-8 dark:text-green-200 dark:decoration-green-200">
              Consiste de:
            </h1>
            <li className="my-4 font-semibold text-gray-700 dark:text-white ">
              Una consulta por zoom de aprox. 30 min.
            </li>
            <li className="my-4 font-semibold text-gray-700 dark:text-white ">
              En la misma, evaluaremos la adherencia al plan de alimentación,
              realizaremos los ajustes que sean necesarios y seguiremos sumando
              herramientas para avanzar.
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
      </div>
      <div className="mt-5">
        <Iframe />
      </div>
    </div>
  );
}

export default Seguimiento;
