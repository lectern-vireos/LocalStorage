// LocalStorage JSON Storage
const data = { key: 'value' };
localStorage.setItem('data', JSON.stringify(data));

const retrievedData = JSON.parse(localStorage.getItem('data'));
console.log("Retrieved Data:", retrievedData);
