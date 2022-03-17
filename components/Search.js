import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, {Component} from "react";
import { StyleSheet, Text, View, Image, Button, FlatList,
         ScrollView, TextInput } from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";


class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            searchUserData:[],
        };
    } 
    
        componentDidMount(){
        this.search();
        }
        
        search = () => {
        return fetch("http://localhost:3333/api/1.0.0/search")
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            this.setState({
                isLoading: false,
                searchUserData:response
            })
        })
        .catch((error) => {
            console.log(error);
        }); /* If there is an error that is caught it outputs the error
        to the console for debugging purposes.*/
    }
    
    render(){
        return (
            <View>
               
               
                <Button
                    title="Search"
                    onPress={() => this.search()}
                />{/*Button has the text "Search" on it, when it is pressed it runs the  search method
					This feature is not fully implemented and does not work
				*/}
                
            </View>
        );
    }    
}
        
export default Search;