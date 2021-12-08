let a = 3;
let b = 2;
let c;
while (a !== 0) {
  c = b & a;
  b = b ^= a;
  a = c << 1;
}
console.log(b)