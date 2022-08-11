import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { listingListReducer } from "./Reducers/ListingReducers";
import { modalReducer } from "./Reducers/ModalReducers";

const reducer = combineReducers({
  listingList: listingListReducer,
  modal: modalReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
