```javascript
function transferOwnership(newOwner) {
  if (!this.owner) {
    throw new Error('Contract has no owner.');
  }
  // Incorrect check for address validity
  if (newOwner === '0x0000000000000000000000000000000000000000') {
    throw new Error('Invalid owner address.');
  }
  this.owner = newOwner;
}
```