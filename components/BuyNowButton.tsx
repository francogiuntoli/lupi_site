"use client";

import axios from "axios";
import Link from "next/link";

import { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { AiOutlineDownload } from "react-icons/ai";

export interface BuyNowButtonProps {
  id: string;
  price: number;
  message: string;
  redirectUrl: string;
  // platform: string;
}

export default function BuyNowButton({
  id,
  price,
  message,
  redirectUrl,
}: BuyNowButtonProps) {
  const [urlMP, setUrlMP] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [downloadable, setDownloadable] = useState<boolean>(
    typeof getWithExpiry("guia") == "number" ?? false
  );

  const product = { id, price, redirectUrl };

  useEffect(() => {
    setLoading(true);
    const generateLink = async () => {
      try {
        const { data: preferences } = await axios.post("/api/checkout", {
          product,
        });
        setUrlMP(preferences.url);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(true);
      }
    };
    generateLink();
  }, []);

  return (
    <div>
      <div className="my-2 flex gap-4">
        <div className="flex flex-col items-center gap-2">
          <div>Argentina</div>
          <div>
            {loading ? (
              <Link
                className="pointer-events-none mt-2 flex w-[150px] select-none justify-center rounded-full bg-green-200/60 px-8 py-2 font-medium text-gray-500 shadow-xl hover:border-gray-500 hover:bg-green-200 hover:text-gray-500 dark:bg-green-200 dark:text-gray-500 dark:shadow-2xl dark:shadow-white/50 dark:hover:bg-green-300/50 dark:hover:text-white"
                href={urlMP!}
              >
                <div
                  className="inline-block h-6 w-6 animate-spin rounded-full border-[3px] border-current border-t-transparent"
                  role="status"
                  aria-label="loading"
                >
                  <span className="sr-only">Loading...</span>
                </div>
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
        <div className="block h-[100px] w-[0.5px] bg-gray-200 dark:bg-green-200/[10%]"></div>
        <div className="flex flex-col items-center gap-4">
          <div>Resto del Mundo</div>
          <div>
            <div className="h-[40px] w-[150px] rounded-full bg-transparent shadow-xl dark:shadow-2xl dark:shadow-white/50">
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "AcyBf0AsARlb7gtLEnKIFwWSe1NXVA-P62bGaYakQ_SuWvKdqPIYDzW4OcejiRLA2-VaW1PMPw1mGwHJ",
                  components: "buttons",
                  currency: "EUR",
                  locale: "es_ES",
                }}
              >
                <PayPalButtons
                  style={{
                    layout: "horizontal",
                    label: "pay",
                    shape: "pill",
                    height: 40,
                  }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            currency_code: "EUR",
                            value: "12.00",
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={async (data, actions) => {
                    return await actions?.order
                      ?.capture()
                      .then(function (details) {
                        location.href =
                          "https://drive.google.com/uc?id=1DRFJxpy4P13NdHB1lPWocOlaOCRVgTk3&export=download";
                        setDownloadable(true);
                        setWithExpiry("guia", 6000000);
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
          <button
            onClick={handleDownload}
            className="mt-2 flex animate-bounce select-none justify-center rounded-full bg-green-200/60 px-8 py-2 font-medium text-gray-500 shadow-xl hover:border-gray-500 hover:bg-green-200 hover:text-gray-500 dark:bg-green-200 dark:text-gray-500 dark:shadow-2xl dark:shadow-white/50 dark:hover:bg-green-300/50 dark:hover:text-white"
          >
            <AiOutlineDownload size={35} />
          </button>
        ) : null}
      </div>
    </div>
  );
}

function handleDownload() {
  location.href =
    "https://drive.google.com/uc?id=1DRFJxpy4P13NdHB1lPWocOlaOCRVgTk3&export=download";
}

function setWithExpiry(key: string, ttl: number) {
  const now = new Date();

  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const item = {
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

function getWithExpiry(key: string) {
  const itemStr = localStorage.getItem(key);
  // if the item doesn't exist, return null
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(key);
    return null;
  }
  return item.expiry;
}
