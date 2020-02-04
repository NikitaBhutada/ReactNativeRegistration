import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Dashboard from '../screens/Dashboard';
import Login from '../screens/Login';
import Register from '../screens/Register';


const navigator = createStackNavigator(
  {
    Login : Login,
    Dashboard : Dashboard ,
    Register : Register
  },
  {

    initialRouteName : 'Login',
    defaultNavigationOptions : {
      title : 'App'
    }

  }
);

export default createAppContainer(navigator);

