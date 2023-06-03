"use client";

import axios from "axios";
import Link from "next/link";

import { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { AiOutlineDownload } from "react-icons/ai";

export interface BuyNowButtonProps {
  id: string;
  priceMP: number;
  pricePP: number;
  message: string;
  redirectUrl: string;
  href: string;
}

export default function BuyNowButton({
  id,
  priceMP: price,
  pricePP,
  message,
  href,
  redirectUrl,
}: BuyNowButtonProps) {
  const [urlMP, setUrlMP] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [downloadable, setDownloadable] = useState<boolean>(false);

  const product = { id, price, redirectUrl };

  useEffect(() => {
    setLoading(true);
    setDownloadable(() => {
      if (typeof getWithExpiry(`${redirectUrl}`) === "number") {
        return true;
      } else {
        return false;
      }
    });

    const generateLink = async () => {
      try {
        const { data: preferences } = await axios.post("/api/checkout", {
          product,
        });
        setUrlMP(preferences.url);
        setLoading(false);
      } catch (error) {
        console.error("error", error);
        setLoading(true);
      }
    };
    if (!downloadable) {
      generateLink();
    }
  }, []);

  return (
    <div>
      <div className="my-2 flex gap-4">
        <div
          className={`flex flex-col items-center gap-2 ${
            downloadable ? "hidden" : ""
          }`}
        >
          <div>Argentina</div>
          <div>
            {loading && downloadable ? (
              <Link
                className="pointer-events-none mt-2 flex w-[150px] select-none justify-center rounded-full bg-green-200/60 px-8 py-2 font-medium text-gray-500 shadow-xl hover:border-gray-500 hover:bg-green-200 hover:text-gray-500 dark:bg-green-200 dark:text-gray-500 dark:shadow-2xl dark:shadow-white/50 dark:hover:bg-green-300/50 dark:hover:text-white"
                href={urlMP!}
              >
                {downloadable ? (
                  <div>{message}</div>
                ) : (
                  <div
                    className="inline-block h-6 w-6 animate-spin rounded-full border-[3px] border-current border-t-transparent"
                    role="status"
                    aria-label="loading"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
              </Link>
            ) : (
              <Link
                className="mt-2 flex w-[150px] select-none justify-center rounded-full bg-green-200/60 px-8 py-2 font-medium text-gray-500 shadow-xl hover:border-gray-500 hover:bg-green-200 hover:text-gray-500 dark:bg-green-200 dark:text-gray-500 dark:shadow-2xl dark:shadow-white/50 dark:hover:bg-green-300/50 dark:hover:text-white"
                href={urlMP!}
              >
                {message}
              </Link>
            )}
          </div>
        </div>
        <div
          className={`block h-[100px] w-[0.5px] bg-gray-200 dark:bg-green-200/[10%] ${
            downloadable ? "hidden" : ""
          }`}
        ></div>
        <div
          className={`flex flex-col items-center gap-4 ${
            downloadable ? "hidden" : ""
          }`}
        >
          <div>Resto del Mundo</div>
          <div className="bg-transparent">
            <div className="h-[40px] w-[150px] rounded-full shadow-xl dark:shadow-2xl dark:shadow-white/50">
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "AV0dzhaktFA-C7UfH34n2z3AndhZymp9i48jd9nBRh3eHNWhKUxqbnUso5KN2qcM9d63P8ZaDWBfoxcW",
                  currency: "EUR",
                  locale: "es_ES",
                }}
              >
                <PayPalButtons
                  style={{
                    layout: "horizontal",
                    shape: "pill",
                    height: 40,
                  }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            currency_code: "EUR",
                            value: `${pricePP}`,
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={async (data, actions) => {
                    return await actions?.order
                      ?.capture()
                      .then(function (details) {
                        location.href = href;
                        setDownloadable(true);
                        setWithExpiry(`${redirectUrl}`, 3600000);
                      });
                  }}
                />
              </PayPalScriptProvider>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        {downloadable ? (
          <>
            <div
              className={`flex flex-col items-center gap-4 ${
                downloadable ? "" : "hidden"
              }`}
            >
              <div className="-mb-4 p-0 text-2xl">Download </div>
              <div className="text-sm text-gray-500">
                (Expira luego de 60 minutos)
              </div>
              <button
                onClick={() => handleDownload(href)}
                className="mt-2 flex animate-bounce select-none justify-center rounded-full bg-green-200/60 px-8 py-2 font-medium text-gray-500 shadow-xl hover:border-gray-500 hover:bg-green-200 hover:text-gray-500 dark:bg-green-200 dark:text-gray-500 dark:shadow-2xl dark:shadow-white/50 dark:hover:bg-green-300/50 dark:hover:text-white"
              >
                <AiOutlineDownload size={35} />
              </button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

function handleDownload(href: string) {
  location.href = href;
}

function setWithExpiry(key: string, ttl: number) {
  const now = new Date();
  const item = {
    expiry: now.getTime() + ttl,
  };
  localStorage?.setItem(key, JSON.stringify(item));
}

function getWithExpiry(key: string) {
  const itemStr = localStorage?.getItem(key);
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  if (now.getTime() > item.expiry) {
    localStorage?.removeItem(key);
    return null;
  }
  return item.expiry;
}
