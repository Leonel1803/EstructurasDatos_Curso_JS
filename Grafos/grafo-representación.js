/*
    2 - 0
   / \
  1 - 3
*/


//Representa todas las conexiones en el grafo

// Edge List
// const graph=[ ////Un array por cada conexión entre dos nodos, cono los dos nodos en la lista
//     [0,2], ////Conexión de nodo 0 con nodo 2
//     [2,3],
//     [2,1],
//     [1,3],
// ];


//Adjacent List
// const graph=[ ////Todas las conexiones que tiene cada nodo
//     [2], ////0
//     [2,3], ////1
//     [0,1,3], ////2
//     [1,2] /////3
// ];

const graph={ //Lo mismo pero como objeto y tipo hash table
    0:[2],
    1:[2,3],
    2:[0,1,3],
    3:[1,2],
};


//Adjacent matrix
// const graph=[ ////Si hay conexión se coloca 1, si no se coloca 0
//     [0,0,1,0], ////Cero está conectado con el nodo de 2
//     [0,0,1,1],
//     [1,1,0,1],
//     [0,1,1,0],
// ];

// const graph={
//     0:[0,0,1,0],
//     1:[0,0,1,1],
//     2:[1,1,0,1],
//     3:[0,1,1,0],
// };