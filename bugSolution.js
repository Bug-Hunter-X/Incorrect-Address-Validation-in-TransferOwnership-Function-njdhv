```javascript
function isValidAddress(address) {
  // Use a library like web3.utils.isAddress to validate addresses
  return web3.utils.isAddress(address);
}

function transferOwnership(newOwner) {
  if (!this.owner) {
    throw new Error('Contract has no owner.');
  }
  // Correct way to check for address validity
  if (!isValidAddress(newOwner)) {
    throw new Error('Invalid owner address.');
  }
  this.owner = newOwner;
}
```