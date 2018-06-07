import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost, deletePost } from '../actions'
import { Link } from 'react-router-dom';

class PostShow extends Component{
    componentDidMount(){
        const { id } = this.props.match.params

        this.props.fetchPost( id )
    }

    deletePost(){
        const { id } = this.props.match.params

        this.props.deletePost( id, () => {
            this.props.history.push('/')
        })
    }
    
    render(){
        const { post } = this.props 

        if( !post ){
            return <div>Loading...</div>
        }

        return (
            <div className='container'>
            <Link to='/'>Go back</Link>
            <div className='container'>
                <button className ="btn waves-effect waves-light red"
                onClick={ this.props.deletePost.bind(this) }
                >Delete post 
                <i className = "material-icons right">cancel</i>
                </button>
            </div>
            <h2>{ post.title }</h2>
            <h2>{ post.categories }</h2>
            <h2>{ post.content }</h2>
            </div>
        )
    }
}

function mapStateToProps( { posts }, ownProps ){
    return {
        post: posts[ ownProps.match.params.id ]
    }
}

export default connect( mapStateToProps, { fetchPost, deletePost })( PostShow )