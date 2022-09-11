/*
reducer is defined here and is exproted.
This reducer should handle all the actions.
Example of how to use reducer is as follows:

const reducer = (state = [],action = {}) => {

  switch(action.type){

    case 'actionType1': 
      return changedState1;
    
    case 'actionType2':
      return changedState2;

    default: 
      return state;
    }
  
export default reducer;
*/

const initialState = {
  items: [],
  item: {},
  editMode: false,
};

const bicycleReducer = (state = initialState, action) => {
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

export default bicycleReducer;
