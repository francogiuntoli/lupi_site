"use client";

import { useEffect, useState } from "react";

interface NotificationProps {
  isOpen: boolean;
  type: "approved" | "failure" | null;
  content: string;
}

export default function Notification() {
  const [notification, setNotification] = useState<NotificationProps>({
    isOpen: false,
    type: null,
    content: "",
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get("status");

    if (status === "approved") {
      setNotification({
        content: "Pago aprobado!",
        isOpen: true,
        type: "approved",
      });
    } else if (status === "failure") {
      setNotification({
        content: "Pago fallido!",
        isOpen: true,
        type: "failure",
      });
    }

    setTimeout(() => {
      setNotification({ isOpen: false, type: null, content: "" });
    }, 3000);
  }, []);

  return (
    <div className="my-4">
      {notification.isOpen && (
        <div className="mx-2 flex -rotate-3 scale-110 animate-pulse items-center justify-center pl-0 duration-300">
          <div
            className={`flex h-full items-center rounded-l-md px-4 py-2 ${
              notification.type === "approved"
                ? "bg-green-200"
                : "bg-orange-500"
            }`}
          >
            <img
              src={`${notification.type}.svg`}
              alt={notification.type!}
              width={25}
              height={25}
            />
          </div>
          <p className="rounded-r-md bg-[#2f3032] p-4 font-semibold">
            {notification.content}
          </p>
        </div>
      )}
    </div>
  );
}
