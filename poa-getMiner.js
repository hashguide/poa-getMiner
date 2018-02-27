var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('https://sokol.poa.network/'));

// Uncomment the block of code below to log any 'console.log' output to a 'log.txt' file
/* 
var fs = require('fs');
var util = require('util');
var logFile = fs.createWriteStream('log.txt', { flags: 'a' });
var logStdout = process.stdout;

// console.log will be logged to log.txt
console.log = function () {
  logFile.write(util.format.apply(null, arguments) + '\n');
  logStdout.write(util.format.apply(null, arguments) + '\n');
}
console.error = console.log;
 */
  
var addr, timestamp, block, miner, miners, lastBlock, lastTime, blockTime, txs;


web3.eth.getBlock('latest').then(function(b){
    lastBlock = b.number;
    lastTime = b.timestamp;
});


function getMiner() {

web3.eth.getBlock('latest').then(function(b){
    miners = b.miner;
    addr = b.miner;
    timestamp = b.timestamp;
    block = b.number;
    // console.log(b);

    switch (miners) {
        case "0xE8DDc5c7A2d2F0D7a9798459c0104fDf5E987ACA":
            miner = "Igor Barinov";
            break;
        case "0x82e4e61e7f5139ff0a4157A5Bc687eF42294c248":
            miner = "Roman Storm";
            break;
        case "0x23468dB7f4b8Ff4924B0709aB7Ae0971B3Bc8d28":
            miner = "Stephen Arsenault";
            break;
        case "0xA0B0D4cCF483b000F0aF59C47A1944668477b941":
            miner = "Rocco Mancini";
            break;
        case "0xe2ac1c6843A33f81aE4935E5EF1277a392990381":
            miner = "John LeGassic";
            break;
        case "0xde88a1a783b29a0b476BE28beEF38B4A85c0e024":
            miner = "Melanie Marsollier";
            break;
        case "0x4E20226355b4464Cf8f3b67Fc318b753A7c125B3":
            miner = "Jim O'Regan";
            break;
        case "0xdb1207770E0a4258D7A4Ce49aB037f92564feA85":
            miner = "Michael Milirud";
            break;
        case "0xeD2ACEb63Eb7928e67c854C24F61cF41db311c36":
            miner = "Sherina Yang";
            break;
        case "0x4Ca0f1a7B5a2723A9094B7706BaA23C2B8BD46A0":
            miner = "Jefferson Flowers";
            break;
        case "0x5B2cf18296B2ABf23288Ef2F9A09C6E1275311e5":
            miner = "Marat Pekker";
            break;
        case "0x58baD7Cf29428c3D17Cb859f5C580D3C25F134CD":
            miner = "John Storey";
            break;
        case "0xcBbcd5Ac86F9a50e13313633B262e16f695a90c1":
            miner = "Sviataslau Vishneuski";
            break;
        case "0x0b55FdBa9e288C23cF3EB04c6f237D3bd0f751d6":
            miner = "Walter Karshat";
            break;
        case "0x46bc76E617E72cE6658C199E222C07cBa2Fb5aEc":
            miner = "Lillian Chan";
            break;
        case "0xf74769d9FFe1Cd17F20b283995CF9e7fA2A262ed":
            miner = "Alexy Emelyanov";
            break;
        case "0x8527153b9A747AdCE9fDF4274aFE39211F15E0d3":
            miner = "Roman Test Node";
            break;
        };
    txs = b.transactions.length;
    txList = b.transactions;
    // console.log(txs);
    });

}

function logMiner() {

    if (lastBlock < block) {
        lastBlock = block;
        blockTime = timestamp - lastTime;
        lastTime = timestamp;
        console.log("Block Number: " + block + ", Timestamp: " + timestamp + ", Block Time: " + blockTime + ", # of TXs: "
         + txs + "\n" + "  Miner's Address: " + addr + ", Miner's Name: " + miner);

// Comment out following 'if' statement to remove tx hashes from log.
            if (txs === 0) {
                console.log("    No Transactions" + "\n");
            } else {
                console.log("    Tx Hashes: " + txList + "\n");
            }
// End

    } else {
        getMiner();
       // console.log();
        };
    }


setInterval(logMiner, 1000);