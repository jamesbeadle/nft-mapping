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
    async function loadData() {
      setLoading(true);
      try {
        const identity = await StoicIdentity.load();
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
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    }
  
    loadData();
  }, []); 

  const login = async () => {
    setLoading(true);
    try {
      let identity = await StoicIdentity.load();
      if (identity === false) {
        identity = await StoicIdentity.connect();
      }
      setIsAuthenticated(true);
      Actor.agentOf(backend_actor).replaceIdentity(identity);
      const nfts = await backend_actor.getUserNFTs();
      const mapped = await backend_actor.getMappedNFTs();
      setUserNFTs(nfts);
      setMappedNFTs(mapped);
      setIdentity(identity);
    } catch (error) {
      console.error('Error during login:', error);
    } finally {
      setLoading(false);
    }
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
    setLoading(true);
    if (!isAuthenticated || !identity) {
      console.error('User must be authenticated to map NFTs');
      setLoading(false);
      return;
    }

    try {
      await backend_actor.mapNFTs(nnsPrincipal);
      const nfts = await backend_actor.getUserNFTs();
      const mapped = await backend_actor.getMappedNFTs();
      setUserNFTs(nfts);
      setMappedNFTs(mapped);
    } catch (error) {
      console.error('Error during mapping NFTs:', error);
    } finally {
      setLoading(false);
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
