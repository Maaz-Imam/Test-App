import axios from "axios";
import pizzaFetcher from "./pizzaFetcher";

const pizzaDeleter = (pizzaID) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3000/pizzas/${pizzaID}`);
      dispatch(pizzaFetcher());
    } catch (error) {
      console.error('Error deleting pizza:', error);
    }
  };
};

export default pizzaDeleter;