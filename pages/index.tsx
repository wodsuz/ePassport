import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const pageTitle = "ePassport";
  const description =
    "ePassport mint your digital Passport. With ePassport you can get collect stamps of your favourite cities, earn rewards, become a member of exclusive club, get discounts while travelling, customize your virtual passport and order the physical ePassport NFT.";
  return (
    <div className="w-full min-h-screen bg-cyan-200 ">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content={description}></meta>
        <Link rel="icon" href="/favicon.ico"></Link>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/*
        
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content={twitterHandle} key="twhandle" />

        <meta property="og:url" content={currentURL} key="ogurl" />
        <meta property="og:image" content={previewImage} key="ogimage" />
        <meta property="og:site_name" content={siteName} key="ogsitename" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />

        */}

        <title>{pageTitle}</title>
      </Head>
    </div>
  );
}
