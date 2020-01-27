import React,{Component, createElement  } from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet } from "react-native";

//Import redux stuff
import { connect } from "react-redux";
import { removePlace } from "../actions";

class Place extends Component{

    componentDidMount(){
        console.log(this.props);
    }

    state = {
        isCollapsed: false
    }

    toggle(){
        
        this.setState(prevState=>({
            isCollapsed: !prevState.isCollapsed
        }));
    }



    renderExtraDetails(){
        if(this.state.isCollapsed){
            return(
                <View style={styles.deleteButtonContainer}>
                    <Button title="Remove" color="red" onPress={()=> this.props.removePlace(this.props.id)}/>
                </View>
            )
        }
        else return null;
    }

    render(){
        const {container, header} = styles;

        return(
            <View style={container}>
                <TouchableOpacity onPress={()=> this.toggle()}>
                    <Text style={header}>Yoh {this.props.name}</Text>
                </TouchableOpacity>
                {this.renderExtraDetails()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 5,
        paddingBottom: 5,
        marginRight: 3,
        marginLeft: 3,
        marginTop:3,
        marginBottom: 3,
        shadowOffset:{
            width: 0,
            height: 2
        },
        shadowColor: "#D3D3D3",
        borderRadius: 2,
        borderWidth: 1,
        borderColor:"#ddd"
    },
    header:{
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold"
    },
    deleteButtonContainer:{
        marginTop: 7,
        paddingLeft:15, 
        paddingRight: 15
    }
});

export default connect(null,{removePlace}) (Place);