import { createContext, useContext, useReducer } from "react";
import { sortAndFilterReducer } from "../reducers";
const SortAndFilterContext = createContext(null);
const FilterProvider = ({ children }) => {
  const initialSortFilterState = {
    bySort: "",
    byCategories: {
      camera: false,
      smartphone: false,
      laptop: false,
      headphones: false,
    },
    byPrice: 100000,
    byRating: 0,
    bySearch: "",
  };

  const [state, dispatch] = useReducer(
    sortAndFilterReducer,
    initialSortFilterState
  );
  return (
    <>
      <SortAndFilterContext.Provider value={{ state, dispatch }}>
        {children}
      </SortAndFilterContext.Provider>
    </>
  );
};

const useSortAndFilter = () => useContext(SortAndFilterContext);

export { useSortAndFilter, FilterProvider };
