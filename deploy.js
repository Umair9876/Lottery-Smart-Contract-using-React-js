const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');


const provider = new HDWalletProvider(
  'swear nest debris screen song success chicken negative thrive cradle install brick',
  'https://rinkeby.infura.io/v3/88797dd3720f4fe1803718a122380366'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attemting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({ data: bytecode})
  .send({gas : '2000000', from: accounts[0] });
  console.log(interface);
  console.log('Contract deployed to ', result.options.address);
};

deploy();
