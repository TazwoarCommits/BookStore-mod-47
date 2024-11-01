

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
                <div className="flex space-x-8 ">
                    {
                        tags.map((tag, idx) => <button key={idx} className="btn btn-xs bg-green-100 text-emerald-900 font-bold">{tag}</button>)
                    }
                </div>
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>By : {author}</p>
                <div className="border-t border-dashed"></div>
                <div className="card-actions justify-between mt-4">

                    <div className="badge badge-outline">{category}</div>
                    <div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;