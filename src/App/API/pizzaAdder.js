import axios from "axios";
import pizzaFetcher from "./pizzaFetcher";

const pizzaAdder = (newPizza) => {
  return async (dispatch) => {
    try {
      await axios.post(`http://localhost:3000/pizzas/`, newPizza);
      dispatch(pizzaFetcher());
    } catch (error) {
      console.error('Error deleting pizza:', error);
    }
  };
};

export default pizzaAdder;