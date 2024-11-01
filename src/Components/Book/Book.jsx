

const Book = ({ book }) => {
    console.log(book)
    const { image, bookName, author, rating, category, tags, } = book;
    return (
        <div className="border card bg-base-100 w-96 shadow-xl p-6 rounded-2xl mb-8">
            <figure className="bg-slate-200 py-8">
                <img className="h-40 w-32"
                    src={image}
                    alt={bookName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>By : {author}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    ); 
};

export default Book;