export default class FizzBuzz {
  generate = (start, end) => {
    let retArray = [];
    for (let i = start; i <= end; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        retArray.push("FizzBuzz");
      } else if (i % 3 === 0) {
        retArray.push("Fizz");
      } else if (i % 5 === 0) {
        retArray.push("Buzz");
      } else {
        retArray.push(i);
      }
    }
    return retArray;
  };
}
