import { FaRegStar } from "react-icons/fa";

const BookCard = ({item}) => {
    // console.log(item);
    return (
        <div className="pt-7">
            <div className="card  shadow-sm bg-base-300">
              <figure className="rounded-3xl">
                <img className="p-6 w-50 h-64 rounded-2xl"
                  src={item.image}
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <section className="space-x-3">
                    <div className="badge badge-secondary">{item.tags[0]}</div>
                    <div className="badge badge-secondary">{item.tags[1]}</div>
                </section>
                <h2 className="card-title">
                  {item.title}
                </h2>
                <p className="pb-4 border-b-2 border-dashed ">By : {item.author}</p>
                <div className="card-actions justify-end pt-3">
                  <p>{item.category}</p>
                  <p className="flex gap-2">{item.rating} <FaRegStar className=" my-auto  " /> </p>

                </div>
              </div>
            </div>
        </div>
    );
};

export default BookCard;