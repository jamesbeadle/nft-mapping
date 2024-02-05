import React, { useState, useEffect } from 'react';
import { Actor } from "@dfinity/agent";

import { backend as backend_actor } from '../../../declarations/backend';
import { StoicIdentity } from 'ic-stoic-identity';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [identity, setIdentity] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    StoicIdentity.load().then(async identity => {
      if (identity !== false) {
        setIsAuthenticated(true);
        Actor.agentOf(backend_actor).replaceIdentity(identity);
      } else {
        setIsAuthenticated(false);
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
    }
  };

  return (
    <AuthContext.Provider value={{ identity, isAuthenticated, setIsAuthenticated, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
