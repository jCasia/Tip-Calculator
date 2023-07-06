import { useState, FC } from 'react';
import Form from './components/Form';
import Output from './components/Output';
import logo from './images/logo.svg';

const App: FC = () => {
  const [bill, setBill] = useState('');
  const [isBillValid, setIsBillValid] = useState(true);
  const [tipAmount, setTipAmount] = useState('');
  const [isTipValid, setIsTipValid] = useState(true);
  const [peopleNum, setPeopleNum] = useState('');
  const [isPeopleNumValid, setIsPeopleNumValid] = useState(true);

  const billAmountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // only valid for regex pattern on input attribute
    if (e.target.validity.valid) {
      setIsBillValid(true);
      setBill(e.target.value);
    } else {
      setIsBillValid(false);
    }
  };

  const tipAmountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.validity.valid) {
      setIsTipValid(true);
      setTipAmount(e.target.value);
    } else {
      setIsTipValid(false);
    }
  };

  const peopleNumHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.validity.valid) {
      setIsPeopleNumValid(true);
      setPeopleNum(e.target.value);
    } else {
      setIsPeopleNumValid(false);
    }
  };

  return (
    <main className=' w-full min-h-screen font-spaceMono bg-lightGrayCyan'>
      <div>
        <div>
          <img src={logo} alt='logo' className='mx-auto py-10' />
        </div>
        <div className='flex flex-col gap-8 p-8 bg-white rounded-t-3xl'>
          <Form
            billAmountHandler={billAmountHandler}
            tipAmountHandler={tipAmountHandler}
            peopleNumHandler={peopleNumHandler}
            isBillValid={isBillValid}
            isTipValid={isTipValid}
            isPeopleNumValid={isPeopleNumValid}
            bill={bill}
            tipAmount={tipAmount}
            peopleNum={peopleNum}
          />
          <Output
            bill={bill}
            tipAmount={tipAmount}
            peopleNum={peopleNum}
            setBill={setBill}
            setTipAmount={setTipAmount}
            setPeopleNum={setPeopleNum}
          />
        </div>
      </div>
    </main>
  );
};

export default App;
