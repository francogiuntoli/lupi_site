import "../styles/globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Providers from "./Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning={true}>
      <head />
      <body className="flex min-h-[98vh] flex-col justify-between  dark:bg-zinc-900">
        <Providers>
          <Header />
          <div>{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
