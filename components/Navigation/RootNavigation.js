import { useState } from "react";
import { Pressable } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import Dashboard from "../../screens/Dashboard";
import Device from "../../screens/Device";
import CustomDrawer from "./CustomDrawer";
import Animated from "react-native-reanimated";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Screen({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: null,
        headerLeft: () => (
          <Pressable onPress={() => navigation.toggleDrawer()}>
            <Ionicons name="md-menu" size={24} color="black" />
          </Pressable>
        ),
      }}
    >
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Device" component={Device} />
    </Stack.Navigator>
  );
}

function RootNavigation() {
  const [progress, setProgress] = useState(new Animated.Value(0));

  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 10],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        setProgress(props.progress);
        return <CustomDrawer {...props} />;
      }}
    >
      <Drawer.Screen
        name="Screens"
        component={Screen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

export default RootNavigation;
