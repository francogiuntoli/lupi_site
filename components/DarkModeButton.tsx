"use client";
import { SunIcon } from "@heroicons/react/20/solid";
import { MoonIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

function DarkModeButton() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme == "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <SunIcon
          className="hidden h-6 w-6 cursor-pointer text-green-200 sm:h-8 sm:w-8 md:flex"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MoonIcon
          className="hidden h-6 w-6 cursor-pointer text-white hover:text-gray-500 sm:h-8 sm:w-8 md:flex"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}

export default DarkModeButton;
