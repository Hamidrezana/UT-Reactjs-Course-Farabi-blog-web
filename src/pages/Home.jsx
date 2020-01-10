import React from 'react'
import { Grid } from '@material-ui/core'
import BlogCard from '../components/BlogCard'
import PageContainer from '../components/PageContainer'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        allBlogs: state.Blog.allBlogs,
        loading: state.Blog.allBlogsLoading
    }
}


function HomePage(props) {

    return (
        <PageContainer
            title='home'
            loading={props.loading}
        >
            <Grid container spacing={2}>
                {
                    props.allBlogs.map((item, idx) =>
                        <BlogCard fromHomePage blog={item} key={idx}/>
                    )
                }
            </Grid>
        </PageContainer>
    )
}

export default connect(mapStateToProps)(HomePage)
