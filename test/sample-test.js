const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const deployedNox = await ethers.getContractFactory("NitroxToken");
    const tx = await deployedNox.deploy("NitroxToken", "NT");

    await tx.deployed();

    console.log(tx.address);
    // const contractaddress = {
    //   address: tx.address,
    // };

    // fs.writeFileSync(
    //   `./build/contractaddress.json`,
    //   JSON.stringify(contractaddress, undefined, 4)
    // );
    console.log("completed");
  });
});
