import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button, FlatList, TextInput } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
//Import


class SignIn extends Component{
	constructor (props){
		super(props);
		
		this.state = {
			email: "",
			password: "",
		}
	}
	login = async () => {
		
		return fetch("http://localhost:3333/api/1.0.0/login", {
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
			console.log(responseJson);
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
					onChangeText={(email) => this.setState({email})}
					value={this.state.email}
					style={{padding:5, borderWidth:1, margin:5}}
				/>
				<Text> {/* Takes in the users email and stores it in the email field of setState.*/}</Text>
				<TextInput
					placeholder= "Password"
					onChangeText={(password) => this.setState({password})}
					value={this.state.password}
					secureTextEntry
					style={{padding:5, borderWidth:1, margin:5}}
				/>
				<Text> {/* Takes input for password and stores it within the password field in setState function.*/}</Text>
				<Button 
				title="Sign In"
				onPress={() => this.login()}
				/>{/*Button has the text "Sign In" on it, when it is pressed it runs the login method*/}
				<Button 
				title="Don't have an account? Click here to sign up"
				color="darkblue"
				onPress={() => this.props.navigation.navigate("SignUp")}
				/>{/*When this button is pressed it redirects the user to the sign up page*/}
			</View>
		);
	}
}

		
		
export default SignIn;