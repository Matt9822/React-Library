import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../componants/ui/Rating";
import Price from "../componants/ui/Price";
import Book from "../componants/ui/Book";

export default function BookInfo({ books, addToCart, cart }) {
  const { id } = useParams();

  //the + converts both book.id and id to a number becouse they need to be the same value and
  //type when you use ===
  const book = books.find((book) => +book.id === +id);

  function addBookToCart(book) {
    addToCart(book);
  }

  function bookInCart() {
    return cart.find(book => book.id === +id)
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price
                    salePrice={book.salePrice}
                    originalPrice={book.originalPrice}
                  />
                </div>
                <div className="book__summary">
                  <div className="book__summary--title">Summary</div>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Officia praesentium ex ratione? Accusantium, provident
                    ducimus, natus molestias distinctio perspiciatis vero iure
                    dignissimos, a voluptas corrupti dolor maxime assumenda non
                    qui.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Officia praesentium ex ratione? Accusantium, provident
                    ducimus, natus molestias distinctio perspiciatis vero iure
                    dignissimos, a voluptas corrupti dolor maxime assumenda non
                    qui.
                  </p>
                </div>

                {/*
                  onClick={() => addToCart(book)} The reson we need 
                  to make the "onClick function" a call back function is so
                  it wont be called on start up like it would be if it looked like this
                  onClick={addToCart(book)} but if you do not need to pass any
                  parameters through it you dont need the () e.g. onClick={addToCart} 
                  and it will only be called on click
                */}
                {bookInCart() ? (
                  <Link to={`/cart`} className="book__link">
                  <button className="btn">View Cart</button>
                  </Link>
                ) : (
                  <button className="btn" onClick={() => addBookToCart(book)}>
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && +book.id !== +id)
                .slice(0, 4)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
