import "./index.css";
import Nav from "./componants/Nav";
import Footer from "./componants/Footer";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import React, { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  /**
   * This is a boolean a boolean value is one that can either be TRUE or FALSE.
   * If you need to know “yes” or “no” about something, then you would want to
   * use the boolean function.
   */
  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }
  
  /**
   * function changeQuantity(book, quantity) {
    setCart(cart.map(item => {
      if (item.id === book.id) {
        return {
          ...item,
          quantity: quantity
        }
       }
       else {
        return item
       }
    }))
  }
  * The below if statement is the same as the above if statement but much cleaner
  * and better practice
   */
  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) =>
        item.id === book.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item
      )
    );
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          render={() => (
            <BookInfo cart={cart} books={books} addToCart={addToCart} />
          )}
        />
        <Route
          path="/cart"
          render={() => (
            <Cart books={books} cart={cart} changeQuantity={changeQuantity} />
          )}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
