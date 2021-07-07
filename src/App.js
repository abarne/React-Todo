import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

const listData = [
	{
		name: 'Style ToDo List',
		id: 123,
		completed: false
	},
	{
		name: 'Add complete functionality',
		id: 1234,
		completed: true
	}
];

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state

	constructor() {
		super();
		this.state = {
			listData
		};
	}

	addItem = (itemName) => {
		const newItem = {
			name: itemName,
			id: Date.now(),
			completed: false
		};
		this.setState({
			listData: [ ...this.state.listData, newItem ]
		});
	};

	toggleItem = (id) => {
		this.setState({
			listData: this.state.listData.map((item) => {
				if (item.id === id) {
					return {
						...item,
						completed: !item.completed
					};
				} else {
					return item;
				}
			})
		});
	};

	clearTodo = () => {
		this.setState({
			listData: this.state.listData.filter((item) => !item.completed)
		});
	};

	render() {
		return (
			<div className="App">
				{/* 

				<div className="App">
					<TodoForm addItem={this.addItem} />
					<TodoList toggleItem={this.toggleItem} listData={this.state.listData} clearTodo={this.clearTodo} />
				</div> */}

				<h1 className="title">Your Todo List!</h1>
				<TodoForm addItem={this.addItem} />
				<TodoList toggleItem={this.toggleItem} listData={this.state.listData} clearTodo={this.clearTodo} />
			</div>
		);
	}
}

export default App;
