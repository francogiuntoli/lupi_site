import { useTheme } from "next-themes";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function LogoMain() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme == "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <Image width="40" height="40" src="/logo-green.png" alt="logo" />
      ) : (
        <Image width="40" height="40" src="/logo-white.png" alt="logo" />
      )}
    </div>
  );
}
