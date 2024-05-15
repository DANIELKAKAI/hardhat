const { ethers } = require("ethers");

const TokenABIJson = require("./artifacts/contracts/Token.sol/Token.json");

// Connect to Sepolia network
const provider = new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/sJW9tygbgrp-Q_hh23-C-hgKiaJsaBb7");

// ABI and Address of the deployed contract
const contractABI = TokenABIJson.abi;
const contractAddress = "0x01112eC398f1F441D22a2D3a2375904C4134A16D";

// Connect to the contract
const contract = new ethers.Contract(contractAddress, contractABI, provider);

// Example: Call a read-only function
async function readFunction() {
    const supply = await contract.totalSupply();
    console.log("Supply:", supply);

    const owner = await contract.owner();
    console.log("Owner:", owner);

    const name = await contract.name();
    console.log("Name:", name);

    const symbol = await contract.symbol();
    console.log("Symbol:", symbol);
}

async function balanceOf(addr) {
    const balance = await contract.balanceOf(addr);
    console.log(balance);
}

async function transfer(to) {
    const signer = await provider.getSigner();
    console.log(signer)
    const tx = await contract.connect(signer).transfer(to, 50);
    tx.wait();
    console.log(balance);
}


readFunction();

//balanceOf("0x141adc0e0158B4c6886534701412da2E2b0d7fF1")

//balanceOf("0x8C998Ca53F797646b6CBa17bBD191d521648E4EC")

//transfer("0x141adc0e0158B4c6886534701412da2E2b0d7fF1")
