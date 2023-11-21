const { RESTDataSource } = require("apollo-datasource-rest");

// Vitalik's Ethereum address used for example queries
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"; 

// Etherscan API data source class that extends Apollo RESTDataSource
class EtherDataSource extends RESTDataSource {

  // Constructor sets the base URL for Etherscan API 
  constructor() {
    super();
    this.baseURL = "https://api.etherscan.io/api";
  }

  // Gets ETH balance for the example address
  async etherBalanceByAddress() {
    return this.get(
      `?module=account&action=balance&address=${eth_address}&tag=latest&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Gets total ETH supply
  async totalSupplyOfEther() {
    return this.get(
      `?module=stats&action=ethsupply&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Gets latest ETH price
  async getLatestEthereumPrice() {
    return this.get(
      `?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Estimates gas usage for block confirmation
  async getBlockConfirmationTime() {
    return this.get(
      `?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=${process.env.ETHERSCAN_API}`
    );
  }
}

module.exports = EtherDataSource;
