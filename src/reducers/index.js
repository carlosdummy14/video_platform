const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        milist: [...state.milist, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
