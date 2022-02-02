import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../api';

export const UserContext = React.createContext(null);
function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.getUser().then((userData) => {
      setUser(userData);
      setLoading(false);
    });
  }, []);
  const UserValue = useMemo(() => ({ user, loading }));
  return <UserContext.Provider value={UserValue}>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node]),
};

export default UserProvider;
