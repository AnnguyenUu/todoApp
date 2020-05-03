import React, {Component} from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames';
import check from './img/tomato.svg';
import checkDone from './img/tomato-done.svg';
import Toggle from 'react-toggle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'

class Podomora extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			goEasyToday: true,
      newArr: {},
      newArr2:[]
		}
	}

  componentDidMount = () => {
    console.log(this.props)
  }

  getData = () => {
    const { item, toDoList } = this.props
    const {newArr} = this.state
    for ( let item of toDoList ) {
      console.log(item)
      this.setState({
        title: item.title,
        isComplete: item.isComplete
      },() => this.setData())
      // const newObj =  Object.assign({}, newArr, {title: item.title, isComplete: item.isComplete})
      // this.setState({
      //   newObj: newObj
      // })
    }
    // this.setState({
    //   newArr: Object.assign(...newArr, {title: item.title, isDone: item.isComplete})
    // })
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
		const {item, onClick} = this.props
    const {toDoIst, newArr} = this.state
    console.log(newArr)
		let url = check
		let className = "Podomora"
		if (item.isComplete)
		{
			url = checkDone
		}
		
		return(
			<div className={classNames('Podomora', {
				'Podomora-complete':item.isComplete 
			}
			)}
			>
			<div className = 'item-img'>
			<img  src = {url}  onClick = {onClick} />
			</div>
		<div className = 'checked-list'>
			<div className = 'list-need-do'>
      <h2>{item.title}</h2>
			</div>
			<Toggle
				className = 'to-do'
				id = 'cheese-go-easy'
				defaultChecked = {this.state.goEasyToday}
				onChange = {this.onHandleChange}
		 />
		</div>
				</div>
		)
	}
} 

export default Podomora