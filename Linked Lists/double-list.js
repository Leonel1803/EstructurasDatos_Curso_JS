class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null
    }
}
  
class MyDoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const newNode = new Node(value)

        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode

        this.length++;

        return this;
    }
    prepend(value){
        const newNode = new Node(value)

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode

        this.length++;

        return this;
    }
    insert(index, value){
        if (index >= this.length) { //Si el indice todavía nha sido alcanzado
            this.length++;
            return this.append(value);
        }

        let currentNode = this.head;
        for(let i = 0; i < this.length; i++){
            if(i == index - 1){
                const newNode = new Node(value);
                
                const furterNode = currentNode.next;
                currentNode.next = newNode;
                newNode.prev = currentNode
                newNode.next = furterNode;
                furterNode.prev = newNode

                this.length++;

                return this;
            }

            currentNode = currentNode.next;
        }

        return this;
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
    getAllNodesValuesReverse(){
        const nodesValuesList = [];
        let currentNode = this.tail;
        for(let i = this.length - 1; i >= 0; i--){
            nodesValuesList.push(currentNode.value);
            currentNode = currentNode.prev;
        }

        return nodesValuesList;
    }
}

const myLinkedList = new MyDoublyLinkedList(16);

myLinkedList.append(45);
myLinkedList.append(78);

console.log(myLinkedList.getAllNodesValues());

myLinkedList.prepend(8);
myLinkedList.prepend(19);

console.log(myLinkedList.getAllNodesValues());

myLinkedList.insert(2, 666);
myLinkedList.insert(4, 333);

console.log(myLinkedList.getAllNodesValues());
console.log(myLinkedList.getAllNodesValuesReverse());
