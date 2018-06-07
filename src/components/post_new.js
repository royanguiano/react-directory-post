import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createPost } from '../actions'

class PostsNew extends Component {
    renderField( field ){
        return (
            <div className='input-field col s6'>
            <label htmlFor={ field.name }> { field.label }</label><br />
                <input
                    required
                    className='validate'
                    type='text'
                    { ...field.input }
                    />
                    <span className="helper-text" data-error="wrong" data-success="right">
                    { field.meta.touched ? field.meta.error : ' ' }
                    </span>
            </div>
        )
    }
    onSubmit( values, callback){
        this.props.createPost( values, () => {
            this.props.history.push('/')
        })
    }

    render(){
        const { handleSubmit } = this.props
        return ( 
            <div className='row'>
                <form className='col s12' onSubmit={ handleSubmit( this.onSubmit.bind( this )) }>
                    <div className='row'>
                        <Field 
                            label='Title for Post:'
                            name='title'
                            component={ this.renderField }
                        />
                    </div>
                    <div className='row'>
                        <Field 
                            label='Category'
                            name='category'
                            component={ this.renderField }
                        />
                    </div>
                    <div className='row'>
                        <Field 
                            label='Post Content:'
                            name='content'
                            component={ this.renderField }
                        />
                    </div>
                    <button className="btn waves-effect waves-light" type="submit">Submit
                        <i className="material-icons right">send</i>
                    </button>
                    <Link to='/'>
                        <button className ="btn waves-effect waves-light red">Cancel 
                        <i className = "material-icons right">cancel</i>
                        </button>
                    </Link>
                </form>
            </div>
        )
    }
}

function validate( values ){

    const errors = {}

    if(!values.title){
        errors.title = 'missing title'
    }
    if(!values.category){
        errors.category = 'missing categories'
    }
    if(!values.content){
        errors.content = 'missing content'
    } 

    return errors 
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})( 
    connect( null, { createPost })( PostsNew )
)