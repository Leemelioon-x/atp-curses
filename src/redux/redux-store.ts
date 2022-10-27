import {combineReducers, legacy_createStore} from "redux";
import {bikesPageReducer} from "./BikesPage-reducer";

const rootReducer= combineReducers({
    bikesPageReducer
})

export const store=legacy_createStore(rootReducer)
export type storeType=ReturnType<typeof rootReducer>