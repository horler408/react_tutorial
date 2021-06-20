import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Greeting = () => {
  return React.createElement('h1', {}, 'hello world');
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => <img src="" alt="The banner of the book" />;
const Title = () => <h1> I love you to the moon and back</h1>;
const Author = () => (
  <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>
    Yusuf Olaitan
  </h4>
);

ReactDOM.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>,
  document.getElementById('root')
);
