import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component{

    renderError({ error, touched }){
        if(touched && error){
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) =>{

        const Styling =` field ${meta.error && meta.touched ? 'error': '' } `;

        return( 
            <div className={Styling}>
                <label>{label}</label>
        <input  {...input} autoComplete="off" />
        {this.renderError(meta)}
        </div>
        );
    }

onSubmit = (formData) =>{
    this.props.onSubmit(formData);
}

    render(){
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="Title" component={this.renderInput} label="Enter Title" />
                <Field name="Description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = formData=>{
    const errors = {};
    if(!formData.Title){
        errors.Title='Enter valid title';
    }
    if(!formData.Description){
        errors.Description='Enter vaild description';
    }
    return errors;

};

export default reduxForm({form:'StreamForm', validate})(StreamForm);