const main = async () => {
	const HelloContract = hre.ethers.getContractFactory("HelloWorld");
	const helloZuri = await HelloContract.deploy("Hello everyone on the Zuri team!");
	await helloZuri.deployed();
	
	console.log("HelloWorld contract deployed at: ", helloZuri.address);
	const zuriGreeting = await helloZuri.getGreetText();
	console.log(zuriGreeting);

	await helloZuri.setGreetText("Man! Blockgames has been so good!");
	console.log("Greeting text has been changed bro! It is now: ", helloZuri.getGreetText());
}

main()
.then(()=> process.exit(0))
.catch(err => {
   console.error(err);
   process.exit(1);
})