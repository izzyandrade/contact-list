import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import PeopleListItem from './PeopleListItem';

const PeopleList = props => {
	const { people, onPressItem } = props;
	return(
		<FlatList 
			style={style.container}
			data={people}
			renderItem={({ item }) => (
				<PeopleListItem 
	        		person={item} 
	        		navigateToPeopleDetail={onPressItem}
	        	/> 
			)}
			keyExtractor={item => item.login.uuid}
		/>
	);
}

const style = StyleSheet.create ({
	container: {
		backgroundColor: '#e2f9ff',
	},
});

export default PeopleList;