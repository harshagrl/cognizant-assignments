import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('book');
  const [showCourse, setShowCourse] = useState(false);

  // Method 1: Using if-else conditional rendering
  const renderIfElse = () => {
    if (activeTab === 'book') {
      return <BookDetails />;
    } else if (activeTab === 'blog') {
      return <BlogDetails />;
    } else {
      return null;
    }
  };

  // Method 4: Using switch case conditional rendering
  const renderSwitch = (param) => {
    switch(param) {
      case 'book':
        return <BookDetails />;
      case 'blog':
        return <BlogDetails />;
      default:
        return <div>Please select an option</div>;
    }
  };

  return (
    <div className="App" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
      <h1>Blogger App - Conditional Rendering</h1>
      
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <button onClick={() => setActiveTab('book')} style={{ padding: '8px 16px' }}>Select Book</button>
        <button onClick={() => setActiveTab('blog')} style={{ padding: '8px 16px' }}>Select Blog</button>
        <button onClick={() => setShowCourse(!showCourse)} style={{ padding: '8px 16px' }}>Toggle Course Display</button>
      </div>

      <hr />

      <h2>1. Using if-else condition</h2>
      {renderIfElse()}

      <hr />

      <h2>2. Using Ternary Operator (? :)</h2>
      {activeTab === 'book' ? <BookDetails /> : <BlogDetails />}

      <hr />

      <h2>3. Using Logical && Operator</h2>
      {showCourse && <CourseDetails />}
      {!showCourse && <p style={{ color: 'gray', fontStyle: 'italic' }}>Course details are currently hidden.</p>}

      <hr />

      <h2>4. Using Switch Statement</h2>
      {renderSwitch(activeTab)}

    </div>
  );
}

export default App;
