"use client";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import DarkModeButton from "./DarkModeButton";
import MobileDarkModeButton from "./MobileDarkModeButton";
import LogoMain from "./LogoMain";
import { AiFillTool } from "react-icons/ai";

const consultas = [
  {
    name: "Primera consulta",
    href: "/primera-consulta",
  },
  {
    name: "Seguimiento",
    href: "/seguimiento",
  },
  {
    name: "Guía Inicial",
    href: "/guia-inicial",
  },
  {
    name: "Recetario",
    href: "/recetario",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Popover className="relative z-[10000] select-none rounded-b-xl bg-green-200  shadow-xl dark:bg-transparent dark:shadow-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-6 md:justify-start">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">Lic. Lucía Marconi</span>
              <LogoMain />
            </Link>
          </div>
          <div className="-my-2 -mr-2 flex items-center gap-4 md:hidden">
            <DarkModeButton />

            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-white hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-8 w-8" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden  space-x-7 pl-14 md:flex">
            <Link
              href="/"
              className="hover:text-semibold text-base font-medium text-gray-500 hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-8 dark:text-white dark:hover:decoration-green-200"
            >
              Inicio
            </Link>
            <Link
              href="/about"
              className="hover:text-semibold text-base font-medium text-gray-500 hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-8 dark:text-white dark:hover:decoration-green-200"
            >
              Sobre mí
            </Link>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open
                        ? " text-gray-500 underline decoration-white decoration-2 underline-offset-8 dark:decoration-green-200"
                        : "text-gray-500 dark:text-white",
                      "hover group inline-flex items-center rounded-md text-base font-medium text-gray-500 hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-8 focus:outline-none dark:hover:decoration-green-200"
                    )}
                  >
                    <span>Servicios</span>
                    <ChevronDownIcon
                      className={classNames(
                        open
                          ? "text-white dark:text-green-200"
                          : "font-extrabold text-gray-500 dark:text-white",
                        "ml-2 h-5 w-5 group-hover:text-white dark:group-hover:text-green-200"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    show={open}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-[210%] -translate-x-1/2 transform bg-transparent px-1 sm:px-0">
                      {({ close }) => (
                        <div className="overflow-hidden rounded-xl shadow-lg ring-1 ring-green-200 ring-opacity-5  dark:ring-2 dark:ring-white">
                          <div className="relative grid gap-6 bg-white px-5 py-6 dark:bg-zinc-900 dark:ring-2  sm:gap-8 sm:px-5 sm:py-4">
                            {consultas.map((item) => {
                              if (item.name !== "Recetario") {
                                return (
                                  <Link
                                    onClick={() => close()}
                                    key={item.name}
                                    href={item.href}
                                    className="hover:text-semibold rounded-md p-3 text-base font-medium text-gray-500 hover:bg-green-200 hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-8 dark:text-white dark:hover:text-gray-500 dark:hover:decoration-white"
                                  >
                                    {item.name}
                                  </Link>
                                );
                              } else {
                                return (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    className="hover:text-semibold pointer-events-none flex items-center gap-2 rounded-md p-3 text-base font-medium text-gray-300 hover:bg-gray-200 hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-8 dark:text-gray-600/80 dark:hover:text-gray-500 dark:hover:decoration-white"
                                  >
                                    {item.name}
                                    <AiFillTool
                                      className="text-green-200"
                                      size={20}
                                    />
                                  </Link>
                                );
                              }
                            })}
                          </div>
                        </div>
                      )}
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Link
              href="/contacto"
              className="hover:text-semibold text-base font-medium text-gray-500 hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-8 dark:text-white dark:hover:decoration-green-200"
            >
              Contacto
            </Link>
          </Popover.Group>

          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <DarkModeButton />
            <Link
              href="/solicitar-turno"
              className="ml-8 inline-flex animate-bounce items-center justify-center whitespace-nowrap rounded-full border border-transparent bg-white/60 px-4 py-2 text-base font-medium text-gray-500 shadow-sm hover:border-gray-500 hover:bg-white hover:text-gray-500 dark:bg-green-200 dark:text-gray-500 dark:hover:bg-green-300 dark:hover:text-white"
            >
              Solicitar turno
            </Link>
          </div>
        </div>
      </div>
      {/* empieza mobile popup */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-14 right-8 z-[10000] w-[335px] origin-top-right transform p-2 transition md:hidden"
        >
          {({ close }) => (
            <div className="rounded-lg bg-white shadow-lg ring-1 ring-green-500/50 ring-opacity-5 dark:bg-zinc-900 dark:ring-white">
              <div className="px-5 pt-5 pb-1">
                <div className="flex items-center justify-between">
                  <MobileDarkModeButton />
                  <div className="-mr-2 ">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-green-200 focus-visible:bg-green-200 focus-visible:text-white focus-visible:outline-none dark:bg-zinc-900">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className=" space-y-6  rounded-t-xl rounded-b-lg py-6 px-5 shadow-sm">
                <div className="grid grid-cols-1 gap-y-4 gap-x-8 ">
                  <Link
                    onClick={() => close()}
                    href="/"
                    className="select-none rounded-md p-3 text-base font-medium text-gray-600 underline decoration-white decoration-2 underline-offset-8 hover:cursor-pointer hover:rounded-md hover:bg-green-200 hover:decoration-white dark:text-gray-300 dark:hover:text-gray-600 dark:hover:decoration-gray-600"
                  >
                    Inicio
                  </Link>
                  <Link
                    onClick={() => close()}
                    href="/about"
                    className="select-none rounded-md p-3 text-base font-medium text-gray-600 underline decoration-white decoration-2 underline-offset-8 hover:cursor-pointer hover:rounded-md hover:bg-green-200 hover:decoration-white dark:text-gray-300 dark:hover:text-gray-600 dark:hover:decoration-gray-600"
                  >
                    Sobre mí
                  </Link>
                  <Link
                    onClick={() => close()}
                    href="/contacto"
                    className="select-none rounded-md p-3 text-base font-medium text-gray-600 underline decoration-white decoration-2 underline-offset-8 hover:cursor-pointer hover:rounded-md hover:bg-green-200 hover:decoration-white dark:text-gray-300 dark:hover:text-gray-600 dark:hover:decoration-gray-600"
                  >
                    Contacto
                  </Link>
                  <div className="border-t-2 border-gray-100 pt-4 text-base font-medium text-gray-700 dark:border-gray-500 dark:text-green-200">
                    Servicios
                  </div>
                  <Link
                    onClick={() => close()}
                    href="/primera-consulta"
                    className="select-none border-l-2 border-b-2 border-green-200 p-2 text-base font-medium text-gray-600 hover:rounded-md hover:bg-green-200 hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-8 dark:border-b-2 dark:border-l-2 dark:text-gray-300 dark:hover:text-gray-600"
                  >
                    Primera consulta
                  </Link>
                  <Link
                    onClick={() => close()}
                    href="/seguimiento"
                    className="select-none border-l-2 border-b-2 border-green-200 p-2  text-base font-medium text-gray-600 hover:rounded-md hover:bg-green-200 hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-8 dark:text-gray-300 dark:hover:text-gray-600"
                  >
                    Seguimiento
                  </Link>
                  <Link
                    onClick={() => close()}
                    href="/guia-inicial"
                    className="border-l-2 border-b-2 border-green-200 p-2  text-base font-medium text-gray-600 hover:rounded-md hover:bg-green-200 hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-8 dark:text-gray-300 dark:hover:text-gray-600"
                  >
                    Guía Inicial
                  </Link>
                  <Link
                    href="/recetario"
                    className="pointer-events-none flex items-center gap-2 border-l-2 border-b-2 border-green-200 p-2  text-base font-medium text-gray-300  hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-8 dark:text-white/30"
                    onClick={() => close()}
                  >
                    Recetario
                    <AiFillTool className="text-green-200" size={20} />
                  </Link>
                </div>
                <div
                  className="border-t-2 border-gray-100 pt-4 dark:border-gray-500"
                  onClick={() => close()}
                >
                  <Link
                    href="/solicitar-turno"
                    className="flex w-full items-center justify-center rounded-md border  border-transparent bg-green-200 px-4 py-2 text-base font-medium text-gray-700 shadow-sm "
                  >
                    Solicitar turno
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
