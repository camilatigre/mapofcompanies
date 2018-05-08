import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import './App.css';
import companies from './companies.json'

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Map google={this.props.google}
            style={{width: '100%', height: '100%', position: 'relative'}}
            className={'map'}
            zoom={12}
            initialCenter={{lat: -23.550041, lng: -46.628986}}
        >
          {companies.map((company, index) => <Marker
            key={index}
            title={company.title}
            position={{lat: company.lat, lng: company.lng}} />)}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDARwe8syxGOPqruVltxd5nhDe6AXv479M'
})(App)
