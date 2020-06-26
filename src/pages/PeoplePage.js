import axios from 'axios';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import PeopleList from '../components/PeopleList';


export default class PeoplePage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            people: [],
            loading: false
        };
    }

    componentDidMount(){
        this.setState({ loading: true });
        setTimeout(() => {
            axios
            .get("https://randomuser.me/api/?nat=br&results=100")
            .then(response => {
                const { results } = response.data;
                this.setState({
                    people: results,
                    loading: false
                });
            }).catch((error) => {
                console.log(error);
            });
        }, 1500);
    }

    renderLoading(){
        if(this.state.loading)
            return <ActivityIndicator size='large' color='#6ca2f7' />;
        return null;
    }

    render(){
        return (
            <View style={style.container}>
                { /* this.renderLoading() */}
                {
                    this.state.loading  
                        ? <ActivityIndicator size='large' color='#6ca2f7' />
                        : <PeopleList 
                                people={this.state.people} 
                                onPressItem={(pageparams) => {
                                    this.props.navigation.navigate('PeopleDetail', pageparams);
                                }}
                            />
                }
            </View>
        );
    }

}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});
