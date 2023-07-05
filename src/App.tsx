import React, { useState } from 'react';
import Form from './components/Form';
import Output from './components/Output';
import logo from './images/logo.svg';

const App: React.FC = () => {
  const [tipAmount, setTipAmount] = useState('');
  const [total, setTotal] = useState('');

  return (
    <main className=' w-full min-h-screen font-spaceMono bg-lightGrayCyan'>
      <div>
        <div>
          <img src={logo} alt='logo' className='mx-auto py-10' />
        </div>
        <div className='flex flex-col gap-8 p-8 bg-white rounded-t-3xl'>
          <Form />
          <Output />
        </div>
      </div>
    </main>
  );
};

export default App;
