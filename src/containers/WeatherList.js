import React, {Component} from 'react';

import {connect} from 'react-redux';

import styled from 'styled-components';

import Chart from '../components/Chart';

export class WeatherList extends Component {
	renderWeather = (cityData) => {
		const name = cityData.city.name;
		const id = cityData.city.id;
		const temps = cityData.list.map((weather) => weather.main.temp);
		const pressures = cityData.list.map((weather) => weather.main.pressure);
		const humidities = cityData.list.map(
			(weather) => weather.main.humidity
		);

		return (
			<tr key={id}>
				<td>{name}</td>
				<td>
					<Chart data={temps} units="&deg;F" color="red" />
				</td>
				<td>
					<Chart data={pressures} units="hPa" color="blue" />
				</td>
				<td>
					<Chart data={humidities} units="%" color="orange" />
				</td>
			</tr>
		);
	};

	render() {
		return (
			<Table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>{this.props.weather.map(this.renderWeather)}</tbody>
			</Table>
		);
	}
}

function mapStateToProps({weather}) {
	return {weather};
}

export default connect(mapStateToProps)(WeatherList);

const Table = styled.table`
	thead {
		tr {
			td,
			th {
				vertical-align: middle;
				text-align: center;
			}

			td {
				
			}

			th {
				
			}
		}
	}

	tbody {
		tr {
			td {
				vertical-align: middle;
			}
		}
	}
`;
