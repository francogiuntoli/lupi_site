import Image from "next/image";
import Link from "next/link";

export default async function Homepage() {
  return (
    <>
      <div className="mx-auto mt-2 flex max-w-[95%] flex-col items-center">
        <div className="mx-auto flex flex-col items-center rounded-xl border-green-200/20 bg-gradient-to-r from-white via-green-200 to-white drop-shadow-xl dark:border-t dark:bg-gradient-to-r dark:from-zinc-900 dark:via-green-200/[20%] dark:to-zinc-900 dark:shadow-2xl dark:shadow-white/50 md:max-w-[80%] lg:max-w-[50%]">
          <img
            className="w-70 mt-10 h-64 select-none rounded-full rounded-tr-none object-cover ring-2 ring-green-200"
            src="/images/chaquetilla.png"
            alt="profile image"
          />
          <div className="md:w-[85%] lg:w-[60%]">
            <h1 className="text-md mt-4 p-4 text-center text-gray-600 dark:text-white">
              Te ayudo y acompaño a lograr tus objetivos y tener un estilo de
              vida saludable, más allá del peso y la balanza. Consultas online
              desde cualquier parte del mundo.
            </h1>
            <h1 className="text-md p-8 pt-4 text-center text-gray-600 dark:text-white">
              Me especializo en:
              <ul>
                <li>🥙 Alimentación basada en comida real</li>
                <li>🏃🏼 Nutrición Deportiva</li>
              </ul>
            </h1>
          </div>
          <div className="mb-8 md:w-[85%] lg:w-[60%]">
            <h1 className="text-center text-sm text-gray-600 dark:text-white sm:text-2xl">
              ¡Empezá hoy a cambiar tus hábitos!
            </h1>
          </div>
        </div>
        <div className="m-6 flex flex-col justify-center gap-4">
          <Link
            className="flex select-none justify-center rounded-full bg-green-200/60 px-8 py-2 text-lg font-medium text-gray-500 shadow-xl hover:border-gray-500 hover:bg-green-200 hover:text-gray-500 dark:bg-green-200 dark:text-gray-500 dark:shadow-2xl dark:shadow-white/50 dark:hover:bg-green-300/50 dark:hover:text-white"
            href={"/servicios"}
          >
            Quiero saber más
          </Link>
        </div>
      </div>
    </>
  );
}
