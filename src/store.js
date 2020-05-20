import { createStore, combineReducers } from "redux";
import SetInputReducer from "./Reducers/SetInputReducer";
import SetMovieListReducer from "./Reducers/SetMovieListReducer";
import SetTitreReducer from "./Reducers/SetTitreReducer";
import SetLinkReducer from "./Reducers/SetLinkReducer";
import StarReducer from "./Reducers/StarReducer";
import SetRateReducer from "./Reducers/SetRateReducer";
import SetShowReducer from "./Reducers/SetShowReducer";
import SetDescreducer from "./Reducers/SetDescReducer";
const Store=createStore(combineReducers({
    InputValue:SetInputReducer,
    MovieTab:SetMovieListReducer,
    StarTab:StarReducer,
    SetTitre:SetTitreReducer,
    SetLink:SetLinkReducer,
    SetRate:SetRateReducer,
    show:SetShowReducer,
    description:SetDescreducer
    

}))
export default Store; 