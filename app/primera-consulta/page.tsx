import Iframe from "../../components/Iframe";

export default function PrimeraConsulta() {
  return (
    <div className="m-auto mt-6 flex flex-col items-center justify-center">
      <h1 className="mb-10 text-3xl text-gray-700 underline decoration-green-400 decoration-2 underline-offset-8 dark:text-green-200 dark:decoration-green-200">
        Primera consulta
      </h1>
      <div className="m-auto mb-5 flex w-[90%] justify-center rounded-lg border-2 border-green-200 border-opacity-50 p-10 text-center text-gray-700 shadow-2xl dark:bg-zinc-800 dark:text-white sm:mb-0 md:w-[65%] lg:w-[50%]">
        <div className="w-[80%]">
          <ul className="text-gray-700">
            <li className="my-4 font-semibold text-gray-700 dark:text-white ">
              Consiste en una consulta por zoom de aprox. 40 min
            </li>
            <li className="my-4 font-semibold text-gray-700 dark:text-white ">
              En base a la misma, se realiza un plan de alimentación 100%
              personalizado y ajustado a tus requerimientos, preferencias e
              intolerancias.
            </li>
            <li className="my-4 font-semibold text-gray-700 dark:text-white ">
              El plan se enviará por e-mail en un lapso de 3 días hábiles.
            </li>
          </ul>
          <br />
          <ul>
            <h1 className="text-2xl  text-gray-700 underline decoration-green-400 decoration-2 underline-offset-8 dark:text-green-200 dark:decoration-green-200">
              Precios:
            </h1>
            <li className="my-4 font-semibold text-gray-700 dark:text-white ">
              Argentina: $4500 ARS
              <li>Se realiza el pago via transferencia bancaria</li>
            </li>
            <li className="my-4 font-semibold text-gray-700 dark:text-white ">
              Resto del mundo: €35 EUR
              <li>Se realiza el pago via Paypal</li>
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
