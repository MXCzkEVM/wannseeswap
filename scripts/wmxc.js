const { ethers, getNamedAccounts, deployments, network } = require("hardhat")
const { networkConfig } = require("../helper-hardhat-config.js")
const {
    getDeployment,
    contractAttach,
    tokens,
    getERC20Contract,
} = require("../config/address")

const parseEther = ethers.utils.parseEther
const formatEther = ethers.utils.formatEther
const getBalance = ethers.provider.getBalance

const chainId = network.config.chainId

async function main() {
    const [deployer] = await ethers.getSigners()
    console.log(deployer.address)
    const WMXC = await contractAttach("WMXC9", tokens.WMXCToken)
    let balance = await WMXC.balanceOf(deployer.address)
    console.log(balance)
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
