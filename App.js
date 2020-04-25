import React from 'react';
import Main from './components/MainComponent';
import AppNavigation from './navigation/AppNavigation';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import appState from './redux/configureStore';

export default function App() {
  return (
    <Provider store={appState}>
      <SafeAreaProvider>
        <AppNavigation />
      </SafeAreaProvider>
    </Provider>
  );
}
