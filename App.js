import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button, FlatList, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';


import Home from './components/Home';
import HomeIn from './components/HomeIn';
import Profile from './components/Profile';
import Search from './components/Search';
import SignIn from './components/SignIn';
import Settings from './components/Settings';
import SignUp from './components/Signup';


const Drawer = createDrawerNavigator();


class App extends Component {
		render(){
			return (
				<NavigationContainer>
					<Drawer.Navigator initialRouteName="Home">
						<Drawer.Screen name="Home" component={Home} />
						<Drawer.Screen name="Profile" component={Profile} />
						<Drawer.Screen name="Search" component={Search} />
						<Drawer.Screen name="SignUp" component={SignUp} />
						<Drawer.Screen name= "Sign In" component = {SignIn} />
					</Drawer.Navigator>
                
				</NavigationContainer>
			);
		}
}

export default App;