# RPS Game Contract

This contract is a simple rock-paper-scissors game, only for learning purpose, do not use it in production.

## Requirements

This projecat based on [Chainlink Verifiable Randomness Function](https://vrf.chain.link/), if you want to try, please follow the doc of VRF.

## Contracts
### Owned 
A contract which is reponsible for contract owership. 
In this case, after deploying the VRF2Consumer, you need to transfer the contract owner ship to RPSGame contract so that RPSGame contract can get random number from Chainlink.
It's main purpose is to make sure only the ower can call the function from VRF2Consumer. (It can save your money :D)

### VRF2Consumer
A contract which is reponsible for communicate with chaink. In this case, RPS game contract will get random number through VRF2Consumer contract.

### RPSGame
The main contract. It will run a match when the game has 3 participants. Of courese you can change as you want.
People who want to join the game needs to submit at least 2 finney.
Winner take 2*bet, tie with contract take their ether back, loser gets nothing.

## Deploying steps
1. Deploy the VRF2Consumer contract and record the address of contract.
2. Paste the address of VRF2Consumer into *RPSGame.js* then deploy the RPSGame contract.
3. **Rember send some ether to RPSGame contract to make sure the contract has ability to pay the gas fee.**
4. Record the address of RPSGame contract and excute the function ***transferOwnership*** with the address.
5. Excute the fucntion ***accessConsumer*** in RPSGame function.
6. Go to [Chainlink Verifiable Randomness Function](https://vrf.chain.link/), add the address of VRF2Consumer as a consumer.
7. Enjoy !
