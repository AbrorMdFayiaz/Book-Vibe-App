import BookCard from "../BookCard";


const WishBooks = ({sortedWishList}) => {
    // const {wishList} = useContext(BookContext)
    return (
        <div>
            <section>
                {
                    sortedWishList.map((item)=> <BookCard item={item} ></BookCard>)
                }
            </section>
        </div>
    );
};

export default WishBooks;