import SC from 'soundcloud';
import * as actionTypes from '../constants/actionTypes';
import { setTracks } from '../actions/track';

function setMe(user) {
	return {
		type: actionTypes.ME_SET,
		user
	};
}

export function auth() {
	return function(dispatch) {
		SC.connect().then((session) => {
			dispatch(fetchMe(session));
			dispacth(fetchStream(session));
		});
	};
};

function fetchMe(session) {
	return function(dispatch) {
		fetch(`//api.soundcloud.com/me?oauth_token=${session.oauth_token}`)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			dispatch(setMe(data));
		});
	};
}

function fetchStream(session) {
	return function(dispatch) {
		fetch(`//api.soundcloud.com/me/activities?linit=20&offset=0&oauth_token=${session.oauth_token}`)
		.then((response) => response.json())
		.then((data) => {
			console.log(data.collection);
			dispatch(setTracks(data.collection));
		});
	};
}