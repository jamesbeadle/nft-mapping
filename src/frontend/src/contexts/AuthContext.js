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
  const [mappedNFTs, setMappedNFTs] = useState([]);
 
  useEffect(() => {
    StoicIdentity.load().then(async identity => {
      if (identity !== false) {
        setIsAuthenticated(true);
        Actor.agentOf(backend_actor).replaceIdentity(identity);
        const nfts = await backend_actor.getUserNFTs();
        setUserNFTs(nfts);

        const mapped = await backend_actor.getMappedNFTs();
        setMappedNFTs(mapped);

      } else {
        setIsAuthenticated(false);
        setUserNFTs([]);
        setMappedNFTs([]);
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

      const mapped = await backend_actor.getMappedNFTs();      
      setMappedNFTs(mapped);
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
      setMappedNFTs([]);
    }
  };

  const mapNFT = async (nnsPrincipal) => {
    if (!isAuthenticated || !identity) {
      console.error('User must be authenticated to map NFTs');
      return;
    }

    try {
      await backend_actor.mapNFTs(nnsPrincipal);
      
      const nfts = await backend_actor.getUserNFTs();
      setUserNFTs(nfts);

      const mapped = await backend_actor.getMappedNFTs();
      setMappedNFTs(mapped);

    } catch (error) {
      console.error('Error during mapping NFTs:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ identity, isAuthenticated, userNFTs, setUserNFTs, setIsAuthenticated, login, logout, mapNFT, mappedNFTs, setLoading }}>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <p>Loading...</p>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
