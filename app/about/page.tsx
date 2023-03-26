import Image from "next/image";

export default function About() {
  return (
    <div className="m-auto mt-6 flex flex-col items-center justify-center">
      <h1 className="mb-10 text-3xl text-gray-700 underline decoration-green-400 decoration-2 underline-offset-8 dark:text-green-200 dark:decoration-green-200">
        Sobre Mí
      </h1>
      <div className="m-auto mb-5 flex w-[90%] justify-center rounded-lg border-2 border-green-200 border-opacity-50 p-10 text-center text-gray-700 shadow-2xl dark:bg-zinc-800 dark:text-white sm:mb-0 md:w-[65%] lg:w-[50%]">
        <div className="w-full sm:w-[80%]">
          <div className="flex">
            <Image
              className="m-auto h-60 w-60 select-none rounded-3xl object-cover ring-2 ring-green-200"
              src="/images/profile_main.jpg"
              width="350"
              height="350"
              alt="profile main"
            />
          </div>
          <ul className=" mt-8 text-gray-700">
            <li className="my-4 font-semibold text-gray-700 dark:text-white ">
              Soy Licenciada en Nutrición desde hace más de 5 años.
            </li>
            <li className="my-4 font-semibold text-gray-700 dark:text-white ">
              Desde que tengo uso de razón, siempre tuve pasión por la cocina.
            </li>
            <li className="my-4 font-semibold text-gray-700 dark:text-white ">
              Desde hace algunos años, me fascina crear recetas saludables,
              basadas en comida real y disminuir el consumo de procesados.
            </li>
            <li className="my-4 font-semibold text-gray-700 dark:text-white ">
              Mi objetivo es que vos también te sumes a tener este estilo de
              vida.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
