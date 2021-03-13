import actionTypes from "../../store/actions/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_ALBUMS:
      return {
        ...state,
        offset: state.offset === undefined ? 0 : ++state.offset,
        albumList: state.albumList
          ? state.albumList.concat(action.payload)
          : action.payload,
      };
    default:
      return state;
  }
};
