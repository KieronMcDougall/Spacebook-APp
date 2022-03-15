import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button, FlatList } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';


import Home from './components/Home';
import HomeIn from './components/HomeIn';
import Profile from './components/Profile';
import Search from './components/Search';
import SignIn from './components/SignIn';
import Settings from './components/Settings';
import Signup from './components/Signup';


const Drawer = createDrawerNavigator();


class App extends Component {
		render(){
			<Text> "Will this work"</Text>
			return (
				<NavigationContainer>
					<Drawer.Navigator initialRouteName="Home">
						<Drawer.Screen name="Home" component={Home} />
						<Drawer.Screen name="Login" component={SignIn} />
						<Drawer.Screen name="Signup" component={Signup} />
					</Drawer.Navigator>
                
				</NavigationContainer>
			);
		}
}

export default App;