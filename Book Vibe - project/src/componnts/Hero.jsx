const Hero = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
              <div className="hero-content flex-row-reverse">
                <img
                  alt="Tailwind CSS hero component"
                  src="https://covers.openlibrary.org/b/isbn/9780439554930-M.jpg"
                  className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className="space-y-8">
                  <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                  <button className="btn btn-success">View The List</button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Hero;