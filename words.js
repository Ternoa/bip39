var bip39 = require('bip39')
const mnemonic = bip39.generateMnemonic(256)
console.log(mnemonic)
