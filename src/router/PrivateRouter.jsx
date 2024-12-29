import { Navigate } from 'react-router';
import { useSelector } from 'react-redux';

export const PrivateRouter = ({ children }) => {
  const {status} = useSelector((state) => state.auth);
  
  return status==='authenticated' ? children : <Navigate to="/login" />;
};