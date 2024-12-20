import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "../global.css";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Teams from "../src/pages/teams";
import CreateTeams from "../src/pages/createTeam";
import NameTeam from "../src/pages/nameTeam";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Teams} options={{
        headerShown: false,
        
      }}/>
      <Stack.Screen name="CreateTeams" component={CreateTeams}  options={{
        headerShown: false,
      }}/>
      <Stack.Screen name="NameTeams" component={NameTeam} options={{
        headerShown: false,
      }}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
