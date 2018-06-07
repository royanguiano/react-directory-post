import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/'
import _ from 'lodash'

class PostIndex extends Component {
   componentDidMount(){
       this.props.fetchPosts()
   }
   renderPost(){
       return _.map( this.props.posts, ( post ) => {
            return ( 
                <li className='collection-item' key={ post.id } >
                <Link to={`/post/${ post.id }`}>{ post.title }</Link>
                </li>
            )
       })
   }

   render(){
        return (
            <div className="row">
                <div className="col s6 offset-s8">
                    <Link 
                        className="waves-effect waves-light btn" 
                        to='/post/new'>
                        <i className="material-icons right">send</i>Add new Post
                    </Link>
                </div>
                <h3>Post</h3> 
                <ul className='collection'>
                    { this.renderPost() }
                </ul>
            </div>
        )
    }
}

function mapStateToProps( state ){
    return {
        posts: state.posts
    }
}

export default connect( mapStateToProps, { fetchPosts })( PostIndex )