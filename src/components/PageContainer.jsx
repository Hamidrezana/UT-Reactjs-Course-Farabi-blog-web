import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Container, CircularProgress } from '@material-ui/core'
import Strings from '../utils/Strings'
import Message from './Message'

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(4)
    }
}))

function PageContainer(props) {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            {
                props.message ? <Message message={props.message} /> : null
            }
            {
                props.loading ?
                <CircularProgress size={50}/> :
                <React.Fragment>
                    <h2>{Strings.title[props.title]}</h2>
                     {props.children}
                </React.Fragment>
            }
        </Container>
    )
}

export default PageContainer
