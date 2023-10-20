const keys = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-=",
};
//console.log(keys.lowerCase)
const getKey = [
  function upperCase() {
    return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
  },
  function lowerCase() {
    return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
  },
  function number() {
    return keys.number[Math.floor(Math.random() * keys.number.length)];
  },
  function symbol() {
    return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
  },
];
function createPassword() {
  const upperCase = document.getElementById("upperCase").checked;
  const lowerCase = document.getElementById("lowerCase").checked;
  const number = document.getElementById("number").checked;
  const symbol = document.getElementById("symbol").checked;
  if (upperCase + lowerCase + number + symbol === 0) {
    alert("Atleast 1 box must be checked");
    return;
  }
  const passwordBox = document.getElementById("passwordBox");
  const length = document.getElementById("length");
  let password = "";
  while (length.value >= password.length) {
    let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
    let ischecked = document.getElementById(keyToAdd.name).checked;
    if (ischecked) {
      password += keyToAdd();
    }
  }
  passwordBox.innerHTML = password;
}
function copyPassword() {
  const password = document.getElementById("passwordBox").innerText;

  if (!password) {
    return;
  }

  navigator.clipboard
    .writeText(password)
    .then(() => {
      alert("Password copied to clipboard");
    })
    .catch((error) => {
      console.error("Copy failed:", error);
    });
}
