class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class MyQueue {
    constructor(value){
        this.head = {
            value: value,
            next: null
        }

        this.tail = this.head;
        this.length = 1;
    }
    enqueue(value){
        const newNode = new Node(value);

        const forwardHead = this.tail;
        newNode.prev = previousHead;
        this.head = newNode

        this.length++;

        return this;
    }
    pop(){
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