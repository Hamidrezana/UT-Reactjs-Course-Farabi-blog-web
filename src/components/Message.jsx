import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.error.main,
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    text: {
        color: '#fff'
    }
}))

function Message(props) {
    const classes = useStyles()
    return (
        <Paper className={classes.root}>
            <Typography className={classes.text} variant="h5" component="h3">
                {props.message}
            </Typography>
        </Paper>
    )
}

export default Message
