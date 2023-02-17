import * as React from 'react';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import styles from './ButtonIntoBasket.module.css';


interface Props {
  onChangeAmount?: (value: number) => void;
}

type RenderAmountButton = (
  props: Props,
  state: [ number, React.Dispatch<React.SetStateAction<number>> ],
) => void;

type RenderBasketButton = (
  state: [ number, React.Dispatch<React.SetStateAction<number>> ],
) => JSX.Element;

const renderCounter: RenderAmountButton = (props, amountState) => {
  const { onChangeAmount } = props;
  const [ amount, setAmount ] = amountState;

   return (
     <ButtonGroup
       type="secondary"
       className={styles.basketButton}
     >
       <Button
         onClick={() => setAmount((prevState) => {
           onChangeAmount && onChangeAmount(prevState - 1);

           return prevState - 1;
         })}
       >
         -
       </Button>
       <Button className={styles.valueButton}>
         {amount}
       </Button>
       <Button
         onClick={() => setAmount((prevState) => {
           onChangeAmount && onChangeAmount(prevState + 1);

           return prevState + 1;
         })}
       >
         +
       </Button>
     </ButtonGroup>
   );
};

const renderButton: RenderBasketButton = ([ , setAmount]) => (
  <Button
    type="secondary"
    className={styles.basketButton}
    onClick={() => setAmount((prevState) => prevState + 1)}
  >
    В корзину
  </Button>
);

const ButtonIntoBasket: React.FC<Props> = (props) => {
  const stateAmount = React.useState<number>(2);
  const [ amount ] = stateAmount;
  const content = amount === 0
    ? renderButton(stateAmount)
    : renderCounter(props, stateAmount);

  return (
    <>
      {content}
    </>
  );
};

export default ButtonIntoBasket;
