const initialState = {
  language: 'pt-br',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case '@settings/SET_LANGUAGE':
      return {
        ...state,
        language: action.language,
      };
    default:
      return state;
  }
};

export default reducer;
