import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import PeopleDetailLine from '../components/PeopleDetailLine';

export default class PeopleDetailPage extends React.Component {
	render(){
		const { person } = this.props.navigation.state.params;
		const { title, first, last } = person.name;
		const { large } = person.picture;
		const fullName = `${title} ${first} ${last}`;
		return(
			<View style={style.container}>
				<Image style={style.avatar} source={{ uri: large }} />
				<View style={style.detailContainer}>
					<PeopleDetailLine label={"Nome:"} content={fullName}/>
					<PeopleDetailLine label={"Email:"} content={person.email}/>
					<PeopleDetailLine label={"Tel:"} content={person.phone}/>
					<PeopleDetailLine label={"Cidade:"} content={person.location.city}/>
					<PeopleDetailLine label={"Estado:"} content={person.location.state}/>
					<PeopleDetailLine label={"Username:"} content={person.login.username}/>
					<PeopleDetailLine content={person.nat}/>
				</View>
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
	detailContainer:{
		marginTop: 20,
		elevation: 1,
		backgroundColor: "#E2F9FF",
	},
});
