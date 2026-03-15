// import { MyDatabaseClassic } from "./db/my-database-classic";
import { myDatabaseFunction as myDatabaseModule2 } from "./module_b";

// const myDatabaseClassic = MyDatabaseClassic.instance;

import { myDatabaseFunction } from "./db/my-database-function";

myDatabaseFunction.add({ name: "Fulano", age: 30 });
myDatabaseFunction.add({ name: "Sicrano", age: 25 });
myDatabaseFunction.add({ name: "Beltrano", age: 40 });

myDatabaseFunction.show();

console.log(myDatabaseFunction === myDatabaseModule2);
