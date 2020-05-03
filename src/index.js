import React from 'react';
import ReactDom from 'react-dom';
import App from './App.js'

class TodoList extends React.Component {
	render() {
		return(
		<App />
		)
	}
} 

ReactDom.render(
<TodoList/>, document.getElementById('root')
)