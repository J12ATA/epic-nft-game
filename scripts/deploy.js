const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ['RedMoons', 'MetaCyclops', 'Hypnosis'], // Names
    [
      'QmaSMMvGZQXDzJhaYvh38r9xbNHUY92ML2YPxdRwcmaGvc', // Images
      'QmNbJn9vxfBznunXu3CfJFXNGMziF2f1JpMNGdcPNwXpr2',
      'QmNjB5nQHFKinnXn2oEr1xHShriu58aqG9ccQ677tnERKj',
    ],
    [100, 200, 300], // HP values
    [100, 50, 25], // Attack damage values
    'TheVoid', // Boss name
    'QmReruihKBBVZjLJp7yRrZsUR6XiYfpWqu67jDDRtLNfU6', // Boss image
    10000, // Boss hp
    50 // Boss attack damage
  );
  await gameContract.deployed();
  console.log('Contract deployed to:', gameContract.address);
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
