import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

/*const capitalizeFirstLetter = string => {
	string[0].toUppercase() + string.slice(1)
}*/

const PeopleListItem = props => {
	const { person, navigateToPeopleDetail } = props;
	const { title, first, last } = person.name;
	const { thumbnail } = person.picture;
    const { uuid } = person.login;
	return(
		<TouchableOpacity onPress={() => {
			navigateToPeopleDetail({ person });
		}}>
			<View style={style.line}>
				<Image style={style.avatar} source={{ uri: thumbnail }} />
	            <Text style={style.lineText}>{ `${title} ${first} ${last}`}</Text>
        	</View>     
		</TouchableOpacity>
	);
}

const style = StyleSheet.create({
	line: {
		height: 60,
		borderBottomWidth: 1,
		borderBottomColor: '#bbb',
		alignItems: 'center',
		flexDirection: 'row'
	},

	lineText: {
		fontSize: 20,
		paddingLeft: 15,
		flex: 7
	},

	avatar: {
		aspectRatio: 1,
		flex: 1,
		marginLeft: 15,
		borderRadius: 50
	}
})

export default PeopleListItem;