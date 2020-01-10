import React from 'react'
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, CardActions, Button, Grid } from '@material-ui/core';
import Strings from '../utils/Strings';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    bodyText: {
        fontSize: 18
    },
    pos: {
        marginBottom: 12,
    },
    cardFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
    }
});

function BlogCard(props) {
    const classes = useStyles()
    const {blog: {id, title, text, user}, fromHomePage} = props
    return (
        <Grid item xs={12} md={6} lg={4}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {title}
                    </Typography>
                    <Typography className={classes.bodyText} variant="body2" component="p">
                        {text}
                    </Typography>
                </CardContent>
                <CardActions>
                    <div className={classes.cardFooter}>
                        {
                            fromHomePage ? <span>{user.firstName + ' ' + user.lastName}</span> : null
                        }
                        <Button onClick={() => props.history.push(`/blog/${id}`)} size="small">{Strings.btns.more}</Button>
                    </div>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default withRouter(BlogCard)
