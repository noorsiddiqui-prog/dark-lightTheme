// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

    interface Token{
        function balanceOf(address add)external returns(uint256);
        function transferFrom(address from, address to, uint256 amount)external returns(bool);
        function allowanced(address sender, address reciever)external returns(uint256);
        function transfer(address reciever, uint256 amount)external returns(bool);
        
    }

contract polyContract{

    address public owner;

    constructor(){
        owner = msg.sender;
    }
    Token token = Token(0x15e899eE1Bfd380133F5E1369a0f239382723740);
    event transferred(address to, uint amount, uint256 date);
    event recieved(address from, uint256 amount, uint256 date);

    function checkBalance()public returns(uint256){
        return token.balanceOf(address(this));
    }


    function sendEth(address _reciever, uint256 _amount)public onlyOwner returns(bool){
        require(token.balanceOf(address(this))>=_amount,"Not enough balance in contract");
        token.transfer(_reciever, _amount);
        emit transferred(_reciever, _amount, block.timestamp);
        return true;
    }

    modifier onlyOwner{
        require(msg.sender == owner);
        _;
    }

    //Owner can deposit funds to smart contract
    function depositFunds(uint256 _amount)public onlyOwner returns(bool){
        require(token.allowanced(owner, address(this))>=_amount,"Please approve the token first");
        token.transferFrom(owner, address(this), _amount);
        return true;
    }

    //Owner can withdraw funds from smart contract to his wallet
    function withdraw(uint256 amount)public onlyOwner returns(bool){
        require(token.balanceOf(address(this))>=amount);
        token.transfer(owner, amount);
        return true;
    }

    //if someone sends funds accidentally, or no data is provided
    receive()external payable{

    }

}