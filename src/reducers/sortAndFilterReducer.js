const sortAndFilterReducer = (state, action) => {
  switch (action.type) {
    case "PRICE":
      return {
        ...state,
        byPrice: action.payload,
      };

    case "CAMERA":
      return {
        ...state,
        byCategories: {
          ...state.byCategories,
          camera: !state.byCategories.camera,
        },
      };

    case "SMARTPHONE":
      return {
        ...state,
        byCategories: {
          ...state.byCategories,
          smartphone: !state.byCategories.smartphone,
        },
      };

    case "LAPTOP":
      return {
        ...state,
        byCategories: {
          ...state.byCategories,
          laptop: !state.byCategories.laptop,
        },
      };

    case "HEADPHONES":
      return {
        ...state,
        byCategories: {
          ...state.byCategories,
          headphones: !state.byCategories.headphones,
        },
      };

    case "RATING":
      return {
        ...state,
        byRating: action.payload,
      };

    case "PRICE_LOW_TO_HIGH":
      return { ...state, bySort: action.type };

    case "PRICE_HIGH_TO_LOW":
      return { ...state, bySort: action.type };
    case "SEARCH_PRODUCT":
      return {
        ...state,
        bySearch: action.payload,
      };
    case "CLEAR":
      return {
        bySort: "",
        byCategories: {
          camera: false,
          smartphone: false,
          laptop: false,
          headphones: false,
        },
        byPrice: 100000,
        byRating: 0,
      };

    default:
      return { ...state };
  }
};

export { sortAndFilterReducer };
