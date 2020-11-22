import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
export class AddBook extends Component {
    state={id:uuidv4()
        ,bookName:'',
    author:''
}
    handleInputs=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    saveData=(e)=>{
        e.preventDefault()
        this.props.addBook(this.state);
        this.setState({bookName:'',author:''})
    }
    render() {
        return (
            <div>
                <form className='mt-5' onSubmit={this.saveData}>
                    <div className='form-group'>
                        <h3>Add Book</h3>
                    </div>
                    <div className='form-group'>
                        <input type='text' name='bookName' className='form-control' required  placeholder='Book Name.....' value={this.state.bookName} onChange={this.handleInputs} />
                        <input type='text' name='author' className='form-control' required placeholder='Author Name.....' value={this.state.author} onChange={this.handleInputs} />
                        <input type='submit'  className='btn btn-info mt-4' value='Add Book' />

                    </div>
                </form>
            </div>
        )
    }
}

export default AddBook
