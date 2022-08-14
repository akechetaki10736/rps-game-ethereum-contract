/** @type import('hardhat/config').HardhatUserConfig */

require("@nomicfoundation/hardhat-toolbox");

const INFURA_API_KEY = "YOUR_INFURA_API_KEY";
const RINKEBY_PRIVATE_KEY = "YOUR_RINKEBY_PRIVATE_KEY";

module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      accounts: {
        mnemonic: RINKEBY_PRIVATE_KEY,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20,
        passphrase: "",
      },
    },
  },
};