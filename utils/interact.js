import { ethers } from "ethers";
import { CONTRACT_ADDRESS, API_KEY } from "../src/env";

const contract = require("../abi/ePassport.json");
const alchemyProvider = new ethers.providers.AlchemyProvider("goerli", API_KEY);
const nftContract = new ethers.Contract(
  CONTRACT_ADDRESS,
  contract.abi,
  alchemyProvider
);

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

export const getMaxMintAmount = async () => {
  try {
    const maxMintAmount = await nftContract.maxTokenPurchase();
    return maxMintAmount;
  } catch (error) {
    console.log(error);
  }
};

export const getTotalSupply = async () => {
  try {
    const tottalSupply = await nftContract.totalSupply();
    return tottalSupply;
  } catch (error) {
    console.log(error);
  }
};

export const getNftPrice = async () => {
  try {
    const result = await nftContract.tokenPrice();
    const resultEther = ethers.utils.formatEther(result);
    return resultEther;
  } catch (error) {
    console.log(error);
  }
};

export const getSaleState = async () => {
  try {
    const saleState = await nftContract.saleIsActive();
    return saleState;
  } catch (error) {
    console.log(error);
  }
};

export async function mintNFT(mintAmount) {
  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const cont = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);
    const val = ethers.utils.parseEther((0.0019 * mintAmount).toString());
    try {
      const response = await cont.mintPassport(
        ethers.BigNumber.from(mintAmount),
        { value: val }
      );
      return response;
    } catch (error) {
      console.log("error: ", error);
    }
  }
  /*
    if (!window.ethereum.selectedAddress) {
      return {
        success: false,
        status: (
          <p>
            🦊 Connect to Metamask using{" "}
            <span className="px-2 text-purple-600">Connect Wallet</span> button.
          </p>
        ),
      };
    }
    */
}
