import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';

const usePermission = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const accessToken = Cookies.get('access_token');
      
      if (accessToken) {
        const decodedToken = jwtDecode(accessToken);
        setIsAdmin(decodedToken?.role === 'admin');
      }
    } catch (error) {
      console.error('Error decoding token:', error);
      setIsAdmin(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isAdmin, isLoading };
};
export default usePermission;