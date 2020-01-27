import React, { Component } from "react";
import { View,Text, StyleSheet, Button, TextInput, ToastAndroid } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { addPlace } from "../actions";

class PlaceComponent extends Component{

    state = {
        name:'',
        error:''
    }

    addPlace(){

        if(this.state.name.trim() != ''){
            let randomID = Math.floor(Math.random() * 100) + Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 100);

            let place = {
                name: this.state.name,
                id: randomID
            };

            this.props.addPlace(place);

            ToastAndroid.show('Lets add a place', ToastAndroid.LONG);
            
            //Actions.placeList();
            Actions.replace("placeList")
        }
        else{
            this.setState(prevState=>({
                error: '*Name cannot be empty.'
            }))
        }

        
    }

    nameChange(placeName){
        this.setState(prevState=>({
            name: placeName
        }));

    }

    displayError(){
        if(this.state.error.trim() != ''){
            return <Text style={styles.errorMsg}>{this.state.error}</Text>
        }
        else{
            return null;
        }
    }

    render(){
        const {container} = styles;
        return(
            <View style={container}>
                <Text>Name</Text>
                <TextInput autoFocus underlineColorAndroid="green" placeholder="e.g Jozi" value={this.state.name} onChangeText={name=> this.nameChange(name)}/>
                {this.displayError()}
                <Button title="Add Place" onPress={()=>this.addPlace()}/>
            </View>
        )
    }
};

//Styling
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingRight:10,
        paddingLeft: 10,
        paddingTop:15
    },
    errorMsg:{
        //textAlign: "center",
        fontSize: 14,
        color: "red",
        marginTop: 3,
        marginBottom: 3
    }
});



export default connect(null,{addPlace}) (PlaceComponent);