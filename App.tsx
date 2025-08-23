import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      
      <Pressable style={styles.button} onPress={() => { console.log('Sign in button pressed') }}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
      
      <StatusBar style="auto" />
    </View>
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

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
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
