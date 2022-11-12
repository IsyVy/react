import React, { useState } from 'react';
import Navbar from '../Nav'
import Sidebar from '../Sidebar';
import {
  QuoContainer,
  QuoContent,
  QuoItems,
  QuoH1,
  QuoP,
  QuoBtn
} from './QuoElements';

const Quote = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <QuoContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <QuoContent>
        <QuoItems>
          <QuoH1>The food at your doorstep</QuoH1>
          <QuoP>Good food within minutes</QuoP>
          <QuoBtn>Order Hear</QuoBtn>
        </QuoItems>
      </QuoContent>
    </QuoContainer>
  );
};

export default Quote;
