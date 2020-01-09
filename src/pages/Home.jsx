import React from 'react'
import { Grid } from '@material-ui/core'
import BlogCard from '../components/BlogCard'
import PageContainer from '../components/PageContainer'

function HomePage() {
    const blogs = [1, 2, 3]
    return (
        <PageContainer
            title='home'
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

export default HomePage
