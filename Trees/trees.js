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
    delete(value) {
        const deleteNode = this.deleteRec(this.head, value);
    }
    deleteRec(root, value) {
        if (root == null) {
            return root;
        }
        if (value < root.value) {
            root.left = this.deleteRec(root.left, value);
        } 
        else if (value > root.value) {
            root.right = this.deleteRec(root.right, value);
        } 
        else {
            if (root.left == null) {
                return root.right;
            } else if (root.right == null) {
                return root.left;
            }
    
            root.value = this.minValue(root.right);
    
            root.right = this.deleteRec(root.right, root.value);
        }
    
        return root;
    }
    minValue(node) {
        let current = node;

        while (current.left != null) {
            current = current.left;
        }
    
        return current.value;
    }
    search(value){
        const findedNode = this.searchNode(value, this.head);

        if(findedNode.value == value){
            return true;
        }

        return false;
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

tree.insert(9);

tree.printTree();

console.log(tree.search(10));