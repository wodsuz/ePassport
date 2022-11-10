import Head from "next/head";

const Header = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const pageTitle = "ePassport NFT © | " + currentMonth + "/" + currentYear;
  const description =
    "ePassport mint your digital Passport. With ePassport you can get collect stamps of your favourite cities, earn rewards, become a member of exclusive club, get discounts while travelling, customize your virtual passport and order the physical ePassport NFT.";

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Header;
