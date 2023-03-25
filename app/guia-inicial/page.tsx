import Link from "next/link";

function GuiaInicial() {
  return (
    <div className="m-auto mt-6 flex flex-col items-center justify-center">
      <h1 className="mb-10 text-3xl text-gray-700 underline decoration-green-400 decoration-2 underline-offset-8 dark:text-green-200 dark:decoration-green-200">
        Guía Inicial
      </h1>
      <div className="m-auto mb-5 flex w-[90%] justify-center rounded-lg border-2 border-green-200 border-opacity-50 p-10 text-center text-gray-700 shadow-2xl dark:bg-zinc-800 dark:text-white sm:mb-0 md:w-[65%] lg:w-[50%]">
        <div className="max-w-[75%]">
          <ul className="text-gray-700">
            <li className="my-4 font-semibold text-gray-700 dark:text-white ">
              Es una guía básica destinada a quienes quieran empezar a
              incorporar hábitos más saludables a su vida.
            </li>
            <li className="my-4 font-semibold text-gray-700 dark:text-white ">
              Te comparto toda la información necesaria sobre nutrientes, grupos
              de alimentos, ejemplos de comidas y tips.
            </li>
            <li className="my-4 font-semibold text-gray-700 dark:text-white ">
              Adquisición instantánea. Luego del pago, se envía vía e-mail.
            </li>
          </ul>
          <br />
          <ul>
            <h1 className="text-2xl  text-gray-700 underline decoration-green-400 decoration-2 underline-offset-8 dark:text-green-200 dark:decoration-green-200">
              Precios:
            </h1>
            <li className="my-4 font-semibold text-gray-700 dark:text-white ">
              Argentina: $1750 ARS
              <li>Se realiza el pago via transferencia bancaria</li>
            </li>
            <li className="my-4 font-semibold text-gray-700 dark:text-white ">
              Resto del mundo: €12 EUR
              <li>Se realiza el pago via Paypal</li>
            </li>
          </ul>
        </div>
      </div>

      <Link
        className="mt-10 flex select-none justify-center rounded-full bg-green-200/60 px-8 py-2 font-medium text-gray-500 shadow-xl hover:border-gray-500 hover:bg-green-200 hover:text-gray-500 dark:bg-green-200 dark:text-gray-500 dark:shadow-2xl dark:shadow-white/50 dark:hover:bg-green-300/50 dark:hover:text-white"
        href="https://api.whatsapp.com/send?phone=4591690715&text=Hola!%20Me%20gustar%C3%ADa%20adquirir%20la%20gu%C3%ADa%20inicial"
        target="_blank"
        rel="noreferrer"
      >
        La quiero!
      </Link>
    </div>
  );
}

export default GuiaInicial;
