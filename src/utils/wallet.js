
import { ethers } from "ethers";

export async function connectWallet(setAddress) {
  if (window.ethereum) {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setAddress(accounts[0]);
    } catch (err) {
      console.error("User denied wallet connection:", err);
    }
  } else {
    alert("MetaMask not detected. Please install it to use this feature.");
  }
}
