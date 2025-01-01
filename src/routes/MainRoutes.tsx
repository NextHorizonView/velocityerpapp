import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "../screens/OnboardingScreen/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import StudentHomeScreen from "../screens/StudentScreens/StudentHomeScreen";
import JoinClass from "../screens/LoginScreen/JoinClass";

const Stack = createStackNavigator();

const MainRoutes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* <Stack.Screen name="Onboarding" component={OnboardingScreen} /> */}
                <Stack.Screen name="JoinClass" component={JoinClass} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={StudentHomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainRoutes;