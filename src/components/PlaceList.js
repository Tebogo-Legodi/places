import React, { Component } from "react";
import { View, FlatList, Text, StyleSheet, Button } from "react-native";

//Import Redux stuff
import { connect } from "react-redux";
//Import actions that will be used to trigger redux
import { addPlace, removePlace } from "../actions";

import { Header } from "../common";
import Place from "./Place";

class PlaceList extends Component{
    componentDidMount(){
        console.log(this.props);
    }


    renderList(){
        if(this.props.places.length > 0){
            return(
                <View style={{flex:1}}>
                    <FlatList
                        data={this.props.places}
                        renderItem={ ({item})=>(
                            <Place name={item.name} id={item.id}/>
                        )}
                        keyExtractor={place=> String(place.id)}
                    />
                 
                </View>
                
            )
        }
        else{
            return <Text style={styles.text}>Please add a place</Text>
        }
    }
    render(){
        return(
            <View style={{flex:1}}>
                {this.renderList()}
            </View>
        )
    }
};

const styles = StyleSheet.create({
    text:{
        textAlign:"center",
        fontSize:18,
        marginTop: 30
    }
})

mapStateToProps = ({places})=>{
    const {placeList} = places;
    return{
        places: placeList
    }

}

export default connect(mapStateToProps,{addPlace,removePlace}) (PlaceList);