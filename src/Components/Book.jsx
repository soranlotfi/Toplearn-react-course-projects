import {useParams} from "react-router-dom";
// import books from "./books";
import {getBook} from "../data/data";

const Book = ()=>{
    const params = useParams()
    console.log(params.bookId)
    const book = getBook(parseInt(params.bookId))
    return(
        <main style={{padding:"1rem"}}>
            <h2>قیمت : {`${book.amount} تومان`}</h2>
            <p>
                نام کتاب : {" "}{book.name}
            </p>
            <p>تاریخ انتشار: {book.due}</p>
            <button>حذف کتاب</button>
        </main>
    )
}
export default Book;