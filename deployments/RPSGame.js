async function main() {

    const CONSUMER_ADDRESS = "YOUR_CONSUMER_ADDRESS";
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const RPSGameFactory = await ethers.getContractFactory("RPSGame");
    const RPSGame = await RPSGameFactory.deploy(CONSUMER_ADDRESS);
  
    console.log("Consumer address:", RPSGame.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });