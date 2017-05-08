import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './Weather.actions';

class Weather extends React.Component {
  componantDidMount(){
      this.props.getWeather(this.props.params.name);
  }
  componentWillReceiveProps(newProps) {
    if (this.props.params.name !== newProps.params.name) {
      this.props.getWeather(newProps.params.name);
    }
  }


  render() {
    let weather = this.props.weatherData;
    let weatherDisplay;
    // if(this.props.params.name){
    //     this.props.getWeather(this.props.params.name);
    // }
    if (weather) {
      weatherDisplay = <p>
        The weather in {weather.name} is:
        {weather.main.temp} degrees F<br/>
        with a high of {weather.main.temp_max} F<br/>
        and a low of {weather.main.temp_min} F.
      </p>;
    } else if (this.props.isFetching) {
      weatherDisplay = <p><img src="/images/gears.gif" alt="loading"/></p>;
    } else if (this.props.error) {
      weatherDisplay = <p>{this.props.error}</p>;
    }
    return (
      <div>
        <input type="text" value={this.props.params.name}
          onChange={event => this.props.changeName(event.target.value)}/>
          <br/>
          {() => this.props.getWeather(this.props.params.name)}
        <button onClick={() => this.props.getWeather(this.props.params.name)}>Get Weather</button><br/>
        {weatherDisplay}
      </div>
    );
  }
}

const WeatherContainer = ReactRedux.connect(
  state => state.weather,
  actions
)(Weather);

export default WeatherContainer;
