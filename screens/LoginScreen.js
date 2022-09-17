import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import authenthicate from '../utils/auth';

function LoginScreen() {
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(false)
  async function signInHandler({email, password}){
    setIsLoading(true)
    await authenthicate('signInWithPassword', email, password)
    setIsLoading(false)
    navigation.replace('Welcome')
  }

  if(isLoading){
    return <LoadingOverlay message='Logging In...' />
  }
  return <AuthContent isLogin onAuthenticate={signInHandler} />;
}

export default LoginScreen;
