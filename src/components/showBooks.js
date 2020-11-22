import React from 'react'
import 'bootswatch/dist/materia/bootstrap.min.css'
function ShowBooks(props) {
    const deleteBook=(id)=>{
        props.delete(id);
        console.log("dlele")
    }
    return (
        <table className='table mt-4' >
            {props.books.map(book=>(
                <tbody key={book.id}>
                    <tr >
                        <td>
                            {book.bookName}
                        </td>
                        <td>
                            {book.author}
                        </td>
                        <td>
                            <button type='button' className='btn btn-danger' onClick={()=>{deleteBook(book.id)}}>Delete</button>
                        </td>
                    </tr>
                </tbody>
            ))}
        </table>
    )
}

export default ShowBooks
