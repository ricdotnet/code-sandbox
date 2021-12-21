import {Urbn} from "urbn";
const u = new Urbn();

async function run() {
  // let one = await u.getFirst('rich')
  // console.log(one);
  //
  // console.log(`
  //
  //
  //
  //
  // `)

  // let all = await u.getAll('test')
  // console.log(all)

  // console.log(`
  //
  //
  //
  //
  // `)
  //
  let random = await u.getRandom('rich');
  console.log(random)
}

run();