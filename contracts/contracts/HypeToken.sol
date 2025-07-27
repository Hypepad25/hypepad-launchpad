// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract HypeToken {
    string public name = "HYPE";
    string public symbol = "HYPE";
    uint8 public decimals = 18;
    uint256 public totalSupply = 1000000 * (10 ** uint256(decimals));
}
