import React, { useState } from 'react';
import dollarImg from '../images/icon-dollar.svg';
import personImg from '../images/icon-person.svg';

const Form: React.FC = () => {
  const [tipValue, setTipValue] = useState('');
  const [bill, setBill] = useState('');

  interface valueHandler {
    (e: React.ChangeEvent<HTMLInputElement>): void;
  }

  const billHandler: valueHandler = (e) => {
    setBill(e.target.value);
  };

  const tipValueHandler: valueHandler = (e) => {
    setTipValue(e.target.value);
  };
  const customTipValueHandler: valueHandler = (e) => {
    setTipValue(e.target.value);
  };

  return (
    <form className='flex flex-col gap-7'>
      {/* <p>{tipValue}</p> */}
      {/* <p>{bill}</p> */}
      <div className='flex flex-col gap-2'>
        <label htmlFor='bill' className='text-darkGrayCyan'>
          Bill
        </label>
        <div className='relative '>
          <img
            src={dollarImg}
            alt='dollar'
            className='absolute top-1/2 -translate-y-1/2 left-5'
          />
          <input
            type='number'
            id='bill'
            className='bg-vLightGrayCyan w-full py-3 text-right pl-12 pr-3 text-veryDarkCyan text-2xl'
            inputMode='numeric'
            placeholder='0'
            value={bill}
            onChange={billHandler}
          />
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <h3 className='text-darkGrayCyan'>Select Tip %</h3>
        <div className='grid grid-cols-2 grid-rows-3 gap-4 text-2xl '>
          <div className='relative bg-veryDarkCyan rounded-md py-2'>
            <label
              htmlFor='five'
              className='absolute inset-1.5 text-white text-center cursor-pointer '
            >
              5%
            </label>

            <input
              type='radio'
              id='five'
              name='selectTip'
              value='5'
              onChange={tipValueHandler}
              className='invisible opacity-0  '
            />
          </div>
          <div className='relative bg-veryDarkCyan rounded-md'>
            <label
              htmlFor='ten'
              className='absolute inset-1.5 text-white text-center cursor-pointer'
            >
              10%
            </label>
            <input
              type='radio'
              id='ten'
              name='selectTip'
              value='10'
              onChange={tipValueHandler}
              className=' invisible opacity-0'
            />
          </div>
          <div className='relative bg-veryDarkCyan rounded-md'>
            <label
              htmlFor='fifteen'
              className='absolute inset-1.5 text-white text-center cursor-pointer'
            >
              15%
            </label>
            <input
              type='radio'
              id='fifteen'
              name='selectTip'
              value='15'
              onChange={tipValueHandler}
              className=' invisible opacity-0'
            />
          </div>
          <div className='relative bg-veryDarkCyan rounded-md'>
            <label
              htmlFor='twentyFive'
              className='absolute inset-1.5 text-white text-center cursor-pointer'
            >
              25%
            </label>
            <input
              type='radio'
              id='twentyFive'
              name='selectTip'
              value='25'
              onChange={tipValueHandler}
              className=' invisible opacity-0'
            />
          </div>
          <div className='relative bg-veryDarkCyan rounded-md'>
            <label
              htmlFor='fifty'
              className='absolute inset-1.5 text-white text-center cursor-pointer'
            >
              50%
            </label>
            <input
              type='radio'
              id='fifty'
              name='selectTip'
              value='50'
              onChange={tipValueHandler}
              className=' invisible opacity-0'
            />
          </div>

          <input
            type='number'
            className='bg-vLightGrayCyan w-full text-right pr-3 rounded-md'
            placeholder='Custom'
            id='customValue'
            onChange={customTipValueHandler}
            inputMode='numeric'
          />
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='people' className='text-darkGrayCyan'>
          Number of people
        </label>
        <div className='relative'>
          <img
            src={personImg}
            alt='person'
            className='absolute top-1/2 -translate-y-1/2 left-5'
          />
          <input
            type='number'
            id='people'
            className='bg-vLightGrayCyan w-full py-3 pl-12 pr-3 text-right text-veryDarkCyan text-2xl'
            inputMode='numeric'
            placeholder='0'
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
