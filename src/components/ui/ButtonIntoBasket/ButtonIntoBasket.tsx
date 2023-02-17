import * as React from 'react';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';


type RenderBasket = (
  state: [ number, React.Dispatch<React.SetStateAction<number>> ],
) => JSX.Element;

const renderCounter: RenderBasket = (amountState) => {
  const [ amount, setAmount ] = amountState;

   return (
     <ButtonGroup type="secondary">
       <Button
         onClick={() => setAmount((prevState) => prevState - 1)}
       >
         -
       </Button>
       <Button>
         {amount}
       </Button>
       <Button
         onClick={() => setAmount((prevState) => prevState + 1)}
       >
         +
       </Button>
     </ButtonGroup>
   );
};

const renderButton: RenderBasket = ([ , setAmount ]) => (
  <Button
    type="secondary"
    onClick={() => setAmount((prevState) => prevState + 1)}
  >
    В корзину
  </Button>
);

const ButtonIntoBasket: React.FC = () => {
  const stateAmount = React.useState<number>(2);
  const [ amount ] = stateAmount;
  const content = amount === 0
    ? renderButton(stateAmount)
    : renderCounter(stateAmount);

  return (
    <>
      {content}
    </>
  );
};

export default ButtonIntoBasket;
