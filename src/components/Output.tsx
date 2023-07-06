import { FC } from 'react';
import { OutputProps } from '../interfaces/Output';

const Output: FC<OutputProps> = ({
  bill,
  tipAmount,
  peopleNum,
  setBill,
  setTipAmount,
  setPeopleNum,
}) => {
  ////////
  const tipAmountPerPerson: number = (+bill * +tipAmount) / 100 / +peopleNum;
  const totalAmountPerPerson: number = +bill / +peopleNum + tipAmountPerPerson;
  const totalperPesonNoTip: number = +bill / +peopleNum;
  ////////
  const resetAll = () => {
    setBill('');
    setTipAmount('');
    setPeopleNum('');
  };

  return (
    <div className='bg-veryDarkCyan rounded-xl flex flex-col gap-7 px-5 pt-10 pb-6'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col'>
          <p className='text-vLightGrayCyan'>Total</p>
          <p className='text-vLightGrayCyan'>( Without tips )</p>
          <p className='text-grayCyan text-sm'>/ person </p>
        </div>
        <p className='text-3xl text-strongCyan'>
          £
          {bill && tipAmount && peopleNum
            ? totalperPesonNoTip.toFixed(2)
            : '0.00'}
        </p>
      </div>
      <hr />
      <div className='flex justify-between items-center'>
        <div className='flex flex-col'>
          <p className='text-vLightGrayCyan'>Tip Amount</p>
          <p className='text-grayCyan text-sm'>/ person</p>
        </div>
        <p className='text-3xl text-strongCyan'>
          {/* bill/tipAmount/peopleNum initially an empty string which is a falsy, false&&false&&false=false only if true&&true&&true=true */}
          £
          {bill && tipAmount && peopleNum
            ? tipAmountPerPerson.toFixed(2)
            : '0.00'}
        </p>
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col'>
          <p className='text-vLightGrayCyan'>Total</p>
          <p className='text-grayCyan text-sm'>/ person</p>
        </div>
        <p className='text-3xl text-strongCyan'>
          £
          {bill && tipAmount && peopleNum
            ? totalAmountPerPerson.toFixed(2)
            : '0.00'}
        </p>
      </div>

      <button
        className='w-full bg-strongCyan text-veryDarkCyan py-2.5 uppercase rounded-lg font-bold text-[1.3rem]  hover:bg-hoverColor transition ease-linear'
        type='button'
        onClick={resetAll}
      >
        Reset
      </button>
    </div>
  );
};

export default Output;
