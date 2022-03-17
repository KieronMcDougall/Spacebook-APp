import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button, FlatList } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

class  Profile extends Component{
	render(){
		return (
			<View>
				<Text> This is the profile page. 
				My intention was to make it so that the users profile picture
				and name were displayed along with their posts.
				However, I ran into dificuties. 
				</Text>
				
			</View>
		);
	}
}
		
		
export default Profile;