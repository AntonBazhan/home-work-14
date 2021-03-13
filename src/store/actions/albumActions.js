import axios from "axios";

import actionTypes from "../../store/actions/actionTypes";

export const getUserAlbums = (albumId) => {
  return (dispatch, getState) => {
    return axios

      .get(
        `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&_offset=${
          getState().offset
        }&_limit=6`
      )
      .then((response) => {
        dispatch({
          type: actionTypes.SET_USER_ALBUMS,
          payload: response.data,
        });
      });
  };
};

export const getUserData = (albumId) => {
  return (dispatch) => {
    return axios
      .get(
        `https://jsonplaceholder.typicode.com/albums/${albumId}?_expand=user`
      )
      .then((response) => {
        dispatch({
          type: actionTypes.SET_USER_DATA,
          payload: response.data,
        });
      });
  };
};
