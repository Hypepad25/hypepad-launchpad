async function main() {
  const [deployer] = await ethers.getSigners();
  const Token = await ethers.getContractFactory("HypeToken");
  const token = await Token.deploy();
  console.log("Token deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
