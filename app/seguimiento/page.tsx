import Link from "next/link";
import React from "react";
import Iframe from "../../components/Iframe";

function Seguimiento() {
  return (
    <div className="m-auto mt-6 flex flex-col items-center justify-center">
      <h1 className="mb-10 text-3xl text-gray-700 underline decoration-green-400 decoration-2 underline-offset-8 dark:text-green-200 dark:decoration-green-200">
        Seguimiento
      </h1>
      <div className="m-auto mb-5 flex w-[90%] justify-center rounded-lg border-2 border-green-200 border-opacity-50 p-10 text-center text-gray-700 shadow-2xl dark:bg-zinc-800 dark:text-white sm:mb-0 md:w-[65%] lg:w-[50%]">
        <div className="w-full sm:w-[80%]">
          <ul className="text-gray-700">
            <li className="my-4 font-semibold text-gray-700 dark:text-white ">
              Consiste en una consulta por zoom de aprox. 30 min
            </li>
            <li className="my-4 font-semibold text-gray-700 dark:text-white ">
              En la misma, evaluaremos la adherencia al plan de alimentación,
              realizaremos los ajustes que sean necesarios y seguiremos sumando
              herramientas para avanzar.
            </li>
          </ul>
          <br />
          <ul>
            <h1 className="text-2xl  text-gray-700 underline decoration-green-400 decoration-2 underline-offset-8 dark:text-green-200 dark:decoration-green-200">
              Precios:
            </h1>
            <ul className="my-4 font-semibold text-gray-700 dark:text-white ">
              Argentina: $3000 ARS
              <li>Se realiza el pago via transferencia bancaria</li>
            </ul>
            <ul className="my-4 font-semibold text-gray-700 dark:text-white ">
              Resto del mundo: €25 EUR
              <li>Se realiza el pago via Paypal</li>
            </ul>
          </ul>
        </div>
      </div>
      <div>
        <Link
          className="mt-10 flex select-none justify-center rounded-full bg-green-200/60 px-8 py-2 font-medium text-gray-500 shadow-xl hover:border-gray-500 hover:bg-green-200 hover:text-gray-500 dark:bg-green-200 dark:text-gray-500 dark:shadow-2xl dark:shadow-white/50 dark:hover:bg-green-300/50 dark:hover:text-white"
          href="https://api.whatsapp.com/send?phone=34604287070&text=Hola!%20Me%20gustar%C3%ADa%20adquirir%20un%20turno"
          target="_blank"
          rel="noreferrer"
        >
          Sacar turno!
        </Link>
      </div>
    </div>
  );
}

export default Seguimiento;
