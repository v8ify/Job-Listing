import { combineReducers } from "redux";

const completeJobsListReducer = (state = [], action) => {
  switch (action.type) {
    case "COMPLETE_JOBS_LIST":
      return action.payload;
    default:
      return state;
  }
};

const filtersReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_FILTERS":
      return [...state, action.payload];
    default:
      return state;
  }
};

const displayListReducer = (state = [], action) => {
  switch (action.type) {
    case "JOBS_TO_SHOW":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  completeJobsList: completeJobsListReducer,
  filters: filtersReducer,
  displayList: displayListReducer,
});
