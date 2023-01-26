import React, { useEffect, useState } from 'react'
const Web3 = require('web3')
const web3 = new Web3(window.ethereum)
const EthContract = require('./contractsABi/ethContract.json')
require('dotenv').config()
const contractAddress = process.env.REACT_APP_ETHEREUM
const ethContract = new web3.eth.Contract(EthContract.abi, contractAddress)




const EthereumApi = (props) => {
  const account = 'current acount' // Connected account
  console.log('current account: ',account)

  
  const ownerPublicKey = ''//Public key of the platform owner to sign the transaction automatically
  const owner = '' //Private key of the platform owner to sign the transaction automatically
  

  const exchangeFunds = async ()=>{
    await ethContract.methods.recieveEth().send({from : account, value:'10000000'})
    const events = await ethContract.getPastEvents('fundsRecieved', {})
    const sender = events[0].returnValues.sender
    const funds = events[0].returnValues.value
    console.log('funds sender recieves: ', funds)
    const timestamp = new Date(events[0].returnValues.date * 1000)

    //If some funds revieved on layer 1, below code will trigger to send funds from layer 2 to sender!
    if(events){
      const nonce = await web3.eth.getTransactionCount(ownerPublicKey, 'latest')
      console.log('Nonce: ',nonce)
      const contractData = await props.polygonContract.methods.sendEth(sender, funds)
      const encodeData = contractData.encodeABI()
      const tx = {
        'to':sender,
        'value': funds,
        'data': encodeData,
        'gas': 30000,
        'nonce': nonce
      }
     
      const signedTx = await web3.eth.accounts.signTransaction(tx, owner)
      await web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(err, result){
        if(!err){
          console.log('transaction completed')
          console.log('sender recieved: '+ funds +' tokens on layer 2')
          console.log('Hash: ',result)
        }
      })

    }
  }
  return (
    <div>
      <button onClick={exchangeFunds}>Send 1</button>
    </div>
  );
}

export default EthereumApi