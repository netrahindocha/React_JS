// import ui from './module2.mjs'
// console.log(ui);

// Even if we use dz or dza instead of ui, we will get the same ouput
// import dz from './module2.mjs'
// console.log(dz);

// In order to import all of them
import dza, {a, b, c} from './module2.mjs'
console.log(dza);
console.log(a);
console.log(b);
console.log(c);

// If we rename the names which are not default, then it will cause error

