import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
	margin: {
		margin: theme.spacing(2)
	}
}));

export default function AddButton(props) {
	const classes = useStyles();
	return (
		<Fab size="small" color="secondary" aria-label="add" className={classes.margin}>
			<AddIcon onClick={props.submitItem} />
		</Fab>
	);
}
