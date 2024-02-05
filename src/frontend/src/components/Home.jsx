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
                <p>Number: {nft.number}</p>
                <p>Owner: {nft.owner}</p>
                <p>Principal ID: {nft.nnsPrincipal}</p>
                <p>Mapped: {nft.mapped ? 'Yes' : 'No'}</p>
              </li>
            ))}
          </ul>
          <br />
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
          <br />
          <button className="custom-button" onClick={() => { logout(); setExpanded(false); }}>Disconnect</button>
        </>
      ) : (
        <button className="custom-button" onClick={() => { login(); setExpanded(false); }}>Connect</button>
      )}
    </div>
    
  );
};

export default Home;