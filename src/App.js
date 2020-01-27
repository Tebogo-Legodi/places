import React,{Component} from 'react';
import { View, Text } from "react-native";

//Import redux stuff
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";

import PlaceList from "./components/PlaceList";

//Get Router
import Router from "./Router";

export default class App extends  Component{
    render(){
        //A store wraps the reducers
        const store = createStore(reducers);

        return(
            <Provider store={store}>
                <Router/>
            </Provider>
            
        )
    }
}