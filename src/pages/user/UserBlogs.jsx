import React from 'react'
import PageContainer from '../../components/PageContainer'
import { Grid } from '@material-ui/core'
import BlogCard from '../../components/BlogCard'

function UserBlogsPage() {
    const blogs = [1, 2, 3]
    return (
        <PageContainer
            title='userBlogs'
        >
            <Grid container spacing={2}>
                {
                    blogs.map((item, idx) =>
                        <BlogCard key={idx}/>
                    )
                }
            </Grid>
        </PageContainer>
    )
}

export default UserBlogsPage
