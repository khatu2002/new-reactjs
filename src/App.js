import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Thay đổi import

import MenuBar from './components/header';
import ContactForm from './components/ContactForm';
import SliderComponent from './components/Slider';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <MenuBar />
        <Routes> {/* Thay đổi từ <Switch> thành <Routes> */}
          <Route path="/contact" element={<ContactForm />} /> {/* Thay đổi cách định nghĩa Route */}
          {/* Các đường dẫn khác ở đây */ <Route path="/" element={<SliderComponent />} />
          }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
