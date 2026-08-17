import { NavLink, Outlet } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBooks from "./listedBookPage/ReadBooks";
import WishBooks from "./listedBookPage/WishBooks";
import { useContext, useEffect, useState } from "react";
import { BookContext } from "../allContextAPIs/BookContext";

const ListedBooks = () => {

  const {readList,wishList } = useContext (BookContext);
  const [sort , setSort]=useState();
  const [sortedReadList,setSortedReadList] = useState((JSON.parse(localStorage.getItem('readList'))) || []);
  const [sortedWishList,setSortedWishList] = useState([...wishList]);

  useEffect(()=>{

    if (sort=="rating") {
      setSortedReadList (((JSON.parse(localStorage.getItem('readList'))) || []).sort((a,b)=>a.rating-b.rating));
      setSortedWishList ([...wishList].sort((a,b)=>a.rating-b.rating));
    }
    else if (sort=="pages"){
      setSortedReadList (((JSON.parse(localStorage.getItem('readList'))) || []).sort((a,b)=>a.pages-b.pages));
      setSortedWishList ( [...wishList].sort((a,b)=>a.pages-b.pages));
    }    
  },[sort,readList,wishList])



  // const [readListFromLocal ,setReadListFromLocal ]=useState([...sortedReadList]);
  // let [wishListFromLocal , setWishListFromLocal]=useState([...sortedWishList]);
// for local storage
  // useEffect(()=>{
  //  setReadListFromLocal (JSON.parse(localStorage.getItem("readList")));
  //  setWishListFromLocal (JSON.parse(localStorage.getItem("wishList")));
  // },[sortedReadList,sortedWishList])



  // setReadListFromLocal (JSON.parse(localStorage.getItem("readList")));
  // setWishListFromLocal (JSON.parse(localStorage.getItem("wishList")));
  
    return (
        <div className="text-3xl">
            <NavLink className={({ isActive }) =>
                                                            `${isActive ? "bg-success text-black" : ""} btn btn-outline btn-success `
                                                          } to="/listed/books">
                        <button className="">Read Books</button>
                    </NavLink>
            <NavLink className={({ isActive }) =>
                                                            `${isActive ? "bg-success text-black" : ""} btn btn-outline btn-success `
                                                          } to="./wishlist/books">
                        <button className="">Wishlist Books</button>
                    </NavLink>
            <h1 className="text-center p-8 font-bold">Books</h1>

            {/* drop down for sorting */}


            <section className="flex p-8">
              <div className="mx-auto dropdown dropdown-start ">
              <div tabIndex={0} role="button" className="btn m-1 text-base bg-base-300">Sort By ⬇️</div>
              <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li onClick={()=>setSort("rating")}><button>rating</button></li>
                <li onClick={()=>setSort("pages")}><button>pages</button></li>
              </ul>
            </div>
            </section>

            {/* tabs here */}

  <Tabs>
    <TabList>
      <Tab><h1 className="text-2xl text-success font-bold">Read Books</h1></Tab>
      <Tab><h1 className="text-2xl text-info font-bold">Wishlist Books</h1></Tab>
    </TabList>

    <TabPanel>
      <h2><ReadBooks sortedReadList={sortedReadList}  /></h2>
    </TabPanel>
    <TabPanel>
      <h2><WishBooks sortedWishList={sortedWishList} /></h2>
    </TabPanel>
  </Tabs>

            <Outlet></Outlet>


        </div>
    );
};

export default ListedBooks;