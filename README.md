# Solidity template with hardhat and dapptools

This is a solidity template with hardhat and dapptools.
- put the solidity contracts files under `src/contracts`
- put the dapptool related test files under `src/test`

for import modules errors,  update file `remappings`, for example:
```
@openzeppelin=node_modules/@openzeppelin/
@chainlink=node_modules/@chainlink/
```

try run `dapp update` if there is no ds-test under `lib` folder

