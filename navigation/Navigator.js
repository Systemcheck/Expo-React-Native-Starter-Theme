import React, { Component } from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';
import HomeScreen  from '../screens/home/HomeScreenContainer';
import GalleryScreen from '../screens/gallery/GalleryViewContainer';
import CalendarScreen from '../src/modules/calendar/CalendarViewContainer';
import PagesScreen from '../src/modules/pages/PagesViewContainer';
import AvailableInFullVersion from '../screens/proVersion/ProVersionViewContainer';

const headerBackground = require('../assets/images/topBarBlueBg.png');
const HomeStack = createStackNavigator({
  cstack:  {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Expo Starter Theme',
      }
    },
  }, {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'blue',
        borderBottomWidth: 0,
      },
      
      headerBackground: () => (
        <Image
          style={{ flex: 1 }}
          source={headerBackground}
          resizeMode="cover"
        />
      ),
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
        },
    },
});
HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index == 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};
const CalendarStack = createStackNavigator({
  cstack:  {
    screen: CalendarScreen,
    navigationOptions: {
      title: 'Kalender',
      }
    },
  }, {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'blue',
        borderBottomWidth: 0,
      },
      
      headerBackground: () => (
        <Image
          style={{ flex: 1 }}
          source={headerBackground}
          resizeMode="cover"
        />
      ),
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
        },
    },
});

const PagesStack = createStackNavigator({
  Overview:  {
    screen: PagesScreen,
    navigationOptions: {
      title: 'Pages',
      }
    },
  Charts: {
    screen: AvailableInFullVersion,
    navigationOptions: {
      title: 'Charts',
      }
    },
  Calendar: {
    screen: CalendarScreen,
    navigationOptions: {
      title: 'Calendar',
      }
    },
  }, {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'blue',
        borderBottomWidth: 0,
      },
      
      headerBackground: () => (
        <Image
          style={{ flex: 1 }}
          source={headerBackground}
          resizeMode="cover"
        />
      ),
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
        },
    },
});

const TabNavigator = createBottomTabNavigator({
  Home: {
     screen: HomeStack,
     navigationOptions: { 
       title: 'Home' }
  },
  Calendar: {
     screen: CalendarStack,
     navigationOptions: { 
      title: 'Kalender' }
  },
  Pages: {
     screen: PagesStack,
     navigationOptions: { 
      title: 'Pages' }
  },
  Gallery: {
     screen: GalleryScreen,
     navigationOptions: { 
       title: 'Gallery' }
  },
  Components: {
     screen: GalleryScreen,
     navigationOptions: { 
       title: 'Components' }
  },
  
  
  
}, {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : ''}`;
        } else if (routeName === 'Gallery') {
          iconName = `md-barcode`;
        } else if (routeName === 'Calendar') {
          iconName = `ios-calendar${focused ? '' : ''}`;
        }
        else if (routeName === 'Pages') {
          iconName = `ios-grid${focused ? '' : ''}`;
        }
        else if (routeName === 'Wetter') {
          iconName = `ios-partly-sunny${focused ? '' : ''}`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#494949',
      inactiveTintColor: '#494949'+80,
      showIcon: true,
  showLabel: true,
  lazyLoad: true,
      style: {
        backgroundColor: '#ececec',
        borderTopWidth: 1,
        borderTopColor: 'blue',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 50
      }
    },
  }
);
const AppStack = createStackNavigator({
  
  Home: {
     screen: TabNavigator,
     navigationOptions: {
       headerShown: false
     }
    
  },
  
},
 
  {
    
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'darkred',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
});

export default createAppContainer( createSwitchNavigator(
{
    
    App: AppStack,
    Tabs: TabNavigator,
    
  },
  {
    initialRouteName: 'App',
  }
));