import { FC } from 'react';
import personImg from '../images/icon-person.svg';
import { BsCurrencyPound } from 'react-icons/bs';
import { FormProps } from '../interfaces/FormProps';

const Form: FC<FormProps> = ({
  billAmountHandler,
  tipAmountHandler,
  peopleNumHandler,
  isBillValid,
  isTipValid,
  isPeopleNumValid,
  bill,
  tipAmount,
  peopleNum,
}) => {
  return (
    <form className='flex flex-col gap-7 laptopsm:justify-around laptopsm:gap-0 laptopsm:px-2'>
      <div className='flex flex-col gap-2'>
        <label htmlFor='bill' className='text-darkGrayCyan'>
          Bill
        </label>
        <div className='relative '>
          <BsCurrencyPound className='absolute top-1/2 -translate-y-1/2 left-5 text-gray-500 ' />
          <input
            type='text'
            id='bill'
            className={`bg-vLightGrayCyan w-full py-3 text-right pl-12 pr-3 text-veryDarkCyan rounded-md text-2xl focus:outline-none focus:ring
           ${isBillValid ? 'focus:ring-strongCyan' : 'focus:ring-redColor'} `}
            pattern='^[1-9][\.\d]*(,\d+)?$'
            placeholder='0'
            value={bill}
            onChange={billAmountHandler}
          />
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <h3 className='text-darkGrayCyan'>Select Tip %</h3>
        <div className='grid grid-cols-2 grid-rows-3 gap-4 text-2xl laptopsm:grid-cols-3 laptopsm:grid-rows-2 '>
          <div className='relative rounded-md py-2 '>
            <input
              type='radio'
              id='five'
              name='selectTip'
              value='5'
              className='invisible opacity-0 peer/five'
              onChange={tipAmountHandler}
              checked={tipAmount === '5'}
            />
            <label
              htmlFor='five'
              className='absolute inset-0 text-white text-center cursor-pointer bg-veryDarkCyan peer-checked/five:bg-strongCyan peer-checked/five:text-veryDarkCyan grid place-items-center rounded-md
              hover:bg-hoverColor hover:text-veryDarkCyan transition ease-linear '
            >
              <span>5%</span>
            </label>
          </div>
          <div className='relative bg-veryDarkCyan rounded-md'>
            <input
              type='radio'
              id='ten'
              name='selectTip'
              value='10'
              className=' invisible opacity-0 peer/ten'
              onChange={tipAmountHandler}
              checked={tipAmount === '10'}
            />
            <label
              htmlFor='ten'
              className='absolute inset-0 text-white text-center cursor-pointer bg-veryDarkCyan peer-checked/ten:bg-strongCyan peer-checked/ten:text-veryDarkCyan grid place-items-center rounded-md
              hover:bg-hoverColor hover:text-veryDarkCyan transition ease-linear '
            >
              <span>10%</span>
            </label>
          </div>
          <div className='relative bg-veryDarkCyan rounded-md'>
            <input
              type='radio'
              id='fifteen'
              name='selectTip'
              value='15'
              className=' invisible opacity-0 peer/fifteen'
              onChange={tipAmountHandler}
              checked={tipAmount === '15'}
            />
            <label
              htmlFor='fifteen'
              className='absolute inset-0 text-white text-center cursor-pointer bg-veryDarkCyan peer-checked/fifteen:bg-strongCyan peer-checked/fifteen:text-veryDarkCyan grid place-items-center rounded-md
              hover:bg-hoverColor hover:text-veryDarkCyan transition ease-linear '
            >
              <span>15%</span>
            </label>
          </div>
          <div className='relative bg-veryDarkCyan rounded-md'>
            <input
              type='radio'
              id='twentyFive'
              name='selectTip'
              value='25'
              className=' invisible opacity-0 peer/twentyFive'
              onChange={tipAmountHandler}
              checked={tipAmount === '25'}
            />
            <label
              htmlFor='twentyFive'
              className='absolute inset-0 text-white text-center cursor-pointer bg-veryDarkCyan peer-checked/twentyFive:bg-strongCyan peer-checked/twentyFive:text-veryDarkCyan grid place-items-center rounded-md
              hover:bg-hoverColor hover:text-veryDarkCyan transition ease-linear '
            >
              <span>25%</span>
            </label>
          </div>
          <div className='relative bg-veryDarkCyan rounded-md'>
            <input
              type='radio'
              id='fifty'
              name='selectTip'
              value='50'
              className='invisible opacity-0 peer/fifty'
              onChange={tipAmountHandler}
              checked={tipAmount === '50'}
            />
            <label
              htmlFor='fifty'
              className='absolute inset-0 text-white text-center cursor-pointer bg-veryDarkCyan peer-checked/fifty:bg-strongCyan peer-checked/fifty:text-veryDarkCyan grid place-items-center rounded-md
              hover:bg-hoverColor hover:text-veryDarkCyan transition ease-linear '
            >
              <span>50%</span>
            </label>
          </div>

          <input
            type='text'
            className={`bg-vLightGrayCyan w-full text-right pr-3 rounded-md placeholder:text-darkGrayCyan focus:outline-none focus:ring ${
              isTipValid ? 'focus:ring-strongCyan ' : 'focus:ring-redColor '
            }`}
            placeholder='Custom'
            id='customValue'
            inputMode='numeric'
            pattern='^[1-9]\d*$'
            value={tipAmount}
            onChange={tipAmountHandler}
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
            type='text'
            id='people'
            className={`bg-vLightGrayCyan w-full py-3 text-right pl-12 pr-3 rounded-md text-veryDarkCyan text-2xl focus:outline-none focus:ring
           ${
             isPeopleNumValid ? 'focus:ring-strongCyan' : 'focus:ring-redColor'
           }`}
            inputMode='numeric'
            pattern='^[1-9]\d*$'
            placeholder='0'
            value={peopleNum}
            onChange={peopleNumHandler}
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
