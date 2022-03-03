import {bech32} from 'bech32';
import web3 from 'web3-utils';

const {hexToBytes} = web3;
const terraAddress = "";
const inputData = "";

const decodeTerraAddressOnEtherBase = address => {
  try {
    const {words} = bech32.decode(address);
    const data = bech32.fromWords(words);
    return '0x' + Buffer.from(data).toString('hex');
  } catch (error) {
    console.log("error while decoding:", error);
    return '';
  }
};

const getTerraAddressFromInputData = inputData => {
  try {
    return bech32.encode(
      'terra',
      bech32.toWords(hexToBytes(inputData.slice(0, 42))));
  } catch (error) {
    console.log("error while getTerraAddressFromInputData:", error);
    return '';
  }
};

// console.log("started decoding", terraAddress);
//
// const decoded = decodeTerraAddressOnEtherBase(terraAddress);
//
// console.log("result:", !!decoded ? decoded.padEnd(66, '0') : "unsuccessful");

console.log("getTerraAddressFromInputData");
console.log(getTerraAddressFromInputData(inputData));
