class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class MyQueue {
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null
        }

        this.tail = this.head;
        this.length = 1;
    }
    enqueue(value){
        const newNode = new Node(value);

        const lastNode = this.tail;
        lastNode.prev = newNode;
        newNode.next = lastNode
        this.tail = newNode;

        this.length++;

        return this;
    }
    dequeue(){
        const previousNode = this.head.prev;
        const deleteValue = this.head.value;
        delete this.head;

        this.head = previousNode;

        this.length--;

        return deleteValue;
    }
    peek(){
        return this.head.value;
    }
    getAllNodesValues(){
        const nodesValuesList = [];
        let currentNode = this.head;
        for(let i = this.length - 1; i >= 0; i--){
            nodesValuesList.push(currentNode.value);
            currentNode = currentNode.prev;
        }

        return nodesValuesList;
    }
}

const myQueue = new MyQueue(35);

myQueue.enqueue(56);
myQueue.enqueue(23);

console.log(myQueue.getAllNodesValues());

myQueue.dequeue();

console.log(myQueue.getAllNodesValues());

console.log(myQueue.peek());