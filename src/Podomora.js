import React, { Component } from 'react';
import classNames from 'classnames';
import check from './img/tomato.svg';
import checkDone from './img/tomato-done.svg';
import pen from './img/pen.png';
import Toggle from 'react-toggle';
import 'bootstrap/dist/css/bootstrap.min.css';

class Podomora extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			goEasyToday: false,
			newArr: {},
			newArr2: []
		}
	}

	componentDidMount = () => {
		console.log(this.props)
	}

	getData = () => {
		const { item, toDoList } = this.props
		const { newArr } = this.state
		for (let item of toDoList) {
			this.setState({
				title: item.title,
				isComplete: item.isComplete
			}, () => this.setData())
		}
	}

	setData = () => {
		console.log(this.state)
		const { newArr } = this.state
		this.setState({
			newArr: Object.assign({}, newArr, { title: this.state.title, isComplete: this.state.isComplete })
		})
	}


	onHandleChange = () => {
		this.setState({
			goEasyToday: !this.state.goEasyToday
		})
	}

	delItem = () => {
		console.log('vao')
	}

	render() {
		const { item, onClick } = this.props
		const { goEasyToday } = this.state
		let url = pen
		let className = "Podomora"
		if (item.isComplete || goEasyToday) {
			url = pen
		}

		return (
			<div className={classNames('Podomora', {
				'Podomora-complete': item.isComplete || goEasyToday
			}
			)}
			>
				<div className='item-img'>
					<img src={url} onClick={onClick} />
				</div>
				<div className='checked-list'>
					<div className='list-need-do'>
						<h2>{item.title}</h2>
					</div>
					<Toggle
						className='to-do'
						id='cheese-go-easy'
						defaultChecked={this.state.goEasyToday}
						onChange={this.onHandleChange}
					/>
				</div>
			</div>
		)
	}
}

export default Podomora