import React from 'react';
import { StoicIdentity } from "ic-stoic-identity";


const Home = () => {

  const checkIdentity = async () => {
    StoicIdentity.load().then(async identity => {
      if (identity !== false) {
        //ID is a already connected wallet!
      } else {
        //No existing connection, lets make one!
        identity = await StoicIdentity.connect();
      }
      
      //Lets display the connected principal!
      console.log(identity.getPrincipal().toText());
    })
  };
 
  return (
    <div>
      <h1>NFT Mapping</h1>
      <button onClick={checkIdentity}>Connect Stoic Wallet</button>

      <p>Your NFTs:</p>

    </div>
    
  );
};

export default Home;