import React from 'react';
import { Provider } from 'react-redux'
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Mechanics, Cards, Search } from './views';
import store from './store';
import { SearchButton } from './components';

const AppStack = createStackNavigator(
    {
        Mechanics: {
            screen: Mechanics,
            navigationOptions: {
                title: 'Mechanics'
            }
        },
        Cards: {
            screen: Cards,
            navigationOptions: {
                title: 'Cards'
            }
        },
        Search: {
            screen: Search,
            navigationOptions: {
                title: 'Search Cards',
            }
        }
    },
    {
        initialRouteName: 'Mechanics'
    }
)

const App = createAppContainer(AppStack);

class Navigator extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

export default Navigator;