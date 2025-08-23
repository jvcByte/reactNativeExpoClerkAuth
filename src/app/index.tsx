import { Text, View, StyleSheet } from "react-native"
import { Link } from "expo-router"

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Welcome Screen</Text>
      <View style={styles.linkContainer}>
        <Link href="/sign-in" style={styles.link}>Sign In</Link>
        <Link href="/sign-up" style={styles.link}>Sign Up</Link>
      </View>
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
    gap: 20,
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