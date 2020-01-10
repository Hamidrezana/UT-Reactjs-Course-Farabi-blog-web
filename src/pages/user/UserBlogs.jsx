import React from 'react'
import PageContainer from '../../components/PageContainer'
import { Grid, Card, Typography, CardContent } from '@material-ui/core'
import BlogCard from '../../components/BlogCard'
import { connect } from 'react-redux'
import Strings from '../../utils/Strings'

const mapStateToProps = state => {
    return {
        userBlogs: state.Blog.userBlogs,
        loading: state.Blog.userBlogsLoading
    }
}
function UserBlogsPage(props) {
    const goToAddNew = () => {
        props.history.push('/user/add')
    }
    return (
        <PageContainer
            title='userBlogs'
            loading={props.loading}
        >
            <Grid container spacing={2}>
                {
                    props.userBlogs.map((item, idx) =>
                        <BlogCard blog={item} key={idx}/>
                    )
                }
                <Grid item xs={12} md={6} lg={4}>
                    <Card onClick={goToAddNew}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                {Strings.title.addNew}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </PageContainer>
    )
}

export default connect(mapStateToProps)(UserBlogsPage)
