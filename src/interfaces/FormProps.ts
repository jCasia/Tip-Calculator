export interface FormProps {
  billAmountHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  tipAmountHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  peopleNumHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isBillValid: boolean;
  isTipValid: boolean;
  isPeopleNumValid: boolean;
  bill: string;
  tipAmount: string;
  peopleNum: string;
}
