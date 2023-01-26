// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract EthContract{

    address payable public owner;

    event fundsRecieved(address sender, uint256 value, uint256 date);
    event fundsSent(address to, uint256 amount, uint256 date);


    constructor(){
        owner = payable(msg.sender);
    }

    function recieveEth()payable public returns(bool){
        require(msg.sender.balance>=msg.value, "You don't have enough balanace");
        emit fundsRecieved(msg.sender, msg.value, block.timestamp);
        return true;
    }

    function sendEth(address payable _receiver, uint256 amount)public onlyOwner returns(bool){
        address payable reciever = _receiver;
        reciever.transfer(amount);
        emit fundsSent(reciever, amount, block.timestamp);
        return true;
    }

    modifier onlyOwner{
        require(msg.sender == owner, "Only owner");
        _;
    }

    function contractBalance()public onlyOwner view returns(uint256){
        return address(this).balance;
    }

    function depositFunds() public payable onlyOwner returns(bool){
        require(msg.value>0);
        return true;
    }

    function withdrawFunds(uint256 _value)public onlyOwner returns(bool){
        require(address(this).balance>=_value,"Insufficient balance");
        owner.transfer(_value);
        return true;
    }
}