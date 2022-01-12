import * as dotenv from "dotenv";
import { NetworksUserConfig } from "hardhat/types";
import "solidity-coverage";
dotenv.config();

// require("dotenv").config({ path: require("find-config")("./.env") });

const FORK_BLOCK_NUMBER: number | undefined = process.env.FORK_BLOCK_NUMBER ? parseInt(process.env.FORK_BLOCK_NUMBER) : 12406069;

export const networks: NetworksUserConfig = {
	coverage: {
		url: "http://127.0.0.1:8555",
		chainId: 1, // tbd
		blockGasLimit: 200000000,
		allowUnlimitedContractSize: true,
	},

	localhost: {
		chainId: 1,
		url: "http://127.0.0.1:8545",
		allowUnlimitedContractSize: true,
	},

	ropsten: {
		chainId: 3,
		url: `https://ropsten.infura.io/v3/${process.env.INFURA_KEY}`,
		accounts: {
			mnemonic: process.env.MNEMONIC,
		},
		allowUnlimitedContractSize: true,
	},

	kovan: {
		chainId: 42,
		url: `https://kovan.infura.io/v3/${process.env.INFURA_KEY}`,
		blockGasLimit: 200000000,
		accounts: {
			mnemonic: process.env.MNEMONIC,
		},
	},

	rinkeby: {
		chainId: 4,
		url: `https://rinkeby.infura.io/v3/${process.env.INFURA_KEY}`,
		blockGasLimit: 200000000,
		accounts: {
			mnemonic: process.env.MNEMONIC,
		},
	},

	mainnet: {
		chainId: 1,
		// url: process.env.ALCHEMY_URL,
		url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
		accounts: {
			mnemonic: process.env.MNEMONIC,
		},
	},

	matic: {
		chainId: 137,
		url: process.env.MATIC_MAINNET_URL,
		accounts: {
			mnemonic: process.env.MNEMONIC,
		},
	},

	matic_mumbai: {
		chainId: 80001,
		url: process.env.MATIC_MUMBAI_URL,
		accounts: {
			mnemonic: process.env.MNEMONIC,
		},
	},

	arbitrum_testnet: {
		chainId: 421611,
		url: process.env.ARBITRUM_TESTNET_URL,
		accounts: {
			mnemonic: process.env.MNEMONIC,
		},
	},
};

if (process.env.ALCHEMY_URL) {
	networks.hardhat = {
		chainId: 1,
		forking: {
			url: process.env.ALCHEMY_URL,
			blockNumber: FORK_BLOCK_NUMBER,
		},

		// accounts: {
		//     mnemonic: process.env.MNEMONIC
		// }
	};
} else {
	networks.hardhat = {
		allowUnlimitedContractSize: true,
	};
}
