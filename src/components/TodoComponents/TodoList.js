// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import Button from '@material-ui/core/Button';

const TodoList = (props) => {
	return (
		<div>
			<div className="todoList">
				{props.listData.map((item) => <Todo item={item} toggleItem={props.toggleItem} />)}
			</div>
			<Button size="large" variant="contained" color="primary" onClick={props.clearTodo}>
				Clear Completed
			</Button>
		</div>
	);
};

export default TodoList;
