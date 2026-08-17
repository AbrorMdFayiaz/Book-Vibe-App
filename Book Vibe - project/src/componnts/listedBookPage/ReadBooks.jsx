import BookCard from '../BookCard';

const ReadBooks = ({sortedReadList}) => {

    // const {readList} = useContext(BookContext)
    return (
        <div>
            <section className='grid grid-cols-3 gap-3.5'>
                {
                    sortedReadList.map((item)=> <BookCard item={item} ></BookCard>)
                }
            </section>
        </div>
    );
};

export default ReadBooks;