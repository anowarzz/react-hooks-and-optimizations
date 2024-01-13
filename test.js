const wrapperFunction = (func) => {
  return (num) => {
    return func(num) * 2;
  };
};

const addOne = (num) => {
  return num + 1;
};

console.log('1', addOne(4));

const addOneAndDouble = wrapperFunction(addOne);

console.log(addOneAndDouble(6));

console.log('2', addOne(7));