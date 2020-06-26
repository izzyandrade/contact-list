import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class PeopleDetailPage extends React.Component {
	render(){
		const { person } = this.props.navigation.state.params;
		const { title, first, last } = person.name;
		const { large } = person.picture;
		return(
			<View style={style.container}>
				<Image style={style.avatar} source={{ uri: large }} />
				<Text>{first} {last}</Text>
			</View>
		);
	}
}

const style = StyleSheet.create({
	container: {
		padding: 20
	},
	avatar: {
		aspectRatio: 1,
		borderRadius: 200
	},
});
