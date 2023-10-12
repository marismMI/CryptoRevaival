import { useState } from 'react';
import { Button } from "@material-ui/core";

function Connectmodal() {

  

   const [setWalletAddress] = useState("");

  async function requestAccount() {
    console.log('Requesting account...');

     
    if(window.ethereum) {
      console.log('detected');

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log('Error connecting...');
      }

    } else {
      alert('Meta Mask not detected');
    }
  }

  return (
    <div >
        
     <Button 
    
      variant="contained"
     style={{
      width:110,
      height:45,
      marginLeft:45,
      backgroundColor:"#EEBC1D",
     }}        onClick={requestAccount}

           >
     CONNECT WALLET

     </Button>
    
    </div>
  );
}

export default Connectmodal;
