import React from 'react'
import {Button as Btn} from '@material-ui/core';
import Strings from '../utils/Strings';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    btn: {
        width: 100,
        marginBottom: 10
    }
}));

function Button(props) {
    const classes = useStyles()
    return (
        <Btn
            className={classes.btn}
            variant="contained"
            color="primary"
            onClick={props.onClick}
        >
            {Strings.btns[props.text]}
        </Btn>
    )
}

export default Button
