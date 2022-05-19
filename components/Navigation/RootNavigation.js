import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

import Dashboard from "../../screens/Dashboard";
import Device from "../../screens/Device";
import CustomDrawer from "./CustomDrawer";
import IconRight from "./IconRight";
import User from "../../screens/User";
import DeviceDetails from "../../screens/DeviceDetails";
import QrScanner from "../../screens/QrScanner";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Screen({}) {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: "",
        drawerActiveBackgroundColor: "white",
        drawerActiveTintColor: "black",
        headerRight: () => <IconRight />,
        drawerStyle: { width: "55%" },
      }}
      drawerContent={(props) => {
        return <CustomDrawer {...props} />;
      }}
      initialRouteName="Dashboard"
    >
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          drawerIcon: (color, size) => (
            <AntDesign
              name="dashboard"
              color={color}
              size={size}
              style={{ marginRight: -20 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Device"
        component={Device}
        options={{
          drawerIcon: (color, size) => (
            <MaterialIcons
              name="devices"
              color={color}
              size={size}
              style={{ marginRight: -20 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="QrScanner"
        component={QrScanner}
        options={{
          drawerIcon: (color, size) => (
            <MaterialIcons
              name="qr-code-scanner"
              color={color}
              size={size}
              style={{ marginRight: -20 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="User"
        component={User}
        options={{
          drawerIcon: (color, size) => (
            <MaterialIcons
              name="account-circle"
              color={color}
              size={size}
              style={{ marginRight: -20 }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function RootNavigation() {
  return (
    <Stack.Navigator initialRouteName="Screens">
      <Stack.Screen
        name="Screens"
        component={Screen}
        options={{ headerShown: false, title: false }}
      />
      <Stack.Screen
        name="DeviceDetails"
        component={DeviceDetails}
        options={{ headerShown: true, title: true }}
      />
    </Stack.Navigator>
  );
}

export default RootNavigation;
