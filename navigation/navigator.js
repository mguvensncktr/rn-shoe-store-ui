import React from 'react';
import {
    TouchableOpacity,
    Image
} from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { COLORS, FONTS, icons, SIZES } from '../constants';

const Stack = createNativeStackNavigator();
const dTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: 'transparent'
    }
}

const Navigator = () => {
    return (
        <NavigationContainer theme={dTheme}>
            <Stack.Navigator
                initialRouteName="Home"
            >
                <Stack.Screen name="Home" component={HomeScreen}
                    options={{
                        title: "SHOE SELECTOR",
                        headerTintColor: COLORS.lightGray,
                        headerTitleStyle: FONTS.navTitle,
                        headerLeft: () => (
                            <TouchableOpacity
                                style={{ marginLeft: SIZES.base }}
                                onPress={() => console.log("Menu Pressed")}
                            >
                                <Image
                                    source={icons.menu}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity
                                style={{ marginRight: SIZES.base }}
                                onPress={() => console.log("Search Pressed")}
                            >
                                <Image
                                    source={icons.search}
                                    resizeMode="contain"
                                    style={{
                                        width: 30,
                                        height: 30,
                                        tintColor: COLORS.lightGray
                                    }}
                                />
                            </TouchableOpacity>
                        )
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator
