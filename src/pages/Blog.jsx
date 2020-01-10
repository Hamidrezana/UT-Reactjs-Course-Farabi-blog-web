import React from 'react'
import { useParams } from 'react-router-dom'
import PageContainer from '../components/PageContainer'

function BlogPage() {
    const { id } = useParams()
    return (
        <PageContainer>
            <h1>ایدی بلاگ = {id}</h1>
        </PageContainer>
    )
}

export default BlogPage
