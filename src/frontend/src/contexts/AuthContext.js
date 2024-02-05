import React, { useState, useEffect } from 'react';
import { Actor } from "@dfinity/agent";

import { backend as backend_actor } from '../../../declarations/backend';
import { StoicIdentity } from 'ic-stoic-identity';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [identity, setIdentity] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userNFTs, setUserNFTs] = useState([]);
 
  useEffect(() => {
    StoicIdentity.load().then(async identity => {
      if (identity !== false) {
        setIsAuthenticated(true);
        Actor.agentOf(backend_actor).replaceIdentity(identity);
        const nfts = [];// await backend_actor.getUserNFTs(); //TODO: Add back in
        setUserNFTs(nfts);
      } else {
        setIsAuthenticated(false);
        setUserNFTs([]);
      }
      setIdentity(identity);
      setLoading(false);
    });

  }, []);

  const login = async () => {
    await StoicIdentity.load().then(async identity => {

      if (identity !== false) {
      } else {
        identity = await StoicIdentity.connect();
      }
    
      setIdentity(identity);
      setIsAuthenticated(true);
      Actor.agentOf(backend_actor).replaceIdentity(identity);
      const nfts = await backend_actor.getUserNFTs();
      setUserNFTs(nfts);
    });
  };

  const logout = async () => {
    try {
      await StoicIdentity.disconnect();
    } catch (error) {
      console.error('Error during StoicIdentity disconnect:', error);
    } finally {
      setIdentity(null);
      setIsAuthenticated(false);
      setUserNFTs([]);
    }
  };

  const mapNFT = async (nnsPrincipal) => {
    if (!isAuthenticated || !identity) {
      console.error('User must be authenticated to map NFTs');
      return;
    }

    try {
      // Call the backend actor's mapNFTs function
      await backend_actor.mapNFTs(nnsPrincipal);

      // Optionally, refresh the list of NFTs after mapping
      const nfts = await backend_actor.getUserNFTs();
      setUserNFTs(nfts);
    } catch (error) {
      console.error('Error during mapping NFTs:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ identity, isAuthenticated, userNFTs, setUserNFTs, setIsAuthenticated, login, logout, mapNFT }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
