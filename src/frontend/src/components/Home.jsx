import React, { useState, useContext  } from "react";

import { AuthContext } from "../contexts/AuthContext";


const Home = () => {
  const { userNFTs, isAuthenticated, login, logout, mapNFT } = useContext(AuthContext);
  const [principalId, setPrincipalId] = useState('');

  const handleMapNFTs = async () => {
    if (principalId.trim() !== '') {
      await mapNFT(principalId);
      setPrincipalId('');
    } else {
      alert('Please enter a valid Principal ID.');
    }
  };

  return (
    <div>
      <h1>NFT Mapping</h1>

      {isAuthenticated ? (
        <>
          <p>Your NFTs:</p>
          <ul>
            {userNFTs.map((nft, index) => (
              <li key={index}>
                <p>Token Index: {nft.tokenIndex}</p>
                <p>Owner: {nft.accountIdentifier}</p>
              </li>
            ))}
          </ul>
          <br />
                {/*

          <input
            type="text"
            value={principalId}
            onChange={(e) => setPrincipalId(e.target.value)}
            placeholder="Enter Principal ID to map NFTs"
          />
          <br />
          <button className="custom-button" onClick={handleMapNFTs}>
            Map NFTs
          </button>
 This is a comment in JSX */}
          <br />
          <button className="custom-button" onClick={() => { logout(); }}>Disconnect</button>
        </>
      ) : (
        <button className="custom-button" onClick={() => { login(); }}>Connect</button>
      )}
    </div>
    
  );
};

export default Home;