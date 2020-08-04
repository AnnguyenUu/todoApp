import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import play from './img/play-button.svg'
import stop from './img/stop-button.svg'
import rest from './img/rest-button.svg'

class Timer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 1500,
			countDown: 1500,
			res: '25:00'
		}
	}

	formatTime = (s) => {
		return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s
	}

	onClick = () => {
		this.setState({
			count: this.state.count
		})
		this.doIntervalChange()
	}

	doIntervalChange = () => {
		this.myInterval = setInterval(() => {
			this.setState(prevState => ({
				count: prevState.count - 1,
				res: this.formatTime(this.state.count)
			}))
		}, 1000)
	}

	onReset = () => {
		clearInterval(this.myInterval)
		// this.beginAgain()
	}

	beginAgain = () => {
		this.setState({
			count: this.state.countDown,
			res: this.formatTime(this.state.count)
		})
		clearInterval(this.myInterval)
	}

	render() {
		let playButton = play
		let stopButton = stop
		let restButton = rest
		const { count, res } = this.state
		return (
			<div>
				<h1 id='time-is-coming'>{res}</h1>
				<div className="Oclock">
					<a onClick={this.beginAgain} href='#'>
						<img src={restButton} />
					</a>
					<a onClick={this.onClick} href='#'>
						<img src={playButton} />
					</a>
					<a onClick={this.onReset} href='#'>
						<img src={stopButton} />
					</a>

				</div>
			</div>
		)
	}
}

export default Timer