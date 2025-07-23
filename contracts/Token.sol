// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Token {
    string public name = "HYPE Token";
    string public symbol = "HYPE";
    uint8 public decimals = 18;
    uint256 public totalSupply = 1000000000 * 10**18;
    mapping(address => uint256) public balanceOf;

    constructor() {
        balanceOf[msg.sender] = totalSupply;
    }
}