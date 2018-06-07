import Axios from 'axios'

export const FETCH_POSTS = 'fetch_posts'
export const FETCH_POST = 'fetch_post'
export const CREATE_POST = 'create_post'
export const DELETE_POST = 'delete_post'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=PAPERCLIP12345'

export function fetchPosts() {
    const request = Axios.get(`${ROOT_URL}/posts${API_KEY}`)

    return {
        type: FETCH_POSTS, 
        payload: request
    }
}

export function createPost( values, callback ){
    const request = Axios.post( `${ROOT_URL}/posts${API_KEY}`, values )
        .then(() => callback())

    return {
        type: CREATE_POST, 
        payload: request
    }
}

export function fetchPost( id ){
    const request = Axios.get( `${ROOT_URL}/posts/${id}${API_KEY}` )

    return {
        type: FETCH_POST,
        payload: request
    }
}

export function deletePost( id, callback ){
    console.log(id)
    const request = Axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}` )
        .then(() => callback())

    return {
        type: DELETE_POST, 
        payload: id
    }
}
