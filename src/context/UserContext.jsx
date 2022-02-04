import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

export const UserContext = React.createContext(null);
function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const UserValue = useMemo(() => ({ user, setUser }), [user]);
  return <UserContext.Provider value={UserValue}>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node]),
};

export default UserProvider;
