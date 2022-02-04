import { useContext, useState, useEffect } from 'react';
import api from '../api';
import { UserContext } from '../context/UserContext';

function useUser() {
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    api.getUser().then((userData) => {
      setUser(userData);
      setLoading(false);
    });
    return () => {
      setLoading(null);
    };
  }, []);

  const handleBuyFromUser = (total) => {
    if (total <= user.credit) {
      setUser((prevState) => ({ ...user, credit: prevState.credit - total }));
    }
  };
  return { user, loading, handleBuyFromUser };
}

export default useUser;
