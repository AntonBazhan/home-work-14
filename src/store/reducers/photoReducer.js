import actionTypes from "../../store/actions/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_ALBUM_PHOTOS:
      return {
        ...state,
        offset: state.offset === undefined ? 0 : ++state.offset,
        photoList: state.photoList
          ? state.photoList.concat(action.payload)
          : action.payload,
      };
    case actionTypes.SET_PHOTO_DETAIL:
      return {
        ...state,
        photoDetail: action.payload,
      };
    default:
      return state;
  }
  // console.log(state);
};
