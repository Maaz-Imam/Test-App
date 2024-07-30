import axios from "axios";
import { setPizzaList, setPizzaSelections } from "../ReduxMaterial/StateSlicers/pizzaListSlice";

const pizzaFetcher = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3000/pizzas`);
      dispatch(setPizzaList(response.data));
      dispatch(setPizzaSelections(response.data.map(() => ({ size: 'small', quantity: 1 }))));
    } catch (error) {
      console.error('Error fetching pizzas:', error);
    }
  };
};

export default pizzaFetcher;
