import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {

    const { bookId } = useParams();

    const data = useLoaderData();

    const id = parseInt(bookId) ;
    
    const book = data.find(book => book.bookId === id)
    console.log(book);

    return (
        <div>
            <h1>Book details : {bookId}  </h1>
        </div>
    );
};

export default BookDetails;