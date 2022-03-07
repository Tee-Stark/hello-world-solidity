// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract HelloWorld {
	string private greet_text; //state variable

	constructor(string memory _gt) {
	   console.log("Deploying Hello World contract greeting you: ", _gt);
           greet_text = _gt;
	}

	function getGreetText() public view returns (string memory) {
	   return greet_text;
	}

	function setGreetText(string memory new_greet) public {
	   console.log("The hello world greeting text will change from %s to %s", greet_text, new_greet);
	   greet_text = new_greet;
	}
}

