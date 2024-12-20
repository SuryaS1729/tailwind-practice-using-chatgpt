import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default function App() {
  const [isModalOpen, setModalOpen] = React.useState(false);

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setModalOpen(true)}
      >
        Open Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Modal Title</h2>
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  );
}
// {/* 
// <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-red-600">
//   <img
//     className="w-full p-2"
//     src="https://plus.unsplash.com/premium_photo-1730828574113-201e3352bea6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     alt="Example"
//   />
//   <div className="p-4">
//     <h2 className="text-xl font-bold mb-2">Card Title</h2>
//     <p className="text-gray-300">This is a card description.</p>
//     <button className="bg-red-800 hover:bg-black text-white px-4 py-2 rounded mt-4">
//       Learn More
//     </button>
//   </div>
// </div> */}

// {/* <div className="bg-blue-500 text-white">No Margin or Padding</div>
// <div className="bg-blue-500 text-white p-4">With Padding</div>
// <div className="bg-blue-500 text-white m-4 p-4">With Margin</div>
//     */}
    
//    {/* <div className="flex flex-col justify-between p-4 bg-gray-200">
//   <div className="bg-red-500 text-white p-4">Item 1</div>
//   <div className="bg-green-500 text-white p-4">Item 2</div>
//   <div className="bg-blue-500 text-white p-4">Item 3</div>
// </div> */}
// {/* 
// <div className="flex justify-center items-center h-64 bg-gray-300">
//   <div className="bg-blue-500 text-white p-4">Centered Item</div>
//   <div className="bg-blue-500 text-white p-4">Centered Item</div>
// </div> */}


// {/* //grids

// <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//   <div className="bg-red-500 p-4">Item 1</div>
//   <div className="bg-green-500 p-4">Item 2</div>
//   <div className="bg-blue-500 p-4">Item 3</div>
// </div> */}

   

  



