const main = async => {
	const [deployer] = await hre.ethers.getSigners();
	const accBalance = await deployer.getBalance();
	
	console.log(`Deploying HelloWorld Smart contract with account: ${deployer.address}`);
	console.log(`Account balance: ${accBalance.toString()}`);
	
	const HelloContractFactory = await hre.ethers.getContractFactory("HelloWorld");
	const HelloContract = await HelloContractFactory.deploy();

	await HelloContract.deployed();
	console.log(`Contract address: ${HelloContract.address});
}

main()
.then(() => process.exit(0))
.catch(err => {
  console.error(err);
  process.exit(1);
});
