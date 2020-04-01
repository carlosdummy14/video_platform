const reducer = (state, action) => {
  let isInList = [];
  switch (action.type) {
    case 'SET_FAVORITE':
      isInList = state.myList.filter((item) => item.id === action.payload.id);
      if (isInList.length) {
        return state;
      }
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing:
          state.trends.find((item) => item.id === Number(action.payload)) ||
          state.originals.find((item) => item.id === Number(action.payload)) ||
          [],
      };
    case 'SEARCHING_VIDEO':
      if (action.payload === '') {
        return {
          ...state,
          searchList: [],
        };
      }
      return {
        ...state,
        searchList: state.trends
          .concat(state.originals)
          .filter((item) => item.title.toLowerCase().includes(action.payload.toLowerCase())),
      };
    default:
      return state;
  }
};

export default reducer;
