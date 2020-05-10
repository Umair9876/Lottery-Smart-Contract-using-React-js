// const path = require('path');
// const fs = require('fs');
// const solc = require('solc');
//
// const inboxPath = path.resolve(__dirname, 'contracts' , 'inbox.sol');
//
// const source = fs.readFileSync(inboxPath,'utf8');
//
// // module.exports = solc.compile(source, 1).contracts[':Inbox'];
// console.log(solc.compile(source, 1));
const path = require('path');
const fs = require('fs');
const solc = require('solc');

const lotterypath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
const source = fs.readFileSync(lotterypath, 'utf8');

// console.log(solc.compile(source, 1));
module.exports = solc.compile(source, 1).contracts[':Lottery'];
