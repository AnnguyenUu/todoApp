import React from 'react';
import ReactDom from 'react-dom';
import App from './App.js'

class TodoList extends React.Component {
	componentDidMount(){
		document.title = "To Do App"
	  }
	render() {
		return(
		<App />
		)
	}
} 

ReactDom.render(
<TodoList/>, document.getElementById('root')
)