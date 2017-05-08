import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {Router, Route, hashHistory, Link, IndexLink, IndexRoute} from 'react-router';
import wikiPageReducer from './WikiPage.reducer';
import WikiPageContainer from './wiki-page/WikiPage';
import './index.css';

const reducer = Redux.combineReducers({
    wiki_page: wikiPageReducer
})

const store = Redux.createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    Redux.applyMiddleware(ReduxThunk)
);

const AppLayout = ({ children }) =>
    <div>
        <ul className="nav">
            <li><IndexLink to='/'>Home</IndexLink></li>
            <li><Link to='/page'>Page</Link></li>
        </ul>
        <div>
            {children}
        </div>
    </div>;

const HomePage = () =>
    <div>
        <h1>
          MyWiki
        </h1>
    </div>;


ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={AppLayout}>
                <IndexRoute component={HomePage}/>
                <Route path='/page/:title' component={WikiPageContainer}/>
            </Route>
        </Router>
    </ReactRedux.Provider>,
  document.getElementById('root')
);
