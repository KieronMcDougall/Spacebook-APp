import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button, FlatList, ScrollView, TextInput } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';


//^^ Imports all files used in the program.

class Signup extends Component{
	constructor(props){
		super(props);
		
		this.state = {
			first_name: "",
			last_name: "",
			email: "",
			password: ""
		}
	} /* Initialises the state into which the users account details are stored. 
		This is then passed to the api through the signup method.*/
	
	signup = () => {
        //Validation here...

        return fetch("http://localhost:3333/api/1.0.0/user", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }) // Sends a post request to the user section of the API. In the body of the requested is the contents of the state above.
        .then((response) => {
            if(response.status === 201){
                return response.json()
            }else if(response.status === 400){
                throw 'Failed validation';
            }else{
                throw 'Something went wrong';
            }
        })
        .then((responseJson) => {
               console.log("User created with ID: ", responseJson);
			   this.props.navigation.navigate("Home");
        }) //Outputs the users ID to the console and redirects the user to the homescreen.
        .catch((error) => {
            console.log(error);
        }) // If there is an error that is caught it outputs the error to the console for debugging purposes.
    }		
	
	
	
	render(){
		return (
			<View>
				<TextInput
                    placeholder="Enter your first name..."
                    onChangeText={(first_name) => this.setState({first_name})}
                    value={this.state.first_name}
					style={{padding:5, borderWidth:1, margin:5}}
                    
                /> /* Takes input for first name and stores it within the first_name field in setState function.*/
				<TextInput
                    placeholder="Enter your last name..."
                    onChangeText={(last_name) => this.setState({last_name})}
                    value={this.state.last_name}
                    style={{padding:5, borderWidth:1, margin:5}}
                />// Takes input for last name and stores it within the last_name field in setState function.
				<TextInput
                    placeholder="Enter your email address..."
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                    style={{padding:5, borderWidth:1, margin:5}}
                />// Takes input for email and stores it within the email field in setState function.
				<TextInput
                    placeholder="Choose a password..."
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
					secureTextEntry
                    style={{padding:5, borderWidth:1, margin:5}}
                />// Takes input for password and stores it within the password field in setState function.
				// I would have liked to add another input that makes the user confirm the password they would like to use but when I tried this I ran into some issues in testing.
				   <Button
                    title="Create account"
                    onPress={() => this.signup()}
                /> //Button has the text "Create Account" on it, when it is pressed it runs the signup method.
				
			</View>
		);
	}
}
		
		
export default Signup;