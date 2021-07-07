import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddButton from './AddButton';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1)
	}
}));

export default function TodoInput(props) {
	const classes = useStyles();

	return (
		<TextField
			id="outlined-name"
			label="Todo..."
			className={classes.textField}
			onChange={props.handleChanges}
			// onSubmit={props.submitItem}
			margin="normal"
			variant="outlined"
		/>
	);
}
