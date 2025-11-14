
//stake navigator; where screens are placed on top of eachother
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Home from './Home';
import Log from './log/Log';
import SignUp from './log/SignUp';
import CreatePost from './CreatePost';
import AddCaption from './AddCaption'

//create a stack navigator object
const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    {/*Stack.Navigator → wraps all screens in this stack
    Stack.Screen → defines each individual screen*/}
    <Stack.Navigator 
    screenOptions={{ headerShown: false }}
    initialRouteName='CreatePost'
    >
      <Stack.Screen name="Login" component={Log} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name = "CreatePost" component ={CreatePost}/>
      <Stack.Screen name="AddCaption" component={AddCaption} />
    </Stack.Navigator>
    </GestureHandlerRootView>
  );
}
