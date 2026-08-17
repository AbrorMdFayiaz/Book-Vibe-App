import { useContext } from 'react';
import { useLoaderData,  } from 'react-router';
import { BookContext } from '../allContextAPIs/BookContext';
import BookCard from './BookCard';

const IndividualBookDetails = () => {
    const data = useLoaderData();
    const individualBookData = data.individualBook;


    const {handleItem}= useContext(BookContext);

    // console.log("Context value :" ,readList , setReadList,wishList , setWishList);
    // console.log("loader :" ,  data);
    // console.log("individualBookData :" ,  individualBookData);
    // console.log("readList :" ,  readList);
    // console.log("wishList :" ,  wishList);
    return (
        <div>
            <BookCard item={individualBookData} />
            <button onClick={()=>handleItem(individualBookData,"read")} className="btn btn-outline">Add to read</button>
            <button onClick={()=>handleItem(individualBookData,"wish")} className="btn btn-active btn-info">Add to wishlist</button>
        </div>
    );
};

export default IndividualBookDetails;