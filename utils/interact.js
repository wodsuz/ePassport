import { ethers } from "ethers";
//const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
//const web3 = createAlchemyWeb3(process.env.NEXT_PUBLIC_API_URL);
/*const contract = require("../artifacts/contracts/ePassport.sol/ePassport.json");
const contractAddress = "0x124E335Ec3dF43D9545ec60B3A47Bb95273A7a6a";
// const nftContract = new ethers.Contract(contractAddress, contract.abi);

const alchemyProvider = new ethers.providers.AlchemyProvider(
  "goerli",
  "jDGloZuFo7oGv3OKTVmWdFqvGF6KeBpC"
);
const nftContract = new ethers.Contract(
  contractAddress,
  contract.abi,
  alchemyProvider
);

// const nftContract = new web3.eth.Contract(contract.abi, contractAddress);
*/
export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const obj = {
        status: "",
        address: addressArray[0],
      };

      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😞 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://metamask.io/download.html"
            >
              You must install MetaMask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "",
        };
      } else {
        return {
          address: "",
          status: "😞 ",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😞 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://metamask.io/download.html"
            >
              You must install MetaMask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

// Contract Methods
