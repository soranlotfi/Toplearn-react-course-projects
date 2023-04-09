import {getBooks} from "../data/data";
import {Link, Outlet} from "react-router-dom";
const Books = ()=>{
    const books = getBooks();
    return(
        <div style={{display:"flex"}}>
            <nav style={{borderLeft:"solid 1px black" , padding:"1rem" ,display:"flex",width:"50%",margin:"auto 0",flexDirection:"column"}}>
                <input type="text" placeholder="جستجو کتاب" name="" id=""/>
                {books.map((book)=>(
                    <Link to={`/books/${book.number}`} key={book.number}>{book.name}{" "}</Link>
                ))
                    }
            </nav>
            <Outlet/>
        </div>
    )
}

export  default Books;