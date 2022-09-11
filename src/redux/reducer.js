import { REMOVE_REPAIR, REPAIR_ADD } from "./action";

const initialState = {
  items: [],
  item: {},
  editMode: false,
};

export const bicycleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "repairAdded":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "repairRemoved":
      let flagArray = state.items;
      flagArray.splice(action.payload, 1);
      return {
        ...state,
        items: flagArray,
      };
    case "repairUpdated":
      return { ...state, item: action.payload };
    default:
      return state;
  }
};
