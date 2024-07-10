import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.viewContainer}>
        <Text style={styles.text}>
          Hello, this is a React Native CLI with a Web View template.
        </Text>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://twitter.com/shreyashchandra');
          }}>
          <Text style={styles.shreyash}>Author ---- @shreyashchandra</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#1e293b',
    borderRadius: 10,
    margin: 10,
  },
  text: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 20,
  },
  shreyash: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0ea5e9',
    textDecorationLine: 'underline',
  },
});
