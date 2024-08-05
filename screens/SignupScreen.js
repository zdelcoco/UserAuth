import { useState } from 'react';

import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { createUser } from '../util/auth';
import { Alert } from 'react-native';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState();

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
    } catch (error) {
      Alert.alert('Signup Failed!', error.message, [{ text: 'Okay' }]);
    }

    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message='Creating user...' />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
