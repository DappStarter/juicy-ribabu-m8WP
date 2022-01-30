require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy prize flee venture strong cruise maze clump inside light army general'; 
let testAccounts = [
"0x4814565f81ee21b7f9b6da8d7bd0f806db8fadd27a644202608a264226c3daba",
"0x25296ec817bffd3d80a80f4db6e98d394077c5d54c393885d3d43f33ae0e9378",
"0xb703072ce802d5fe537f32f1a5f5c4bb506a8f9d277fc285a9497c11c6991a35",
"0x7f9dc6437a9d4ae352fad2025ffd9f7e8e4938450fdf19bb726dd6d0274fd802",
"0xdd69d9901842960afae70d995caf6308c32ecf8a3c6f60f014ebc8aa68e76c07",
"0xd1fef387a5f083d6604665d6176a1ffc93ed0778012c657fbf6e1110f74e1515",
"0xc685914c92a2592ec07548df8a86b6d1ee8595bcb7e968a88cb47470cb399fa8",
"0x15fb59fca8d9f1946951070580133f89dad9c9e18d9fb7cf26b7f4eb3cf324ad",
"0x623a99bf1723babf02ccec7e7bcbe155f12c0ae5a7a07dc101f78b6122e2f2b6",
"0x7b1e0a2109d98ffdaa24ea698dd417300465dbed72d5cc271407e03ed7133a0d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


