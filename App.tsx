import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import CustomInput from './src/components/ui/CustomInput';

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
      
      <Pressable style={styles.button} onPress={() => { console.log('Sign in button pressed') }}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
      
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

  

  button: {
    backgroundColor: '#4353fd',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    // textAlign: 'center',
  },
});
