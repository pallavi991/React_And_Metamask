
import './App.css';

import {useEffect, useState} from "react";
import {Contract, providers} from "ethers";

function App() {
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  const [account, setAccounts] = useState(null);

  useEffect (()=>{
    if(window.ethereum){
      setIsWalletInstalled(true);
    }
  },[])

  async function connectWallet(){
    window.ethereum.request({method:"eth_requestAccounts",}).then((accounts)=>{
      setAccounts(accounts[0]);
    }).catch((error)=>{
      alert("Something went wrong")
    });
  }

  if(account === null){
  return (
    <div className="App">
       { 
            isWalletInstalled ? (
              <button className='btn' onClick={connectWallet}>Connect Wallet</button>
            ) : (
              <p>Install Metamask wallet</p>
            )
          }
    </div>
  );
  }
  return(
    <div className='App'>
      <p>Connected as : {account}</p>
    </div>
  )
}

export default App;
