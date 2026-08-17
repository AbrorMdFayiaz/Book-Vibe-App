import BookCard from "./BookCard";
import booksData from "../assets/booksData.json";
import { Link } from "react-router";

const BooksMenu = () => {

    console.log(booksData);
    return (
        <div >
            <h1 className="text-center text-2xl py-5 font-bold">Books</h1>
            <section className="grid grid-cols-3 gap-3.5">
                {booksData.map((item)=>(
                    <Link to={`/individualBookDetails/${item.id}`}>
                        <BookCard item={item} ></BookCard>
                    </Link>
                ) )}
            </section>
        </div>
    );
};

export default BooksMenu;