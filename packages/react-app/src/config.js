import { Goerli, Sepolia } from "@usedapp/core";


export const ROUTER_ADDRESS = "0x341DeF52C72DE0B1a814BF42c427D375ff7A504F"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Sepolia.chainId,
  readOnlyUrls: {
    [Sepolia.chainId]: "https://eth-sepolia.g.alchemy.com/v2/84Njg7IAJrYtPUNaQxQgZTaXFaxsUyqP",
  },
};