import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateAuctionItem from "./components/CreateAuctionItem";
import Navigation from "./components/Navigation";
import SecretToken from "./components/SecretToken";
import BidOnAuctionItem from "./components/BidOnAuctionItem";
import { projectId, testnets, mainnets, metadata } from "./config/config";
import MyImage from "./poweredby.png";
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: "...", // used for the Coinbase SDK
  defaultChainId: 1, // used for the Coinbase SDK
});

createWeb3Modal({
  chainImages: {
    // Arbitrum Mainnet
    42161: "https://arbiscan.io/images/svg/brands/arbitrum.svg?v=1.5",
    // Linea Mainnet
    59144: "https://lineascan.build/images/svg/brands/main.svg?v=24.4.2.0",

    //Scroll Mainnet
    534352: "https://scrollecosystem.io/images/banner_logo.png",

    // Metis Mainnet
    1088: "https://cms-cdn.avascan.com/cms2/metis.97de56bab032.svg",

     // XDC Mainnet
     50: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2KDAtPElT99WYln7tyeQPlPCiBWaRfRA_guAL0HImJWBcRympM_r5VBSiOR29zFpKIU&usqp=CAU",

     // Lisk Mainnet
     1135: "https://pbs.twimg.com/profile_images/1610268745682849796/pjuC1Y85_400x400.jpg",

     //Mainnetz Mainnet
     2016: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2KDAtPElT99WYln7tyeQPlPCiBWaRfRA_guAL0HImJWBcRympM_r5VBSiOR29zFpKIU&usqp=CAU",

    //Sepolia Testnet
    11155111:
      "https://moralis.io/wp-content/uploads/web3wiki/159-goerli/637aee14aa9d9f521437ec16_hYC2y965v3QD7fEoVvutzGbJzVGLSOk6RZPwEQWcA_E.jpeg",

    // Scroll Testnet
    534351: "https://scrollecosystem.io/images/banner_logo.png",

    // Polygon Amoy Testnet
    80002:
      "https://assets-global.website-files.com/637e2b6d602973ea0941d482/63e26c8a3f6e812d91a7aa3d_Polygon-New-Logo.png",

    // Optimism Testnet
    11155420:
      "https://optimistic.etherscan.io/assets/optimism/images/svg/logos/chain-light.svg?v=24.4.4.4",

    // Arbitrum Testnet
    421614: "https://arbiscan.io/images/svg/brands/arbitrum.svg?v=1.5",

    // Base Sepolia Testnet
    84532: "https://basescan.org/images/svg/brands/main.svg?v=24.4.4.9",

    // Berachain Testnet
    80085:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq-tjg8Kqgr76Ved6PbcjBoGCHWwnhDUljH-CziyBOzw&s",

    // Etherlink Testnet
    128123: "https://www.etherlink.com/favicon.ico",

    //Metis Sepolia Testnet
    59902: "https://cms-cdn.avascan.com/cms2/metis.97de56bab032.svg",

    // Near Aurora Testnet
    1313161555:
      "https://pbs.twimg.com/profile_images/1610936866227818502/kIqkTKdR_400x400.jpg",

    // Linea Testnet
    59141: "https://lineascan.build/images/svg/brands/main.svg?v=24.4.2.0",

    // XDC Testnet
    51: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2KDAtPElT99WYln7tyeQPlPCiBWaRfRA_guAL0HImJWBcRympM_r5VBSiOR29zFpKIU&usqp=CAU",

    //Lisk Sepolia
    4202: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRan6D0dfiYmx2sv4kUPsFkfUDxYUWEuuA_dLJWgPm8Q&s",

     // Kakarot Testnet
     1802203764: "https://assets-global.website-files.com/6464a063474b57e2c4e03b61/64a20e2749d92613acf4fd1b_Logo%20dark.svg",

      // Mainnetz Testnet
      9768: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2KDAtPElT99WYln7tyeQPlPCiBWaRfRA_guAL0HImJWBcRympM_r5VBSiOR29zFpKIU&usqp=CAU",

      // Moonbeam Testnet
      1287: "https://moonbase.moonscan.io/assets/moonbase/images/svg/logos/chain-light.svg?v=24.6.1.0",

       // Fhenix Testnet
       8008135: "https://media.licdn.com/dms/image/D4D0BAQFtUjFKqv_DJA/company-logo_200_200/0/1695715998703/fhenix_logo?e=2147483647&v=beta&t=U2cvAqKuWeEqE5Cb4HgyuBmVTUcBuZvsDi0JdivU3nw",
},
ethersConfig,
chains: [
  mainnets.ethereumMainnet,
  mainnets.binanceSmartChainMainnet,
  mainnets.polygonMainnet,
  mainnets.optimismMainnet,
  mainnets.arbitrumMainnet,
  mainnets.avalancheMainnet,
  mainnets.baseMainnet,
  mainnets.lineaMainnet,
  mainnets.scrollMainnet,
  mainnets.metisMainnet,
  mainnets.XDCMainnet,
  mainnets.NearAuroraMainnet,
  mainnets.LiskMainnet,
  mainnets.MainnetzMainnet,
  mainnets.MoonriverMainnet,
  mainnets.MoonbeamMainnet,
  testnets.sepoliaTestnet,
  testnets.scrollTestnet,
  testnets.polygonTestnet,
  testnets.optimismTestnet,
  testnets.arbitrumTestnet,
  testnets.baseSepoliaTestnet,
  testnets.berachainTestnet,
  testnets.etherlinkTestnet,
  testnets.metisSepoliaTestnet,
  testnets.nearAuroraTestnet,
  testnets.lineaSepoliaTestnet,
  testnets.XDCApothemTestnet,
  testnets.liskSepoliaTestnet,
  testnets.KakarotTestnet,
  testnets.MainnetzTestnet,
  testnets.MoonbaseAlphaTestnet,
  testnets.FhenixTestnet,
],
projectId,
enableAnalytics: true, // Optional - defaults to your Cloud configuration
})


function App() {
  return (
    <div className="mt-4">
      <w3m-button />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6  lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="text-white text-xl font-bold mb-10 ml-16">
            EVM Sealed-bid Auctions
            <h6 className="text-xs ml-14 hover:underline">
              <a
                href="https://docs.scrt.network/secret-network-documentation/confidential-computing-layer/ethereum-evm-developer-toolkit/usecases/vrf/vrf-developer-tutorial"
                target="_blank"
              >
                [click here for docs]
              </a>
            </h6>
          </div>

          <Router>
            <Navigation />

            <Routes>
              <Route path="/create" element={<CreateAuctionItem />} />
              <Route path="/bid" element={<BidOnAuctionItem />} />
            </Routes>
          </Router>
          <img
            src={MyImage}
            alt="Descriptive Text"
            className=" w-18 h-12 rounded-lg shadow-lg mt-8 ml-36"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
