import React, { Component } from 'react'
import ShowBooks from './showBooks'
import AddBook from './addBook'
export class Todolist extends Component {
    state={
        bookList:[
            { id:1 ,bookName:'PHP programming',author:'Shakil Khan'},
            { id:2,bookName:'Python',author:'Nikunj Gupta'},
            {id:3,bookName:'Savita Bhabhi',author:'Raat k Rani'}
        ],
        bookSuccess:'',
        bookDeleted:''
    }
    storeBook=(bookInfo)=>{
        
            this.setState({bookList:[...this.state.bookList,bookInfo]});
            this.setState({bookSuccess:"Your Sex Book Has been added successfully"})
            setTimeout(()=>{
                this.setState({bookSuccess:''})
            },3000)
    
            
        
    }  
    removeBook=(id)=>{  
        if(window.confirm("Are you really want to delete book??")){
            this.setState({bookDeleted:"Your Book has been deleted successfully"})

        const filterBooks=this.state.bookList.filter((book)=>book.id!==id);
        this.setState({bookList:filterBooks})
        setTimeout(()=>{
            this.setState({bookDeleted:''})
        },3000)
    } 
}

    render() {
        return (
            < >
                {this.state.bookSuccess?<div className='alert alert-success'>{this.state.bookSuccess}</div>:null}
                {this.state.bookDeleted?<div className='alert alert-success'>{this.state.bookDeleted}</div>:null}
                <AddBook addBook={this.storeBook}/>
                <ShowBooks books={this.state.bookList}  delete={this.removeBook}/>
            </>
        )
    }
}

export default Todolist
