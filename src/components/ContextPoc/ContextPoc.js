import { createContext, useState } from 'react';

const initialValues = {
  money: 0,
}

export const MoneyContext = createContext(initialValues);

export const MoneyProvider = ({ children }) => {
  const [money, setMoney] = useState(initialValues.money);

  const addMoney = () => {
    setMoney(money + 1);
  };
  const subtractMoney = () => {
    if (money > 0) {
      setMoney(money - 1);
    }
  };

  return (
    <MoneyContext.Provider value={{ money, addMoney, subtractMoney }}>
      {children}
    </MoneyContext.Provider>
  );
}
