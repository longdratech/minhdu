import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { verifyToken } from './verify-token.util';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const Router = useRouter();
    const [verified, setVerified] = useState(false);

    useEffect(() => {
      const accessToken = localStorage.getItem('accessToken');
      // if no accessToken was found,then we redirect to "/" page.
      if (!accessToken) {
        Router.replace('/').then();
      } else {
        // we call the api that verifies the token.
        verifyToken(accessToken).then(data => {
          // if token was verified we set the state.
          if (data.verified) {
            return setVerified(data.verified);
          } else {
            // If the token was fraud we first remove it from localStorage and then redirect to "/"
            localStorage.removeItem('accessToken');
            Router.replace('/').then();
          }
        });

      }
    }, []);

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;