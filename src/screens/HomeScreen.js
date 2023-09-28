import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import COLORS from "../containers/Colors"

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" translucent={false} 
      backgroundColor= {COLORS.BASIC_BACKGROUND} 
      />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Now Playing</Text>
        <Text style={styles.headerSubTitle}>View all</Text>
        <Text style={styles.headerSubTitle}>Chịu thua nhes</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BASIC_BACKGROUND,
  },
  headerContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerTitle:{
    fontSize: 28,
  },
  headerSubTitle: {
    fontSize: 18,
    color: COLORS.ACTIVE
  },
});
export default HomeScreen;