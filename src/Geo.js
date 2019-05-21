import React from 'react';
import { Redirect } from 'react-router-dom';
import { geolocated } from 'react-geolocated';

class Geo extends React.Component {
  constructor(props) {
    super(props);
    this.redirecting = this.redirecting.bind(this);
  }

  redirecting() {
    if (!this.props.isGeolocationAvailable) {
      return <Redirect to={'/'} />;
    }
  };

  render() {
    return (
    	<div>
				{!this.props.isGeolocationAvailable ?
    			<div>Your browser does not support Geolocation</div>
    : !this.props.isGeolocationEnabled
    ? <div>Geolocation is not enabled</div>
    : this.props.coords
     ? <table>
<tbody>
{this.redirecting()}
		<tr>
				<td>latitude</td>
				<td>{this.props.coords.latitude || 'unknown'}</td>
		</tr>
		<tr>
				<td>longitude</td>
				<td>{this.props.coords.longitude || 'unknown'}</td>
		</tr>
		<tr>
				<td>
						<a
     style={{ color: 'red' }}
     href={
      `https://www.openstreetmap.org/#map=18/
					${this.props.coords.latitude}/${this.props.coords.longitude}`
     }>Location</a>
				</td>
		</tr>
		</tbody>

</table>
    : <div>Getting the location data&hellip; </div>
    }
</div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Geo);
