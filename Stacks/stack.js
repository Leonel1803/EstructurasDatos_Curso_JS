class Node {
    constructor(value){
        this.value = value;
        this.prev = null;
    }
}

class MyStack {
    constructor(value){
        this.head = {
            value: value,
            prev: null
        }

        this.length = 1;
    }
    append(value){
        const newNode = new Node(value);

        const previousHead = this.head;
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

myStack = new MyStack(77);

myStack.append(50);
myStack.append(69);
myStack.append(100);

console.log(myStack.getAllNodesValues());

myStack.pop()

console.log(myStack.getAllNodesValues());
console.log(myStack.peek());