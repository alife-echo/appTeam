import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Teams from "../pages/teams";
import NameTeam from "../pages/nameTeam";
import CreateTeams from "../pages/createTeam";

const Stack = createStackNavigator();

export default function MyStack() {
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Teams}
      options={{
        headerShown: false,
      }}
    />
     <Stack.Screen
      name="CriarTimes"
      component={CreateTeams}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="NomeTimes"
      component={NameTeam}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>;
}
