/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {store} from './redux/Store';
import Counter from './src/screens/counter';
import Signup from './src/screens/signup';
import Home from './src/screens/Home';
import Customtab from './src/components/customtab';
import DateTimeModal from './src/components/dateTimeModal';
import Condional_Rendering from './src/components/condional_Rendering';
import RichText from './src/components/RichText';

const App = () => {
  return (
    <Provider store={store}>
      <RichText />
    </Provider>
  );
};

export default App;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    color: 'blue',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
