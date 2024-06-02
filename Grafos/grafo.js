class Graph{
    constructor(){
        this.nodes=0; //Numero de nodos
        this.adjacentList={}; //Lista de los nodos
    }
    addVertex(node){ //Hacemos un nuevo nodo
        this.adjacentList[node]=[];
        this.nodes++;
    }
    addEdge(node1, node2){ //Hacemos conexiones entre dos nodos
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
}

const myGraph=new Graph();

//Creamos los nodos
myGraph.addVertex('1');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addVertex('8');

//Conectamos los nodos
myGraph.addEdge('1', '6');
myGraph.addEdge('1', '3');
myGraph.addEdge('1', '4');
myGraph.addEdge('6', '3');
myGraph.addEdge('5', '3');
myGraph.addEdge('5', '4');
myGraph.addEdge('8', '4');

console.log(myGraph);