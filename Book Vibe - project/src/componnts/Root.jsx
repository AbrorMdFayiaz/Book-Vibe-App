import { Link, NavLink, Outlet } from 'react-router';
// import { Bounce, ToastContainer } from 'react-toastify';

const Root = () => {


    return (
        <section className='container mx-auto pt-7'>
            <div className='flex justify-between pb-10'>
                <Link to="/"><section className='text-2xl font-bold'>Book Vibe</section></Link>
                <section className='space-x-2'>
                    <NavLink className={({ isActive }) =>
                                                            `${isActive ? "bg-success text-black" : ""} btn btn-outline btn-success `
                                                          } to="/">
                        <button className="">Home</button>
                    </NavLink>
                    <NavLink className={({ isActive }) =>
                                                            `${isActive ? "bg-success text-black" : ""} btn btn-outline btn-success `
                                                          } to="listed/books">
                        <button >Listed Books</button>
                    </NavLink>
                    <NavLink className={({ isActive }) =>
                                                            `${isActive ? "bg-success text-black" : ""} btn btn-outline btn-success `
                                                          } to="pages/to/read">
                        <button>Pages to Read</button>
                    </NavLink>
                </section>
                <section className='space-x-2'>
                    <button className="btn btn-active btn-info">Sign In</button>
                    <button className="btn btn-active btn-success">Sign Up</button>
                </section>
            </div>
            <Outlet/>
        </section>
    );
};

export default Root;