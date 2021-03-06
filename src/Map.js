import React, { Component } from 'react';

import ReactMapGL from 'react-map-gl';

export class Map extends Component {

  state = {
    viewport: {
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }
  };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({ viewport })}
      />
    );
  }
}
