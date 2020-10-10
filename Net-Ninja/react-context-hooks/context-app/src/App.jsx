import React from 'react';
import Navbar from './components/Navbar';
import Booklist from './components/BookList';
import ThemeToggle from './components/ThemeToggle';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <ThemeContextProvider>
          <Navbar />
            <BookContextProvider>
              <Booklist />
            </BookContextProvider>
          <ThemeToggle />
      </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
