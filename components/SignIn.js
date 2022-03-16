import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button, FlatList } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';


class SignIn extends Component{
	constructor (props){
		super(props);
		
		this.state = {
			email: "",
			password: "",
		}
	}
	login = async () => {
		
		return fetch("http://localhost:3333/api/1.0.0/user", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
		.then((response) => {
			if (response.status == 200){
				return response.json()
			}
			else if (response.status == 400){
				throw 'Invalid email address or password';
			}
			else{
				throw 'Something went wrong';
			}
		})
		.then(async (responseJson)=> {
			console.log(responseJson);
			await AsyncStorage.setItem('@session_token', responseJson.token);
			this.props.navigation.navigate("Home");
		})
		.catch((error) => {
			console.log(error);
		})
	}
	
	
	
	
	render(){
		return (
			<View>
				<TextInput
					placeholder= "Email"
					onChangeText={(email) => tihs.setState({email})}
					value={this.state.email}
					style={{padding:5, borderWidth:1, margin:5}}
				/>
				<TextInput
					placeholder= "Password"
					onChangeText={(password) => tihs.setState({password})}
					value={this.state.password}
					secureTextEntry
					style={{padding:5, borderWidth:1, margin:5}}
				/>
				<Button 
				title="Sign In"
				onPress={() => this.login()}
				/>
				<Button 
				title="Don't have an account? Click here to sign up"
				onPress={() => this.props.navigation.navigate("SignUp")}
				/>
			</View>
		);
	}
}

		
		
export default SignIn;