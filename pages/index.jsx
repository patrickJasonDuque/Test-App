import NavBar from '../components/navbar';
import Spinner from '../components/spinner';
import { useRouter } from 'next/router';
import { useAuth0 } from '@auth0/auth0-react';
import Typography from '@material-ui/core/Typography';

export default function Home() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth0();

  isAuthenticated && router.push('/dashboard');

  return (
    <div>
      <NavBar />
      {isLoading ? <Spinner /> : <Typography variant='h2'>Please Log in</Typography>}
    </div>
  );
}
