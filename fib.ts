function fib() {
  let arr = [];

  for (let i = 0; i < 70; i++) {
    if (i === 0) {
      arr.push(i)
    } else if (i === 1) {
      arr.push(i)
    } else {
      let s = i - 1;
      arr.push(arr[s - 1] + arr[s])
    }
  }
  return arr;
}

console.log(fib());