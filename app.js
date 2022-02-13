import {bech32} from 'bech32';

const terraAddress = "";

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

console.log("started decoding", terraAddress);

const decoded = decodeTerraAddressOnEtherBase(terraAddress);

console.log("result:", !!decoded ? decoded.padEnd(66, '0') : "unsuccessful");
