import {getBooks} from "../data/data";
import {Link} from "react-router-dom";
const Books = ()=>{
    const books = getBooks();
    return(
        <div>
            <nav style={{borderLeft:"solid 1px black" , padding:"1rem" ,display:"flex",width:"50%",margin:"auto 0",flexDirection:"column"}}>
                <input type="text" placeholder="جستجو کتاب" name="" id=""/>
                {books.map((book)=>(
                    <Link to={`/books/${book.number}`} key={book.number}>{book.name}{" "}</Link>
                ))
                    }
            </nav>
        </div>
    )
}

export  default Books;