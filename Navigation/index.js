/* eslint-disable prettier/prettier */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Password from '../Screens/Password';
import BottomTabNavigation from './BottomTabNavigation';
import Airtime from '../Screens/Airtime';
import Transfer from '../Screens/Transfer';
import Bills from '../Screens/Bills';
import Cash from '../Screens/Cash';
import QuickPay from '../Screens/QuickPay';
import Split from '../Screens/Split';
import ScreenHeader from '../components/ScreenHeader';
import Profile from '../Screens/Profile';
import Login from '../Screens/Login';
import SignupScreen from '../Screens/SignUp';
// import Splash from '../Screens/Splash';

const Stack = createStackNavigator()
const screens = [
    {
        name: 'home',
        component: BottomTabNavigation 
    },
    {
        name: 'password',
        component: Password 
    },
    {
        name: 'Airtime',
        component: Airtime, 
    },
    {
        name: 'profile',
        component: Profile, 
    },
    {
        name: 'Transfer',
        component: Transfer, 
        marginTop:80,
    },
    {
        name: 'Bills',
        component: Bills, 
    },
    {
        name: 'Cash',
        component: Cash, 
    },
    {
        name: 'QuickPay',
        component: QuickPay, 
    },
    {
        name: 'Split',
        component: Split, 
    },
    {
        name: 'signup',
        component: SignupScreen, 
    },
    {
        name: 'login',
        component: Login,
    },
    
];
const noHeaderArray = ['login','signup','home','password','profile'] ;
export default function MainStackNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="login"
            screenOptions = {()=>({
                headerShown:true,
            })}
        >
            {
                screens.map(screen => 
                    <Stack.Screen 
                        key={screen.name}
                        name={screen.name}
                        component= {screen.component}
                        options={{
                            headerShown:true,
                            header:({route})=>{
                                console.log(route.name);
                                const showHeader = !noHeaderArray.includes(route.name);
                                const marginTop = route.name === 'Transfer' ? 50 : 20;
                                return showHeader && <ScreenHeader heading={route.name} />
                            },
                            headerStyle: {
                                marginTop: 20,
                            },  
                        }}
                    />
                    )
            }
        </Stack.Navigator>
    )
}
