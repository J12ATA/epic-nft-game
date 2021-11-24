const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ['RedMoons', 'MetaCyclops', 'Hypnosis'], // Names
    [
      'https://lh3.googleusercontent.com/w3_ePnu29gFaCJe7SsIvei1jK8XtwE7nSN19v5KSMn3dTi55BDfkLgyGm-_LAprXlLgFBC3GxeQB8kBqwjx9e5xYQVOp1D9WznCKyA=w600', // Images
      'https://lh3.googleusercontent.com/uaQG3ho7915lI9ICAmCLMTZctvd0L6mwhirNTP77CEtqZXaPDRDGXgWSeZoIv3uy6kHy8PJqTpetEyOoNYF1_SKgPlRTvuyoZAF-Gg=w600',
      'https://lh3.googleusercontent.com/rgfZYZOiyzQ3Da8gV9p4n6qNaXhqcpQhRaV_hvvAU2U34CxOAxi9w35VPtI1lVOXa0RbT-icvM_r7-7v10sDG_GwzlW9V4w2PRUdl38=w600',
    ],
    [100, 200, 300], // HP values
    [100, 50, 25] // Attack damage values
  );
  await gameContract.deployed();
  console.log('Contract deployed to:', gameContract.address);
  let txn;
  txn = await gameContract.mintCharacterNFT(0);
  await txn.wait();
  console.log('Minted NFT #1');

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  console.log('Minted NFT #2');

  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  console.log('Minted NFT #3');

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  console.log('Minted NFT #4');

  console.log('Done deploying and minting!');
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();