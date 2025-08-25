import { Text, View, StyleSheet } from "react-native"
import { Link } from "expo-router"
import { useAuth } from "@clerk/clerk-expo"
import CustomButton from "@/components/ui/CustomButton";

export default function WelcomeScreen() {
  const { signOut, isSignedIn } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Welcome Screen</Text>
      <Text>{isSignedIn ? 'You are signed in' : 'You are signed out'}</Text>
      <View style={styles.linkContainer}>
        <Link href="/sign-in" style={styles.link}>Sign In</Link>
        <Link href="/sign-up" style={styles.link}>Sign Up</Link>
        <Link href="/verify" style={styles.link}>Verify</Link>
        <Link href="/(protected)" style={styles.link}>Go to Protected Screen</Link>
      </View>
      <CustomButton
        text="Sign Out"
        onPress={() => signOut()}
        style={{ width: 200 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  linkContainer: {
    flexDirection: 'row',
    flexShrink: 1,
    flexWrap: 'wrap',
    gap: 20,
    justifyContent: 'center'
  },
  link: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#4353fd',
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 20,
  }
})