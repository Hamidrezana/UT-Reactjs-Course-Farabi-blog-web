import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Container } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(4)
    }
}))

function PageContainer(props) {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            {props.children}
        </Container>
    )
}

export default PageContainer
