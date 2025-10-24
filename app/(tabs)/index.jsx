import { NavigationContainer } from '@react-navigation/native';

//stake navigator; where screens are placed on top of eachother
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Log from './log/Log';
import SignUp from './log/SignUp';
import Home from './Home';

//create a stack navigator object
const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    //Stack.Navigator → wraps all screens in this stack
    //Stack.Screen → defines each individual screen
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Log} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
