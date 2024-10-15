import { StyleSheet, StatusBar as SB , Platform } from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import NavigationTheme from './app/navigation/NavigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';
import { type IUser } from './app/interfaces/User.interface';
import authStorage from './app/auth/storage';
import logger from './app/utility/logger';
import * as SplashScreen from 'expo-splash-screen';
import { navigationRef } from './app/navigation/rootNavigation';

SplashScreen.preventAutoHideAsync();
logger.start();

export default function App() {
  const [user, setUser] = useState<IUser | null>(null);
  const [appIsReady, setAppIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  }

  useEffect(() => {

    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        const result = await restoreUser();

      } catch (e) {

        console.warn(e);
      } finally {

        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      const result = await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={NavigationTheme} onReady={onLayoutRootView}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? SB.currentHeight : 0
  },
});
