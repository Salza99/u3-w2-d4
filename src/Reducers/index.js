const initialState = {
  favouriteCompany: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_ON_FAVOURITE":
      return {
        ...state,
        favouriteCompany: {
          ...state.favouriteCompany,
          content: [...state.favouriteCompany.content, action.payload],
        },
      };
    case "REMOVE_ITEM_FROM_FAVOURITE":
      return {
        ...state,
        favouriteCompany: {
          ...state.favouriteCompany,
          content: [
            ...state.favouriteCompany.content.filter((_, i) => {
              return action.payload !== i;
            }),
          ],
        },
      };
    default:
      // eslint-disable-next-line no-unused-expressions
      return state;
  }
};

export default mainReducer;
