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
    <div className='bg-veryDarkCyan rounded-xl flex flex-col gap-7 px-5 pt-10 pb-6 tabletmd:px-8 laptopsm:py-10'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col tabletmd:text-sm'>
          <p className='text-vLightGrayCyan'>Total</p>
          <p className='text-vLightGrayCyan'>Without Tips</p>
          <p className='text-grayCyan text-sm'>/ person </p>
        </div>
        <p className='text-3xl text-strongCyan laptopsm:text-4xl'>
          £
          {bill && tipAmount && peopleNum
            ? totalperPesonNoTip.toFixed(2)
            : '0.00'}
        </p>
      </div>
      <hr />
      <div className='flex justify-between items-center'>
        <div className='flex flex-col tabletmd:text-sm'>
          <p className='text-vLightGrayCyan'>Tip Amount</p>
          <p className='text-grayCyan text-sm'>/ person</p>
        </div>
        <p className='text-3xl text-strongCyan laptopsm:text-4xl'>
          {/* bill/tipAmount/peopleNum initially an empty string which is a falsy, false&&false&&false=false only if true&&true&&true=true */}
          £
          {bill && tipAmount && peopleNum
            ? tipAmountPerPerson.toFixed(2)
            : '0.00'}
        </p>
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col tabletmd:text-sm'>
          <p className='text-vLightGrayCyan'>Total</p>
          <p className='text-grayCyan text-sm'>/ person</p>
        </div>
        <p className='text-3xl text-strongCyan laptopsm:text-4xl'>
          £
          {bill && tipAmount && peopleNum
            ? totalAmountPerPerson.toFixed(2)
            : '0.00'}
        </p>
      </div>

      <button
        className='w-full bg-strongCyan text-veryDarkCyan py-2.5 uppercase rounded-md font-bold text-[1.3rem] cursor-pointer hover:bg-hoverColor transition ease-linear tabletmd:mt-20 laptopsm:mt-14 laptopsm:text-lg
         disabled:text-disabledText disabled:bg-disabledColor disabled:pointer-events-none'
        type='button'
        // initial true/true/true disabled=true. any of them change disabled=false
        disabled={!bill && !tipAmount && !peopleNum}
        onClick={resetAll}
      >
        Reset
      </button>
    </div>
  );
};

export default Output;
