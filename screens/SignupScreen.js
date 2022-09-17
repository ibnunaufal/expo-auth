import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import authenthicate from '../utils/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay'
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

function SignupScreen() {
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(false)
  const authCtx = useContext(AuthContext)
  async function signUpHandler({email, password}){
    setIsLoading(true)
    try {
      const token = await authenthicate('signUp', email, password)
      authCtx.authenthicate(token)
    } catch (error) {
      Alert.alert("Register Failed","Check ur credetials")
    }
    setIsLoading(false)
  }

  if(isLoading){
    return <LoadingOverlay message='Creating User...' />
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
