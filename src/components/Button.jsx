import React from 'react'
import {Button as Btn, CircularProgress} from '@material-ui/core';
import Strings from '../utils/Strings';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    btn: {
        width: 100,
        marginBottom: 10
    },
    loading: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12
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
            disabled={props.loading}
        >
            {Strings.btns[props.text]}
            {props.loading && <CircularProgress size={24} className={classes.loading} />}
        </Btn>
    )
}

export default Button
