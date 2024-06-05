import { uiActions } from "./uiSlice";
import { cartActions } from "./cartSlice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchRequest = async () => {
      const response = await fetch(
        "https://react-demo-2085c-default-rtdb.firebaseio.com/cart.json"
      );
      const fetchData = await response.json();
      if (!response.ok) {
        throw new Error("Fetching cart data failed!");
      }
      return fetchData;
    };
    try {
      const data = await fetchRequest();
      dispatch(cartActions.replaceCart(data));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Failed to fetch data.",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending",
        message: "Sending data....",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-demo-2085c-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending data failed.");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Data sent successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Failed to send data.",
        })
      );
    }
  };
};
