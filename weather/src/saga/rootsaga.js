import { all } from "@redux-saga/core/effects";
import { watcherWeather } from "./weathersaga";

export function* rootsaga(){
    yield all([watcherWeather()])
}