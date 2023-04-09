import {createStackNavigator} from '@react-navigation/stack';
import {LandingPage, LoginPage} from "../components/pages";
import {NavigationContainer} from "@react-navigation/native";

const UnAuthRoutes = () => {

    const Stack = createStackNavigator();
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="landingPage" component={LandingPage} options={{
                headerShown: false
            }}/>
            <Stack.Screen name={"login"} component={LoginPage}/>
        </Stack.Navigator>
    </NavigationContainer>

}

export default UnAuthRoutes;