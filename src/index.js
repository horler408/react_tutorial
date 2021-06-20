import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

// const title = 'I love you to the Moon and Back';
// const img ='https://www.amazon.com/Last-Thing-He-Told-Me/dp/1501171348/ref=zg_bs_books_3?_encoding=UTF8&psc=1&refRID=3EGGGSPAXRH67MG5EBQZ';

const firstBook = {
  title: 'The President Daughter',
  img: 'https://images-na.ssl-images-amazon.com/images/I/71bGKnfgZtL._AC_UL200_SR200,200_.jpg',
  author: 'James Perterson',
};

const secondBook = {
  title: 'Hail Mary',
  img: 'https://images-na.ssl-images-amazon.com/images/I/91Bd7P8UwxL._AC_UL200_SR200,200_.jpg',
  author: 'Andy Weir',
};

const thirdBook = {
  title: 'I love you to the Moon and Back',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
  author: 'Amelia Hepworth',
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Greeting = () => {
  return React.createElement('h1', {}, 'hello world');
};

const Book = ({ img, author, title }) => {
  // console.log(props);
  // const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="The banner of the book" />
      <h1> {title} </h1>;
      <h4
        style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}
      >
        {author}
      </h4>
    </article>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>,
  document.getElementById('root')
);
