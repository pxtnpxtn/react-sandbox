import axios from 'axios'
import React, {useEffect} from 'react'

function AxiosPlayground() {
    const jsonplaceholderEndpointInstance = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/posts'
    })

    // This endpoint will expire. Go to www.crudcrud.com to make another one.
    const crudcrudEndpointInstance = axios.create({
        baseURL: 'https://crudcrud.com/api/cd2746cc6fa0481a96abcf1d776e8ca4'
    })

    useEffect(() => {
        jsonplaceholderEndpointInstance.get('/').then(res => console.log(res.data))
    })

    const createPost = async () => {
        const response = await crudcrudEndpointInstance.post(`/post`, {
            title: 'Test',
            id: 1,
            author: 'Bob'
        })
        console.log('response', response);
    }

    const getPost = async () => {
        try {
          const response = await crudcrudEndpointInstance
            .get(`/post`)
            .then((res) => res.data);
          console.log('response', response);
        } catch (err) {
          console.log('getPost Error-->', err);
        }
      };

    const deletePost = async () => {
        const postToDelete = "60568c3313120c03e81c7b66"
        await crudcrudEndpointInstance.delete(`/post/${postToDelete}`)
        getPost();
    }

    const updatePost = async () => {
        const postToUpdate = "6056978613120c03e81c7b73"
        await crudcrudEndpointInstance.put(`/post/${postToUpdate}`, {title: 'Updated Title'})
        getPost();
    }

    return (
        <div>
            <button onClick={createPost}>CreatePost</button>
            <button onClick={getPost}>GetPost</button>
            <button onClick={deletePost}>DeletePost</button>
            <button onClick={updatePost}>UpdatePost</button>
        </div>
    )
}

export default AxiosPlayground
