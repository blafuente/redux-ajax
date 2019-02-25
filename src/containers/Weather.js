import React, { Component } from 'react';
import { connect } from 'react-redux';
// Weather needs to know about Redux.
// The reason for this, is because the weather state
// is going to be updated by the searcBar
// and the searchBar is a peer, not a parent
class Weather extends Component{
    render(){
        console.log(this.props.weatherData);
        return(
            <h1>Weather Component</h1> 
        )
    }
}
function mapStateToProps(state){
    return{
        weatherData: state.weather
    }
}
// connect takes a max of 2 args:
// 1. the map/state function
// 2. the map/dispatch function

export default connect(mapStateToProps)(Weather);
// export default Weather;