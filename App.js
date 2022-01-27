import React, { useEffect, useState } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView, StatusBar, KeyboardAvoidingView, StyleSheet, useWindowDimensions } from "react-native";
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme, } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "./components/Header";
import Nav from "./components/Nav";
import FindRide from "./screens/FindRide";
import History from "./screens/History";
import Account from "./screens/Account";
import Route from "./screens/Route";
import Settings from "./screens/Settings";

const App = () => {

  const user = {
    name: 'Brad',
  }

  let window = useWindowDimensions();

  const [ pageWrapperHeight, setPageWrapperHeight ] = useState(window.height);

  useEffect(()=> {
    setPageWrapperHeight(window.height - 80)
  }, [ window ])

  const styles = StyleSheet.create({
    statusBar: {
      backgroundColor: "black",
    },
    safeArea: {
      height: "100%",
    },
    pageWrapper: {
      height: pageWrapperHeight,
      backgroundColor: "#eee",
      paddingVertical: 4,
      paddingHorizontal: 8,
    },
  });

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#eee',
    },
  };

  const Stack = createStackNavigator();

  return (
      <ReduxProvider store={store}>
        <StatusBar style={styles.statusBar} />
        <NavigationContainer theme={navTheme}>
          <SafeAreaProvider>
            <SafeAreaView style={styles.safeArea}>
              <Header />
              <KeyboardAvoidingView
                style={styles.pageWrapper}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              >
                <Stack.Navigator
                  initialRouteName="FindRide"
                  screenOptions={{
                    gestureEnabled:true,
                    headerShown: false
                  }}
                >
                  <Stack.Screen name="FindRide" component={FindRide} initialParams={{'user':user}} />
                  <Stack.Screen name="Route" component={Route} initialParams={{'user':user}} />
                  <Stack.Screen name="RideHistory" component={History} initialParams={{'user':user}} />
                  <Stack.Screen name="Account" component={Account} initialParams={{'user':user}} />
                  <Stack.Screen name="Settings" component={Settings} initialParams={{'user':user}} />
                </Stack.Navigator>
              </KeyboardAvoidingView>
              <Nav />
            </SafeAreaView>
          </SafeAreaProvider>
        </NavigationContainer>
      </ReduxProvider>
  );
};

export default App;
