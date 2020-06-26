import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
    'Main': {
        screen: PeoplePage
    },
    'PeopleDetail': {
        screen: PeopleDetailPage,
        navigationOptions: ({ navigation }) => {
            const { first } = navigation.state.params.person.name;
            return({
                title: first,
                headerTitleStyle: {
                    color: 'white',
                }
            });
        }
    }
}, {
    defaultNavigationOptions: {
        title: 'Pessoas',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: '#6ca2f7',
            borderBottomWidth: 1,
            borderBottomColor: '#C5C5C5'
        },
        headerTitleStyle: {
            color: 'white',
            //flexGrow: 1,
            textAlign: 'center'
        }
    }
});

const AppContainer = createAppContainer(AppNavigator);
 
export default AppContainer;