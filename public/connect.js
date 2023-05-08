let curAcc;
const connectAccount = async () => {
  const accounts = await window.ethereum
    .request({ method: "eth_requestAccounts" })
    .catch((err) => {
      if (err.code === 4001) {
        // EIP-1193 userRejectedRequest error
        // If this happens, the user rejected the connection request.
        console.log("Please connect to MetaMask.");
      } else {
        console.error(err);
      }
    });
  const account = accounts[0];
  curAcc = accounts[0];
  document.getElementById("accountAddr").innerHTML = accounts[0];

  sessionStorage.setItem("accAddr", accounts[0]);
};


window.ethereum
  .request({ method: "eth_accounts" })
  .then(handleAccountsChanged)
  .catch((err) => {
    console.error(err);
  });

window.ethereum.on("accountsChanged", handleAccountsChanged);

function handleAccountsChanged(accounts) {
  if (accounts.length === 0) {
    console.log("Please connect to MetaMask.");
  } else if (accounts[0] !== curAcc) {
    curAcc = accounts[0];
    document.getElementById("accountAddr").innerHTML = curAcc;
    sessionStorage.setItem("accAddr", accounts[0]);
  }
}

const value = sessionStorage.getItem("accAddr");

if (value !== null) {
  connectBtn = document.getElementById("accountAddr");
  connectBtn.innerHTML = value;
  connectBtn.disabled = true;
} else {
  connectBtn.innerHTML = "Connect";
  connectBtn.disabled = false;
}
