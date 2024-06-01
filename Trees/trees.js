class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class MyTree {
    constructor(value){
        this.head = {
            value: value,
            left: null,
            right: null
        }
    }
    insert(value) {
        const lastNode = this.searchNode(value, this.head);
        if (lastNode.value != value) {
            const newNode = new Node(value);
            if (lastNode.value > value) {
                lastNode.left = newNode;
            } 
            else if (lastNode.value < value) {
                lastNode.right = newNode;
            }
        }
    }
    delete(value){
        const nodeDelete = this.searchNode(value, this.head);

        const lastNode = this.moveNodes(nodeDelete.right.value, nodeDelete);

        lastNode = null;
    }
    moveNodes(value, currentNode){
        if (currentNode.value > value) {
            if (currentNode.left != null) {
                currentNode.value = currentNode.left.value;
                return this.moveNodes(value, currentNode.left);
            } 
            else {
                return currentNode;
            }
        } 
        else if (currentNode.value < value) {
            if (currentNode.right != null) {
                currentNode.value = currentNode.right.value;
                return this.moveNodes(value, currentNode.left);
            } 
            else {
                return currentNode = null;
            }
        } 
        else {
            return currentNode; // El valor ya existe en el árbol
        }
    }
    searchNode(value, currentNode) {
        if (currentNode.value > value) {
            if (currentNode.left != null) {
                return this.searchNode(value, currentNode.left);
            } 
            else {
                return currentNode;
            }
        } 
        else if (currentNode.value < value) {
            if (currentNode.right != null) {
                return this.searchNode(value, currentNode.right);
            } 
            else {
                return currentNode;
            }
        } 
        else {
            return currentNode; // El valor ya existe en el árbol
        }
    }
    printTree() {
        if (this.head == null) {
            return;
        }
        const levelOrderTraversal = (root) => {
            let result = "";
            const queue = [root];
            while (queue.length > 0) {
                let levelSize = queue.length;
                while (levelSize > 0) {
                    let node = queue.shift();
                    result += node ? node.value + " " : "N ";
                    if (node) {
                        queue.push(node.left);
                        queue.push(node.right);
                    }
                    levelSize--;
                }
                result += "\n";
            }
            return result;
        };
        console.log(levelOrderTraversal(this.head));
    }
}

const tree = new MyTree(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

tree.printTree();

tree.delete(5);

tree.printTree();