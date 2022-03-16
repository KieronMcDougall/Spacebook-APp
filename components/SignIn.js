import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button, FlatList } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';


class SignIn extends Component{
	render(){
		return (
			<View>
				<Text> SignIn Page</Text>
				
			</View>
		);
	}
}
		
		
export default SignIn;