import React, { Component } from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';
import HomeScreen  from '../screens/home/HomeScreenContainer';
import GalleryScreen from '../screens/gallery/GalleryViewContainer';
import CalendarScreen from '../screens/calendar/CalendarViewContainer';
import GridScreen from '../screens/grid/GridViewContainer'; 
import ComponentsScreen from '../screens/components/ComponentsViewContainer'; 
import PagesScreen from '../screens/pages/PagesViewContainer';
import ProfileScreen from '../screens/profile/ProfileViewContainer'; //Pro Version,
import DevVersionScreen from '../screens/devVersion/DevVersionViewContainer';
import AvailableInFullVersion from '../screens/proVersion/ProVersionViewContainer';

const headerBackground = require('../assets/images/topBarBlueBg.png');

//default navigationoptions 
const navigationoptions = { 
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
  }
}


//ALL Stacks
//1.st Single Screen Stacks (used in PagesStack and TabNavigator)
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

const GalleryStack = createStackNavigator({
  gstack:  {
    screen: GalleryScreen,
    navigationOptions: {
      title: 'Kalender',
      }
    },
  }, { navigationoptions }); //to change edit default 'const navigationsoptions' at top

const CalendarStack = createStackNavigator({
  cstack:  {
    screen: CalendarScreen,
    navigationOptions: {
      title: 'Kalender',
      }
    },
  }, { navigationoptions }); //to change edit default 'const navigationsoptions' at top

const GridStack = createStackNavigator({
  gstack:  {
    screen: GridScreen,
    navigationOptions: {
      title: 'Grid',
      }
    },
  }, { navigationoptions }); //to change edit default 'const navigationsoptions' at top

const ComponentsStack = createStackNavigator({
  componentstack:  {
    screen: ComponentsScreen,
    navigationOptions: {
      title: 'Components',
      }
    },
  }, { navigationoptions }); //to change edit default 'const navigationsoptions' at top
//End Single Screen Stacks

//Start PagesStack with child Stacks
const PagesStack = createStackNavigator({
  Overview:  {
    screen: PagesScreen,
    navigationOptions: {
      title: 'Pages',
      }
    },
  GalleryView: {
    screen: GalleryScreen,
    navigationOptions: {
    title: 'Gallery',
    }
  },
  CalendarView: {
      screen: CalendarScreen,
      navigationOptions: {
        title: 'Calendar',
      }
    },
  
  GridView: {
    screen: GridScreen,
    navigationOptions: {
      title: 'Calendar',
    }
  },
  ComponentsView: {
    screen: ComponentsScreen,
    navigationOptions: {
      title: 'Components',
      }
    },
  
  Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'Profile',
        }
      },
  DevVersion: {
        screen: DevVersionScreen,
        navigationOptions: {
          title: 'Developer License',
          }
        },
  },{
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

//END Stacks

//Start Bottom Tabnavigator
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
  Grid: {
     screen: GridStack,
     navigationOptions: { 
       title: 'Grid' }
  },
  Components: {
     screen: ComponentsStack,
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
        } else if (routeName === 'Components') {
          iconName = `ios-keypad`;
        } else if (routeName === 'Calendar') {
          iconName = `ios-calendar${focused ? '' : ''}`;
        }
        else if (routeName === 'Grid') {
          iconName = `ios-grid${focused ? '' : ''}`;
        }
        else if (routeName === 'Pages') {
          iconName = `ios-copy${focused ? '' : ''}`;
        }

        // Choose your favourite component here!
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
//End Bottom Tabnavigator

//Parent App Stack
const AppStack = createStackNavigator({
  
  Home: {
    screen: TabNavigator,
    navigationOptions: {
      headerShown: false
    }
  },
}, {
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

//Export Complete Navigator
export default createAppContainer( createSwitchNavigator(
{
  App: AppStack,
  Tabs: TabNavigator,
  }, {
  initialRouteName: 'App',
  }
));