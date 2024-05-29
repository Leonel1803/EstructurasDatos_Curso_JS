//Haciendo nuestra propia clase de array distinta a la de JS

class MyArray { //Funciona también con strings
    constructor() {
      this.length = 0; //Longitud de nuestro array
      this.data = {}; //Nuestro array (es un objeto)
    }
    get(index) { //Obtenemos el contenido del array según su índice
      return this.data[index];
    }
    push(item) {
      this.data[this.length] = item; //Guardamos el elemento en la última posición de nuestra array
      this.length++; //Aumentamos el valor de la longitud del arreglo por haber agregado otro elemento
      return this.data;
    }
    pop() {
      const lastItem = this.data[this.length - 1]; //Extraemos el último elemento para devolverlo
      delete this.data[this.length - 1]; //Eliminamos el elemento en la última posición de nuestra array
      this.length--; //Decrementamos el valor de la longitud del arreglo por haber eliminado el último elemento
      return lastItem;
    }
    delete(index) {
        const deletedItem = this.data[index]; //Extraemos el item a eliminar
        this.shiftIndex(index);
        return deletedItem
    }
    unshift(item){
        this.unshiftIndex(0);
        this.data[0] = item; //Insertamos el nuevo elemento al incio del array
        return this.length;
    }
    shift() {
        if(this.length !== 0){ //Si no está vacía ejecuta esto
            const firstItem = this.data[0];
            this.shiftIndex(0);
            return firstItem;
        }
        else{
            return undefined;
        }
    }
    unshiftIndex(index) {
        this.length++; //Aumentamos la longitud del arreglo

        for(let i = this.length - 1; i >= 0; i--){ //Recorremos todos los elementos un indice a la derecha
            this.data[i] = this.data[i - 1]
        }
    }
    shiftIndex(index){
        for(let i = index; i < this.length - 1; i++) { //Recorremos cada elemento una posición a la izquierda desde el indice que queremos borrar
            this.data[i] = this.data[i + 1]; //En la primera iteración ya se sobreesribiría el indice que queremos "eliminar"
        }

        delete this.data[this.length - 1] //Borramos el útlimo índice debido a que su valor ya se recorrió a un indice anterior
        this.length--; //Decrementamos su valor de longitud
    }
}
  
const myArray = new MyArray();

myArray.push("Juan")
myArray.push("Francisco")
myArray.push("Jeremías")
myArray.push("Dante")

console.log(myArray.data)
myArray.delete(2)

console.log(myArray.data)

myArray.unshift("Jorge")
console.log(myArray.data)

console.log(myArray.length)

myArray.shift()
console.log(myArray.data)
console.log(myArray.length)