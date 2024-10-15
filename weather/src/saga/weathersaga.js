import { call, put, takeLeading } from "@redux-saga/core/effects";
import { weatherFail, weatherRequest, weatherSucess } from "../slice/weatherslice";
import { getWeatherdata } from "../service/weatherservice";


export function* asyncWeather(action){
    try {
        let a = yield call(getWeatherdata,action.payload);

        yield put(weatherSucess(a));

    } catch (error) {
        yield put(weatherFail(error))
    }
}

export function* watcherWeather(){
    yield takeLeading(weatherRequest().type , asyncWeather)
}