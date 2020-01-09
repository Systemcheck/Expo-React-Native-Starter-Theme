import { combineReducers } from 'redux';

// ## Generator Reducer Imports
import gallery from '../../screens/gallery/GalleryState';
import app from '../../screens/AppState';
import calendar from '../../screens/calendar/CalendarState';

export default combineReducers({
  // ## Generator Reducers
  gallery,
  app,
  calendar,
});
