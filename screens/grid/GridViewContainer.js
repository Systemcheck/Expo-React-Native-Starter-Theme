import { compose, withState } from 'recompose';
import { connect } from 'react-redux';
import GridScreen from './GridView';
import { loadItems, listData  } from './GridData';

export default compose(
  connect(
    state => ({
      items:  state.grid.items,
      fontLoaded: false
  }),
  {
    loadItems,
    listData
  },
  ),
  withState('tabIndex', 'setTabIndex', 0),
  withState('tabs', 'setTabs', ['Grid', 'List 1', 'List 2']),
  withState('data', 'setData', listData),
)(GridScreen);
