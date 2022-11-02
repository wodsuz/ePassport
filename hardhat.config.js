require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("@nomicfoundation/hardhat-toolbox");
// import "@nomicfoundation/hardhat-chai-matchers";

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: process.env.API_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
