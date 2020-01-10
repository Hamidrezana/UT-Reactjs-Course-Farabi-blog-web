import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    error: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2),
        backgroundColor: theme.palette.error.main,
    },
    success: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2),
        backgroundColor: 'green',
    },
    text: {
        color: '#fff'
    }
}))

function Message(props) {
    const classes = useStyles()
    return (
        <Paper className={props.message.type === 'error' ? classes.error : classes.success}>
            <Typography className={classes.text} variant="h5" component="h3">
                {props.message.message}
            </Typography>
        </Paper>
    )
}

export default Message
