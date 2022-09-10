import { REMOVE_REPAIR, REPAIR_ADD } from "./action";

const initialState = {
  items: [],
  item: {},
  editMode: false,
};

export const bicycleReducer = (state = initialState, action) => {
  switch (action.type) {
    case REPAIR_ADD:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case REMOVE_REPAIR:
      return {
        ...state,
        items: state.items.splice(payload, 1),
      };
    default:
      return state;
  }
};
