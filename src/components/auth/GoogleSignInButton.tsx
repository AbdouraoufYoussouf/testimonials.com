
import { FC, ReactNode } from 'react';
import { Button } from '../ui/button';
import { signIn } from 'next-auth/react';

interface GoogleSignInButtonProps {
  children: ReactNode;
}
const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  const loginWithGoogle = () => {
      // Rediriger vers /admin après la connexion
      signIn('google', { callbackUrl: `${window.location.origin}/admin` });
  };


  return (
    <Button onClick={loginWithGoogle} className='w-full'>
      {children}
    </Button>
  );
};

export default GoogleSignInButton;