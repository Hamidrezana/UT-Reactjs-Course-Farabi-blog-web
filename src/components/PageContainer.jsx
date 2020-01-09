import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Container } from '@material-ui/core'
import Strings from '../utils/Strings'

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(4)
    }
}))

function PageContainer(props) {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <h2>{Strings.title[props.title]}</h2>
            {props.children}
        </Container>
    )
}

export default PageContainer
