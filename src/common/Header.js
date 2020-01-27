import React, {Component} from 'react';
import { View, StyleSheet,Text } from 'react-native';

class Header extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const {container, header} = styles;
        return(
            <View style={container}>
                <Text style={header}>{this.props.title}</Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#dcdcdc",
        alignItems: "center",
        justifyContent: "center",
        height: 60,
        position: "relative",
        paddingTop: 5,
        elevation: 6,
        shadowColor: "#101010",
        shadowOpacity: 0.3,
        shadowOffset:{
            width:0,
            height:2
        }
    },
    header:{
        fontSize: 15
    }
});

export {Header}