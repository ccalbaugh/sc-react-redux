import sc from 'soundcloud';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore.js';
import * as actions from './actions';
import Stream from './components/Stream';
import { CLIENT_ID, REDIRECT_URI } from './constants/auth.js';

sc.initialize({ client_id: CLIENT_ID, redirect_url: REDIRECT_URI });

const tracks = [
  {
    title: 'Some track'
  },
  {
    title: 'Some other track'
  }
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
	<Provider store={store}>
		<Stream />
	</Provider>,
	document.getElementById('app')
);