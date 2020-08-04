import React from 'react';
import './App.css';
import Podomora from './Podomora.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import yourlist from './img/todo-label.svg';
import coffe from './img/todoist.png'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Tomatoes : [],
			startCount: 0,
			popUp: false
		}
	}
	
	onItemClicked = (item) => {
		return (event) => {
			const isComplete = item.isComplete;
			const index = this.state.Tomatoes.indexOf(item);
			const Tomatoes = this.state.Tomatoes;
			
			this.setState({
				Tomatoes: [
				...Tomatoes.slice(0, index),
				{
					...item,
					isComplete: !isComplete
				},
				...Tomatoes.slice(index + 1)
				]
			});
			
		}
	}
	
	onKeyUp = (e) => {
		if (e.keyCode === 13 ) { // enter character
				let text = e.target.value
			
		if (!text) {
			return;
		}
		
		text = text.trim();
	 if (!text) {
			return;
		}
		
		this.setState({
			Tomatoes: [
			...this.state.Tomatoes,
			{title: text.toUpperCase(), isComplete: false}
			],
			name: ''
		})
		}
	}
	
	onHandleChange = (e) => {
		e.preventDefault();
		this.setState({
			name: e.target.value
		})
	}
	
	render() {
		const { Tomatoes, name, startCount } = this.state;
		let url = yourlist
		let coffeImg = coffe
		return (

    	<div className = "tomatoes">	
    		<Modal
    		show = {this.state.popUp}
    		 />
			<Container>
				<Row>
					<Col md={{ span: 4, offset: 4 }}>
						<img style={{width: "100%"}} src={coffeImg} />
					</Col>
				</Row>
			</Container>
			<Container>
				<Row>
					<Col md ={6} lg = {6}>
						<div className = 'write-it-down'>
							<h2>Add Task</h2>
							<input 
							type = 'text' 
							value = {name}
							onChange = {this.onHandleChange}	
							onKeyUp = {this.onKeyUp} 
							/>
						</div>
					</Col>
					<Col md ={6} lg ={6}>
						<div className = 'list-render'>
							<h2 style={{textAlign: 'center'}}> Tasks </h2>
							<div className = 'list-to-do'>
								{
									Tomatoes.map(( item, index ) => <Podomora
									key = {index}  
									item = {item}
									todosList = {Tomatoes}
									onClick = {this.onItemClicked(item)}
									toDoList = {Tomatoes}
									/>)
								}
							</div>
			</div>
					</Col>
				</Row>
			</Container>
			
			
			
	</div>
  )
	}
  
}

export default App;
