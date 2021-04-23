require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose swift top edge rare remind concert gesture hidden tail slow'; 
let testAccounts = [
"0xbf7b415a2ec1acc591d3d3598708a7b7f6dc6175d2355c90085d0960e09ab3b7",
"0x67451e7a6cd2cf340ccadec3eb67723c9980ab48e2d6b95ce247fd144529ec58",
"0xd281895e872ba2d18f80de7365c085a6738c01c9a06b414bb611526e1d4b323a",
"0x877f3c84acc06c01fd4f563e1eeefda6b377bba00712f7147b6438cac2781dc7",
"0x18d92f436e70f1fcf0955798f2741d97629b5ec9efe8cf0a8adf52c9bad6f374",
"0x4e0b1b591df3431f7d3d67424f066355f3868075cf2d04e988f6a42edda52fc5",
"0x8af3ee47f508555ff1123372058d301ad6b2e046ac83eac4e6065eb799f600d1",
"0xb247cdfff8e71321b795bb38d36d82db2cec2eec2905e2b5a5b96d37c1f1b0dd",
"0xaca08db0e148e0137f8b21012783d859aa0d5623f3fd6d339c226ac5e18b35b4",
"0x4e860e06dee3f9bc3024c4ef491b4f50dde47b0cddc8e938a45a4fe56d589524"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
