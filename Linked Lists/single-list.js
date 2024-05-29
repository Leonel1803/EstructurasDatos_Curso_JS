//1-- > 2-- > 3-- > 4-- > 5-- > null;

let singlyLinkedList = { //Estructura visual
    head: {
      value: 1,
      next: { //El atributo "next" es la referencia al próximo nodo
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: null,
          },
        },
      },
    },
};
  
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
  
class MySinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const node = new Node(value);
        const lastNode = this.lastNode(this.head);
        lastNode.next = node;

        this.tail = node;
        this.length++;
    }
    prepend(value){
        const node = new Node(value);

        node.next = this.head 
        this.head = node 
        this.length++;
    }
    getAllNodesValues(){
        const nodesValuesList = [];
        let currentNode = this.head;
        for(let i = 0; i < this.length; i++){
            nodesValuesList.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return nodesValuesList;
    }
    lastNode(node) { //Busca el último nodo
        if (node.next === null) { //Si next no es null, significa que no es el último nodo
            return node; //Si fue null, significa que este nodo es el quese debe retornar
        }
        return this.lastNode(node.next); //Si llega aquí significa que no es null el nodo, así que lo que haremos es retornar lo que diga la próxima recursión que se va al siguiente nodo
    }
    lookup(index){
        let currentNode = this.head;
        for(let i = 0; i < this.length; i++){
            if(i == index){
                return currentNode.value
            }

            currentNode = currentNode.next;
        }

        return undefined;
    }
}
  
let myLinkedList = new MySinglyLinkedList(1);
myLinkedList.append(15);
myLinkedList.append(69);

console.log(myLinkedList);

myLinkedList.prepend(150);

console.log(myLinkedList);
console.log(myLinkedList.getAllNodesValues());
console.log(myLinkedList.lookup(2));