import BuyNowButton from "../../components/BuyNowButton";
import Notification from "../../components/Notification";

export default function GuiaInicial() {
  return (
    <div className="m-auto mt-5 flex flex-col items-center justify-center">
      <h1 className="mb-10 text-3xl text-gray-700 underline decoration-green-400 decoration-2 underline-offset-8 dark:text-green-200 dark:decoration-green-200">
        Guía Inicial
      </h1>
      <div className="m-auto mb-5 flex w-[90%] justify-center rounded-lg border-2 border-green-200 border-opacity-50  py-6 px-10 text-center text-gray-700 shadow-2xl dark:bg-zinc-800 dark:text-white sm:mb-0 md:w-[65%] lg:w-[50%]">
        <div className="w-full sm:w-[80%]">
          <ul className="text-gray-700">
            <li className="my-2 font-semibold text-gray-700 dark:text-white ">
              Es una guía básica destinada a quienes quieran empezar a
              incorporar hábitos más saludables a su vida.
            </li>
            <li className="my-4 font-semibold text-gray-700 dark:text-white ">
              Te comparto toda la información necesaria sobre nutrientes, grupos
              de alimentos, ejemplos de comidas y tips.
            </li>
            <li className="my-4 font-semibold text-gray-700 dark:text-white ">
              Adquisición instantánea. Luego del pago, se descarga
              automáticamente.
            </li>
          </ul>
          <br />
          <ul>
            <h1 className="text-2xl  text-gray-700 underline decoration-green-400 decoration-2 underline-offset-8 dark:text-green-200 dark:decoration-green-200">
              Precios:
            </h1>
            <ul className="mt-4 font-semibold text-gray-700 dark:text-white ">
              <li>Argentina: $1750 ARS</li>
              <li>Se realiza el pago via MercadoPago</li>
            </ul>
            <ul className="my-4 font-semibold text-gray-700 dark:text-white ">
              <li>Resto del mundo: €12 EUR</li>
              <li>Se realiza el pago via Paypal</li>
            </ul>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-2 w-min min-w-max">
        <BuyNowButton
          id="Guía Inicial"
          priceMP={1750}
          pricePP={12}
          message={"La quiero!"}
          href="https://drive.google.com/uc?id=1DRFJxpy4P13NdHB1lPWocOlaOCRVgTk3&export=download"
          redirectUrl="guia-inicial"
        />
      </div>
      <Notification />
    </div>
  );
}
