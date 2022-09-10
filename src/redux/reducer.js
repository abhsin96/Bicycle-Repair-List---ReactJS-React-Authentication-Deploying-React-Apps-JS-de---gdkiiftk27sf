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
      return {
        ...state,
        items: state.items.splice(action.payload, 1),
      };
    case "repairUpdated":
      return { ...state, item: action.payload };
    default:
      return state;
  }
};
