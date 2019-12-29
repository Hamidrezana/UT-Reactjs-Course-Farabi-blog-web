import React from 'react'
import { TextField, Box } from '@material-ui/core'
import Strings from '../utils/Strings'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    form: {
        display: 'flex',
        justifyContent: 'center'
    }
});

function Input(props) {
    const classes = useStyles()
    const { name, error, ...otherProps } = props
    return (
        <Box className={classes.form} marginBottom={2}>
            <TextField
                name={name}
                id={name}
                error={error ? true : false}
                helperText={error}
                label={Strings.formText[name]}
                variant="filled"
                {...otherProps}
            />
        </Box>
    )
}

export default Input
