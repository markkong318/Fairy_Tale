import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from './store/configureStore';
import routes from './routes';
import * as globalsActions from './globals/globalsActions';

import 'antd/dist/antd.css';
import './styles/normalize.css';
import './styles/global.less';

const history = createHistory();
const store = configureStore({},history);

globalsActions.fetchCorpId(store.dispatch);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <HashRouter>
        <div className="view-container">
          {
            routes.map((v) => {
              return (
                <Route exact={ v.exact } path={ v.path } component={ v.component(store) } key={ v.path }/>
              )
            })
          }
        </div>
      </HashRouter>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)