// import { MyDatabaseClassic } from "./db/my-database-classic";

// export const myDatabaseClassic = MyDatabaseClassic.instance;

import { myDatabaseFunction } from "./db/my-database-function";

myDatabaseFunction.add({ name: "Fulano2", age: 35 });
myDatabaseFunction.add({ name: "Sicrano2", age: 20 });
myDatabaseFunction.add({ name: "Beltrano2", age: 50 });

export { myDatabaseFunction };
