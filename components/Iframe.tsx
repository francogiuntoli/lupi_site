import Script from "next/script";

export default function Iframe() {
  return (
    <div className="w-full">
      {/* <iframe
        title="iframe"
        className="meetings-iframe-container mx-auto h-[72vh] w-screen sm:mt-0 md:max-w-[95vw] lg:max-w-[60%]"
        src="https://meetings-eu1.hubspot.com/marconi?embed=true"
      />
      <Script src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js" /> */}
      <div
        className="calendly-inline-widget h-screen min-w-[320px] sm:w-screen"
        data-url="https://calendly.com/marconinutricion/consultas"
      >
        <Script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        />
      </div>
    </div>
  );
}
