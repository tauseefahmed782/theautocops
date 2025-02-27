import { createContext, useEffect, useReducer } from "react";
import { DataReducer } from "../Reducers/DataReducer";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, {
    stock: [],
    oldStock: [],
    stockDescription: [],
    allStock: [],
    searchData: [],
    filteredCarData: [],
  });

  const getStock = async () => {
    // setLoading(true);
    try {
      const response = await fetch(
        "https://theautocops-5ac27-default-rtdb.firebaseio.com/productListingPageData.json"
      );
      if (response.ok) {
        const data = await response.json();
        const dataArray = Object.values(data).reverse();
        // console.log(dataArray);
        // console.log("stock fetched");
        dispatch({ type: "SET_STOCK", payload: dataArray }); // setData(Object.values(data));
        // Convert the object into an array
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      // setLoading(false);
    }
  };

  const getOldStock = async () => {
    // setLoading(true);
    try {
      const response = await fetch(
        "https://theautocops-5ac27-default-rtdb.firebaseio.com/oldStock.json"
      );
      if (response.ok) {
        const data = await response.json();
        const dataArray = Object.values(data);
        // console.log(dataArray);
        // console.log("old stock fetched");
        dispatch({ type: "SET_OLD_STOCK", payload: dataArray.reverse() }); // setData(Object.values(data));
        // Convert the object into an array
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      // setLoading(false);
    }
  };

  const getStockDescriptionData = async () => {
    // setLoading(true);
    try {
      const response = await fetch(
        "https://theautocops-5ac27-default-rtdb.firebaseio.com/productDescriptionPageData.json"
      );
      if (response.ok) {
        const data = await response.json();
        const dataArray = Object.values(data);
        // console.log(dataArray);
        // console.log("stock description data fetched");
        dispatch({ type: "SET_STOCK_DESCRIPTION", payload: dataArray }); // setData(Object.values(data));
        // Convert the object into an array
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      // setLoading(false);
    }
  };

  function isValidPhoneNumber(phoneNumber) {
    // Remove any non-digit characters from the input
    const cleanedNumber = phoneNumber.replace(/\D/g, "");

    // Check if the cleaned number starts with 9, 8, 7, or 6 and has exactly 10 digits
    const isValid =
      /^[7896]\d{9}$/.test(cleanedNumber) && cleanedNumber.length === 10;

    return isValid;
  }

  const sendMail = async (formData, formName) => {
    // const response = await fetch(
    //   `https://autocops-backend.vercel.app/dashboard/form`,
    //   {
    //     method: "POST",
    //     body: JSON.stringify(formData, formName),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    // const responseData = await response.json();
    // console.log(responseData);

    try {
      await axios.post("https://autocops-backend.vercel.app/dashboard/form", {
        formData,
        formName,
      });
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  useEffect(() => {
    getStock();
    getOldStock();
    getStockDescriptionData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        getStock,
        getOldStock,
        getStockDescriptionData,
        isValidPhoneNumber,
        sendMail,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
