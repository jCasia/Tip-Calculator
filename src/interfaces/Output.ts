import { Dispatch, SetStateAction } from 'react';

export interface OutputProps {
  setBill: Dispatch<SetStateAction<string>>;
  setTipAmount: Dispatch<SetStateAction<string>>;
  setPeopleNum: Dispatch<SetStateAction<string>>;
  bill: string;
  tipAmount: string;
  peopleNum: string;
}
