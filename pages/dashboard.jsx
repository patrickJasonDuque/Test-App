import Typography from '@material-ui/core/Typography';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/router';

import NavBar from '../components/navbar';

const Dashboard = () => {
  const router = useRouter();
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    !isAuthenticated && router.push('/');
  });

  return (
    <div>
      <NavBar />
      <Typography variant='h2'>Welcome to Dashboard</Typography>
      {user && <Typography variant='h3'>Hi, {user.name}</Typography>}
    </div>
  );
};

export default Dashboard;
