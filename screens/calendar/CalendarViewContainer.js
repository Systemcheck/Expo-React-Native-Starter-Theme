import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import { loadItems } from './CalendarData';

import CalendarScreen from './CalendarView';
import * as Font from 'expo-font';
export default compose(
  connect(
    state => ({
      items: state.calendar.items,
      fontLoaded: false
    }),
    {
      loadItems,
    },
   
  ), lifecycle({
      async componentDidMount() {
        await Font.loadAsync({
          'Lato-Regular': require('../../assets/fonts/Lato-Regular.ttf'),
          'Lato-Bold': require('../../assets/fonts/Lato-Bold.ttf'),
        });
        this.setState({ fontLoaded: true });
        
      },
    }),
)(CalendarScreen);
