import React from 'react';
import AddButton from '../AddButton';
import TodoInput from '../TodoInput';
import TextField from '@material-ui/core/TextField';

class TodoForm extends React.Component {
	constructor() {
		super();
		this.state = {
			item: ''
		};
	}

	handleChanges = (e) => {
		this.setState({
			// [e.target.name]: e.target.value
			item: e.target.value
		});
	};

	submitItem = (e) => {
		e.preventDefault();
		this.props.addItem(this.state.item);
	};

	render() {
		return (
			<form onSubmit={this.submitItem}>
				<TextField
					id="outlined-name"
					label="Todo..."
					onChange={this.handleChanges}
					value={this.state.item}
					variant="outlined"
					margin="normal"
				/>
				<AddButton submitItem={this.submitItem} />
			</form>
		);
	}
}

export default TodoForm;
