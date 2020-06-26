import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PeopleListItem from './PeopleListItem';

const PeopleList = props => {
	const { people, onPressItem } = props;
	const items = people.map( (person) => {
		const { uuid } = person.login;
        return (
        	<PeopleListItem 
        		key={ uuid } 
        		person={person} 
        		navigateToPeopleDetail={onPressItem}
        	/>    	
        )
    });

	return(
		<View style={style.container}>
			{ items }
		</View>
	);
}

const style = StyleSheet.create ({
	container: {
		backgroundColor: '#e2f9ff',
	},
});

export default PeopleList;