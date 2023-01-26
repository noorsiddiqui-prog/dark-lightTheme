import React from 'react'
import EthereumApi from './EthereumApi'
const Web3 = require('web3')
require('dotenv').config()
const PolyContract = require('./contractsABi/polyContract.json')
const EthContract = require('./contractsABi/ethContract.json')
const Token = require('./contractsABi/Token.json')
const rpcUrl = process.env.REACT_APP_POLYGON_RPC
const web3 = new Web3(rpcUrl)
const ethRpc = process.env.REACT_APP_ETHEREUM_RPC
const ethWeb3 = new Web3(ethRpc)
const windowWeb = new Web3(window.ethereum)
// const polyAddress = process.env.REACT_APP_POLYGON.toLowerCase()
// const ethAddress  = process.env.REACT_APP_ETHEREUM.toLowerCase()
// const tokenAddress = process.env.REACT_APP_POLYGON_TOKEN.toLowerCase()
const polyAddress = process.env.REACT_APP_POLYGON
const ethAddress  = process.env.REACT_APP_ETHEREUM
const tokenAddress = process.env.REACT_APP_POLYGON_TOKEN

const polyContract = new web3.eth.Contract(PolyContract.abi, polyAddress)
const ethContract = new ethWeb3.eth.Contract(EthContract.abi, ethAddress)
const token = new windowWeb.eth.Contract(Token.abi, tokenAddress)
async function checkBalance(){
  const balance = await polyContract.methods.checkBalance().call()
  console.log('Contract balance: ',balance)
}

checkBalance()

const PolygonApi = (props) => {
   const address = 'current acount' // Connected account
   const ownerPublicKey = '' //Public key of the platform owner to sign the transaction automatically
   const owner = '' ////Private key of the platform owner to sign the transaction automatically

  const exchange = async () =>{
    await token.methods.transfer(polyAddress, '10000000000').send({from: address})
    const events = await token.getPastEvents('Transfer', {})
    if(events){
      console.log('event from token')
      const sender = events[0].returnValues._from
      const funds = events[0].returnValues._value
      const nonce = await ethWeb3.eth.getTransactionCount(ownerPublicKey, 'latest')
      console.log('Nonce: ',nonce)
      const contractData = await ethContract.methods.sendEth(sender, funds)
      const encodeData = contractData.encodeABI()
      const tx = {
        'to':sender,
        'value': funds,
        'data': encodeData,
        'gas': 30000,
        'nonce': nonce
      }
       
      const signedTx = await ethWeb3.eth.accounts.signTransaction(tx, owner)
      await ethWeb3.eth.sendSignedTransaction(signedTx.rawTransaction, function(err, result){
        if(!err){
          console.log('transaction completed')
          console.log('sender recieved: '+ funds +' tokens on layer 1')
          console.log('Hash: ',result)
        }
      })
     
    }
  }


  return (
    
    <div>PolygonApi
        <div>
          <button onClick={exchange}>send 2</button>
          <EthereumApi polygonContract = {polyContract}/>
        </div>
    </div>
  )
}

export default PolygonApi
