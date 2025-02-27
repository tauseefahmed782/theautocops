export const DataReducer = (state, action) => {
  switch (action.type) {
    case "SET_STOCK":
      return {
        ...state,
        stock: [...action.payload],
        allStock: [...state.stock, ...action.payload],
        // searchData: [...state.searchData, ...action.payload],
      };
    case "SET_OLD_STOCK":
      return {
        ...state,
        oldStock: [...action.payload],
        allStock: [...state.stock, ...action.payload],
        // searchData: [...state.searchData, ...action.payload],
      };
    case "SET_STOCK_DESCRIPTION":
      return { ...state, stockDescription: [...action.payload] };

    // case "SET_SEARCH":
    //   return {
    //     ...state,
    //     allStock: [
    //       ...action.payload.stockSearchData,
    //       ...action.payload.oldStockSearchData,
    //     ],
    //   };

    // case "RESET_CARS":
    //   return { ...state, searchData: [...state.stock, ...state.oldStock] };

    case "INITIATE_CAR_DATA":
      return { ...state, searchData: [...action.payload] };

    case "SET_SEARCH":
      return { ...state, searchData: [...action.payload] };
    case "SET_FILTERED_CAR_DATA":
      return { ...state, filteredCarData: [...action.payload] };
    default:
      return { ...state };
  }
};
