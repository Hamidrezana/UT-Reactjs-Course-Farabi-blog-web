import React from 'react'
import PageContainer from '../../components/PageContainer'
import { Grid } from '@material-ui/core'
import BlogCard from '../../components/BlogCard'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        userBlogs: state.Blog.userBlogs,
        loading: state.Blog.userBlogsLoading
    }
}
function UserBlogsPage(props) {
    return (
        <PageContainer
            title='userBlogs'
            loading={props.loading}
        >
            <Grid container spacing={2}>
                {
                    props.userBlogs.map((item, idx) =>
                        <BlogCard key={idx}/>
                    )
                }
            </Grid>
        </PageContainer>
    )
}

export default connect(mapStateToProps)(UserBlogsPage)
