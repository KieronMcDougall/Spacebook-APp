import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';



import Home from './components/Home';
import HomeIn from './components/HomeIn';
import Profile from './components/Profile';
import Search from './components/Search';
import SignIn from './components/SignIn';
import Settings from './Components/Settings';
import Signup from './components/Signup';

signup =false;

export default function App() {

		return (
			<View style={styles.container}>
				<Text>Is this thing going to work?</Text>
				<Button title="Click to signup"
				onPress={() => signup = true}
				/>
				<StatusBar style="auto"/>
				if (signup == true)
				{
				<Signup />
				}
			</View>
		);
	};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
