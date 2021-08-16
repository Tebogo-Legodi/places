import React from "react";
import { Router, Scene, Actions } from "react-native-router-flux";

//Get Components
import PlaceList from "./components/PlaceList";
import Place from "./components/AddPlace";

const RouterComponent = ()=>{
    return(
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="places">
                    <Scene key="placeList" component={PlaceList} title="Places" rightTitle="Add" onRight={()=> Actions.place()}/>
                    <Scene key="place" component={Place} title="Place"/>
                </Scene>
            </Scene>
        </Router>
    )
};

export default RouterComponent;