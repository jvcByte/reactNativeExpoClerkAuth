import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import CustomInput from './src/components/ui/CustomInput';
import CustomButton from './src/components/ui/CustomButton';

export default function App() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      
      <Text style={styles.title}>Sign in</Text>
      
      <CustomInput
        placeholder="Email"
        autoFocus
        autoCapitalize="none"
        keyboardType="email-address"
        autoComplete="email"
      />
      <CustomInput
        placeholder="Password"
        secureTextEntry
      />
      
      <CustomButton
        text="Sign in"
        onPress={() => { console.log('Sign in button pressed') }}
      />
      
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
    gap: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
