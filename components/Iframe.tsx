import Script from "next/script";

export default function Iframe() {
  return (
    <>
      <iframe
        title="iframe"
        className="meetings-iframe-container mx-auto h-[72vh] w-screen sm:mt-0 md:max-w-[95vw] lg:max-w-[60%]"
        src="https://meetings-eu1.hubspot.com/marconi?embed=true"
      />
      <Script src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js" />
    </>
  );
}
