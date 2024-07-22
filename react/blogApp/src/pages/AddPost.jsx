import React from 'react'
import Container from '../components/container/container'
import PostForm from '../components/postForm/postForm'
function AddPost() {
  return (
    <div className='py-8'>
      <Container>
            <PostForm/> 
        </Container>
    </div>
  )
}

export default AddPost
