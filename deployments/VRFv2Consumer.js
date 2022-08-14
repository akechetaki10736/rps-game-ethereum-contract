async function main() {

    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const Consumer = await ethers.getContractFactory("VRFv2Consumer");
    const consumer = await Consumer.deploy("YOUR_CHALIK_VRF_SUBSCRIPTION_ID");
  
    console.log("Consumer address:", consumer.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });