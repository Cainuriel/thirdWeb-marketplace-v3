/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { BinanceTestnet } from "@thirdweb-dev/chains";
export const NETWORK = BinanceTestnet;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0x3d2c1ecc48b1bb5Bf9207866bCdD39ae53E7BC74";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS =
  "0xc4fc1d5d2E3836537FD463F230192492E7066B1E";

// (Optional)
export const ETHERSCAN_URL = "https://testnet.bscscan.com/";
