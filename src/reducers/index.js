const reducer = (state, action) => {
  let isInList = [];

  switch (action.type) {
    case 'SET_FAVORITE':
      isInList = state.myList.filter(item => item.id === action.payload.id);
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
        myList: state.myList.filter(items => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
