
import { combineReducers } from 'redux';
import nav from './nav';
import appNavigation from './appNavigation';

// import { reducer as dataReducer } from '../data/reducer';
// import { reducer as servicesReducer } from '../services/reducer';
// import { reducer as formReducer } from 'redux-form';
// import drawer from './drawer';
// import auth from './auth';
// import footerState from './footerState';
// import cashInScene from '../scenes/cashIn/reducers';
// import confirmPopup from './confirmPopup';
// import transferScene from '../scenes/transfer/reducers';
// import historyTransfer from '../scenes/historyTransfer/reducers';
// import mobileCards from '../scenes/mobileCards/reducers';
// import itemsCashOut from '../scenes/itemsCashOut/reducers';
// import merchants from '../scenes/merchants/reducers';
// import historyTransferMerchant from '../scenes/historyTransferMerchant/reducers';
// import cashOutHistory from '../scenes/cashOutHistory/reducers';

console.log("nav",nav);

export default combineReducers({
  nav,
  appNavigation,
  // drawer,
  // auth,
  // footerState,
  // cashInScene,
  // confirmPopup,
  // transferScene,
  // historyTransfer,
  // mobileCards,
  // itemsCashOut,
  // merchants,
  // historyTransferMerchant,
  // cashOutHistory,
  // form: formReducer,
  // services: servicesReducer,
  // data: dataReducer,
});
