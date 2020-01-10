import { combineReducers } from 'redux';

// ## Generator Reducer Imports
import gallery from '../../screens/gallery/GalleryData';
import app from '../../screens/AppState';
import calendar from '../../screens/calendar/CalendarData';
import grid from '../../screens/grid/GridData';

export default combineReducers({
  // ## Generator Reducers
  gallery,
  grid,
  app,
  calendar
 
});