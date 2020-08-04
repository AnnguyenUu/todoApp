import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import './App.css';
import tomato from './img/tomato-cartoon-1.svg';
import tomatoAha from './img/tomato-cartoon.svg';
import logo from './img/logo.svg';

class HeaderBackGround extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			temp: true
		}
	}

	componentDidMount = () => {
		this.myInterval = setInterval( () => {
			this.setState ({
				temp: !this.state.temp
			})
		}, 500)
	}

	render() {
		let { temp } = this.state
		let url = tomato;
		let logoHeader = logo;
		let url_done = tomatoAha;

		return (
		<Container
			fluid = {true}
			className = 'header-background'
		>
			<Row>
			<Col lg = {4}>
				<img className = 'header-background logo' src = {logoHeader} />
			</Col>
				<Col className = 'tomato-aha text-center'
					lg = {12}
				>
					<img src = { temp ? url : url_done } />
				</Col>
				<Col className = 'text-center'
					lg = {12}
				>
				
				</Col>	
			</Row>
		</Container>
			)
	}
}

export default HeaderBackGround