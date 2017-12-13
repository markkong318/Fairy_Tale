import DefaultView from './Default';
import defaultReducers from './flow/defaultReducers';
import { injectReducers } from 'store/reducers';

export default function loadDefaultView(store){
  injectReducers(store,{
    defaultData:defaultReducers
  });
  return DefaultView;
};