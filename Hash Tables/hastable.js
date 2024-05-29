class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) { //Itera los caracteres del string
      hash = (hash + key.charCodeAt(i) * i) % this.data.length; //Da un número de 0 a "size". El resultado depende de size y de las char's del string
    }
    return hash;
  }
  set(key, value) {
    const address = this.hashMethod(key); //Nos generará nuestro hash
    if (!this.data[address]) { //Si no existe un arreglo en esta dirección
      this.data[address] = []; //Se generá un nuevo array en el array de data en la posición de hash
    }
    this.data[address].push([key, value]); //Se inserta el key con su valor dentro del arreglo de address dentro del arreglo data. 
    //Si ya existía un arreglo anteriormente en address, entonces se creará un nuevo array en esa posción del array de data
    return this.data;
  }
  delete(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          const deletedItem = currentBucket.splice(i, 1).flat(); //Empezamos a eliminar desde el indice i y quitamos nada más 1 elemento
          if (currentBucket.length === 0) {
            delete this.data[address];
          }
          return deletedItem;
        }
      }
    }
    return undefined;
  }
  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address]; //Busca los arrays que está en la posición address
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) { //El array que tenga el key igual que el que mandamos por parámetro
          return currentBucket[i][1]; //Mandará el value de ese key
        }
      }
    }
    return undefined;
  }
  getAllKeys(){
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      const currentBucket = this.data[i];
      if (currentBucket) {
        for (let j = 0; j < currentBucket.length; j++) {
          keys.push(currentBucket[j][0])
        }
      }
    }
    
    return keys
  }
}
  
const myHashTable = new HashTable(50);

myHashTable.set("Diego", 1990);
myHashTable.set("Mariana", 1998); //Colisiona con el key de diego. Así que ese address ya tiene dos arrays
myHashTable.set("Alejandra", 2000);

console.log(myHashTable.getAllKeys());

console.log(myHashTable);
console.log(myHashTable.get("Diego"));

myHashTable.delete("Alejandra");
console.log(myHashTable.delete("Diego"));

console.log(myHashTable);
console.log(myHashTable.get("Mariana"));