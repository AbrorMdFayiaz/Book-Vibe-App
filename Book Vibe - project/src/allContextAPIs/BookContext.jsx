import { createContext, useState } from 'react';
import { Bounce } from 'react-toastify';
import { toast  } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({children}) => {

    const [readList , setReadList]=useState([]);
    const [wishList , setWishList]=useState((JSON.parse(localStorage.getItem('wishList'))) || []);

    
    const handleItem = (item,status) =>{
        if (status == "read"){ 
            if(!readList.includes(item) && !wishList.includes(item) ){
                console.log("okkk");
                localStorage.setItem("readList",JSON.stringify( [ ...readList,item ] ));
                setReadList( JSON.parse(localStorage.getItem("readList")))
                toast.success(`${item.title} is successfully already added in Read List !`,{
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: Bounce,
});
            }
            else if (!readList.includes(item) && wishList.includes(item)) {


                localStorage.setItem("readList",JSON.stringify( [ ...readList,item ] ));
                setReadList( JSON.parse(localStorage.getItem("readList")))

                localStorage.setItem("wishList",JSON.stringify([...wishList.filter(element=>element!=item)]));
                setWishList( JSON.parse(localStorage.getItem("wishList")))
                toast.info(`${item.title} is removed from the Wish List and successfully already added in Read List !`,{
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: Bounce,
});
            }
            else{
                toast.error(`${item.title} is already added in Read List !`,{
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: Bounce,
});
            }
            return;
        }
        else if (status == "wish")
        { if(!wishList.includes(item) && !readList.includes(item)){
                console.log("okkkkkkk");
                localStorage.setItem("wishList",JSON.stringify([ ...wishList,item ]));
                setWishList( JSON.parse(localStorage.getItem("wishList")))
                toast.success(`${item.title} is successfully already added in Wish List !`,{
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: Bounce,
});
            }
            else{
                toast.error(`${item.title} is already added in ${readList.includes(item)?"Read":"Wish"} List !`,{
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: Bounce,
});
            }
            return; }
    }

    return (
        
        <BookContext.Provider value={{readList , setReadList,wishList , setWishList ,handleItem}}>
            {children}
        </BookContext.Provider> );
};

export default BookProvider;