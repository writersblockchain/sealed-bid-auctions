// Export Project ID
export const projectId = "6e58f7c259de8fd44a4b237465fe9956";

// Mainnet configurations
export const mainnets = {
  ethereumMainnet: {
    chainId: 1,
    name: "Ethereum",
    currency: "ETH",
    explorerUrl: "https://etherscan.io",
    rpcUrl: "https://cloudflare-eth.com",
  },
  binanceSmartChainMainnet: {
    chainId: 56,
    name: "BNB Chain",
    currency: "BNB",
    explorerUrl: "https://bscscan.com/",
    rpcUrl: "https://bsc-dataseed.binance.org/",
  },
  polygonMainnet: {
    chainId: 137,
    name: "Polygon Mainnet",
    currency: "MATIC",
    explorerUrl: "https://polygonscan.com/",
    rpcUrl: "https://polygon-mainnet.infura.io",
  },
  optimismMainnet: {
    chainId: 10,
    name: "OP Mainnet",
    currency: "ETH",
    explorerUrl: "https://optimistic.etherscan.io/",
    rpcUrl: "https://optimism-mainnet.infura.io",
  },
  arbitrumMainnet: {
    chainId: 42161,
    name: "Arbitrum One",
    currency: "ETH",
    explorerUrl: "https://explorer.arbitrum.io",
    rpcUrl: "https://arbitrum-mainnet.infura.io",
  },
  avalancheMainnet: {
    chainId: 43114,
    name: "Avalanche Network C-Chain",
    currency: "AVAX",
    explorerUrl: "https://snowtrace.io/",
    rpcUrl: "https://avalanche-mainnet.infura.io",
  },
  baseMainnet: {
    chainId: 8453,
    name: "Base Mainnet",
    currency: "ETH",
    explorerUrl: "https://basescan.org",
    rpcUrl: "https://mainnet.base.org",
  },
  lineaMainnet: {
    chainId: 59144,
    name: "Linea",
    currency: "ETH",
    explorerUrl: "https://lineascan.build",
    rpcUrl: "https://linea.blockpi.network/v1/rpc/public",
  },
  scrollMainnet: {
    chainId: 534352,
    name: "Scroll",
    currency: "ETH",
    explorerUrl: "https://scrollscan.com",
    rpcUrl: "https://rpc.scroll.io",
  },
  metisMainnet: {
    chainId: 1088,
    name: "Metis",
    currency: "METIS",
    explorerUrl: "https://1088.routescan.io",
    rpcUrl: "https://andromeda.metis.io",
  
  },
  XDCMainnet: {
    chainId: 50,
    name: "XDC Mainnet",
    currency: "XDC",
    explorerUrl: "https://explorer.xinfin.network/",
    rpcUrl: "https://rpc.xinfin.network",
  },
  NearAuroraMainnet: {
    chainId: 1313161554,
    name: "Aurora Mainnet",
    currency: "ETH",
    explorerUrl: "https://explorer.mainnet.aurora.dev/",
    rpcUrl: "https://mainnet.aurora.dev",
  },
  LiskMainnet: {
    chainId: 1135,
    name: "Lisk",
    currency: "ETH",
    explorerUrl: "https://blockscout.lisk.com",
    rpcUrl: "https://rpc.api.lisk.com",
  },
  MainnetzMainnet: {
    chainId: 2016,
    name: "MainnetZ Mainnet",
    currency: "NetZ",
    explorerUrl: "https://explorer.mainnetz.io",
    rpcUrl: "https://mainnet-rpc.mainnetz.io",
  },
  MoonriverMainnet: {
    chainId: 1285,
    name: "Moonriver",
    currency: "MOVR",
    explorerUrl: "https://moonriver.moonscan.io/",
    rpcUrl: "https://rpc.api.moonriver.moonbeam.network",
  },
  MoonbeamMainnet: {
    chainId: 1284,
    name: "Moonbeam",
    currency: "GLMR",
    explorerUrl: "https://moonbeam.moonscan.io",
    rpcUrl: "https://rpc.api.moonbeam.network",
  }
};
// Testnet configurations
export const testnets = {
  sepoliaTestnet: {
    chainId: 11155111,
    name: "Sepolia",
    currency: "ETH",
    explorerUrl: "https://sepolia.etherscan.io",
    rpcUrl: "https://rpc.sepolia.org",
  },
  scrollTestnet: {
    chainId: 534351,
    name: "Scroll Sepolia Testnet",
    currency: "ETH",
    explorerUrl: "https://sepolia.scrollscan.com",
    rpcUrl: "https://sepolia-rpc.scroll.io/",
  },
  polygonTestnet: {
    chainId: 80002,
    name: "Polygon Amoy Testnet",
    currency: "MATIC",
    explorerUrl: "https://amoy.polygonscan.com/",
    rpcUrl: "https://rpc-amoy.polygon.technology/",
  },
  optimismTestnet: {
    chainId: 11155420,
    name: "Optimism Sepolia",
    currency: "ETH",
    explorerUrl: "https://optimism-sepolia.blockscout.com",
    rpcUrl: "https://sepolia.optimism.io",
  },
  arbitrumTestnet: {
    chainId: 421614,
    name: "Arbitrum Sepolia",
    currency: "ETH",
    explorerUrl: "https://sepolia.arbiscan.io",
    rpcUrl: "https://sepolia-rollup.arbitrum.io/rpc",
  },
  baseSepoliaTestnet: {
    chainId: 84532,
    name: "Base Sepolia",
    currency: "ETH",
    explorerUrl: "https://sepolia-explorer.base.org",
    rpcUrl: "https://sepolia.base.org",
  },
  berachainTestnet: {
    chainId: 80085,
    name: "Berachain Artio",
    currency: "BERA",
    explorerUrl: "https://artio.beratrail.io/",
    rpcUrl: "https://artio.rpc.berachain.com/",
  },
  etherlinkTestnet: {
    chainId: 128123,
    name: "Etherlink Testnet",
    currency: "XTZ",
    explorerUrl: "https://testnet-explorer.etherlink.com/",
    rpcUrl: "https://node.ghostnet.etherlink.com/",
  },
  metisSepoliaTestnet: {
    chainId: 59902,
    name: "Metis Sepolia Testnet",
    currency: "sMETIS",
    explorerUrl: "https://sepolia-explorer.metisdevops.link",
    rpcUrl: "https://sepolia.metisdevops.link",
  },
  nearAuroraTestnet: {
    chainId: 1313161555,
    name: "Aurora Testnet",
    currency: "ETH",
    explorerUrl: "https://explorer.testnet.aurora.dev/",
    rpcUrl: "https://testnet.aurora.dev",
  },
  lineaSepoliaTestnet: {
    chainId: 59141,
    name: "Linea Sepolia test network",
    currency: "ETH",
    explorerUrl: "https://sepolia.lineascan.build",
    rpcUrl: "https://rpc.sepolia.linea.build",
  },
  XDCApothemTestnet: {
    chainId: 51,
    name: "XDC TestNet",
    currency: "XDC",
    explorerUrl: "https://explorer.apothem.network/",
    rpcUrl: "https://rpc.apothem.network",
  },
  liskSepoliaTestnet: {
    chainId: 4202,
    name: "Lisk Sepolia Testnet",
    currency: "ETH",
    explorerUrl: "https://sepolia-blockscout.lisk.com",
    rpcUrl: "https://rpc.lisk-sepolia-testnet.gelato.digital",
  },
  KakarotTestnet: {
    chainId: 1802203764,
    name: "Kakarot Sepolia",
    currency: "ETH",
    explorerUrl: "https://sepolia.kakarotscan.org",
    rpcUrl: "https://sepolia-rpc.kakarot.org",
  },
  MainnetzTestnet: {
    chainId: 9768,
    name: "MainnetZ Testnet",
    currency: "NetZ",
    explorerUrl: "https://testnet.mainnetz.io/",
    rpcUrl: "https://testnet-rpc.mainnetz.io",
  },
  MoonbaseAlphaTestnet: {
    chainId: 1287,
    name: "moonbase-alphanet",
    currency: "DEV",
    explorerUrl: "https://moonbase.moonscan.io/",
    rpcUrl: "https://rpc.testnet.moonbeam.network",
  },
  FhenixTestnet: {
    chainId: 8008135,
    name: "Fhenix Helium",
    currency: "tETH",
    explorerUrl: "https://explorer.helium.fhenix.zone",
    rpcUrl: "https://api.helium.fhenix.zone/",
  },
};

// 4. Metadata Object
export const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://secretpath-connect.vercel.app", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};
