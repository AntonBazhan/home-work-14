import axios from "axios";
import actionTypes from "../../store/actions/actionTypes";

export const getAlbumPhotos = () => {
  return (dispatch, getState) => {
    return axios
      .get(
        `https://jsonplaceholder.typicode.com/photos?_offset=${
          getState().offset
        }&_limit=6`
      )
      .then((response) => {
        dispatch({
          type: actionTypes.SET_ALBUM_PHOTOS,
          payload: response.data,
        });
      });
  };
};

export const getPhotoDetail = (photoId) => {
  return (dispatch) => {
    return axios
      .get(
        `https://jsonplaceholder.typicode.com/photos/${photoId}?_expand=album`
      )
      .then((response) => {
        dispatch({
          type: actionTypes.SET_PHOTO_DETAIL,
          payload: response.data,
        });
      });
  };
};
