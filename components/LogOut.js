import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, {Component} from "react";
import { StyleSheet, Text, View, Image,
        Button, FlatList, TextInput } from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";
/*Imports all the files used.*/




class LogOut extends Component{
    constructor(props){
        super(props);

        this.state = {
            token: ""
        }
    }/* Initialises the state into which the users session token is loaded.*/

    componentDidMount(){
        this._unsubscribe = this.props.navigation.addListener("focus", () => {
            this.checkLoggedIn();
        });
    }

    componentWillUnmount(){
        this._unsubscribe();
    }

    checkLoggedIn = async () => {
        const value = await AsyncStorage.getItem("@session_token");
        if(value !== null) {
          this.setState({token:value});
        }else{
            this.props.navigation.navigate("Sign In")
        }
    }/* If the session token is currently empty the
    user will be taken to sign in screen.*/
    /* If the session token is not empty,
    the session token is stored in this.state */

    logout = async () => {
        let token = await AsyncStorage.getItem("@session_token");
        await AsyncStorage.removeItem("@session_token");/* the users session token is removed, signing the user out*/
        return fetch("http://localhost:3333/api/1.0.0/logout", {
            method: "post",
            headers: {
                "X-Authorization": token
            }
        })/* */
        .then((response) => {
            if(response.status === 200){
                this.props.navigation.navigate("Sign In");
            }else if(response.status === 401){
                 this.props.navigation.navigate("Sign In");
            }else{
                throw "Something went wrong";
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render(){
        return (
            <View>
                <Text style={{fontSize:12, padding:5, margin:5}}> We're Sorry To See You Leave </Text>
                <Button
                    title="Click here to log out"
					onPress={() => this.logout()}
                    onPress={() => this.props.navigation.navigate("Sign In")}
                />{/* This button runs the logout function and then
				returns the user to the sign in screen */}
                <Button
                    title="Click here to return home"
                    color="darkblue"
                    onPress={() => this.props.navigation.navigate("Home")}
                />{/* This button will return the user to the homepage if they change their mind about logging out.*/}
            </View>
        )
    }
}

export default LogOut;

