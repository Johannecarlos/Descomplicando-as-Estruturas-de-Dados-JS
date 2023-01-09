// O Conceito de Pilhas

class Pilha {
  constructor() {
    this.itens = [];
  }

  push(item) {
    this.itens.push(item);
  }

  pop() {
    this.itens.pop();
  }

  top() {
    return this.itens[this.itens.length - 1];
  }

  isEmpty() {
    return this.itens.length == 0;
  }
}

const pilha = new Pilha();
pilha.push(10);
pilha.push(20);
pilha.push(30);
pilha.push(40);

pilha.pop();
pilha.pop();
pilha.pop();
pilha.pop();
console.table(pilha.isEmpty()); //top, isEmpty

/*
A pilha é uma estrutura de dados que implementa o conceito de último a entrar, primeiro a sair (LIFO (Last in First Out)), ou seja, o último elemento adicionado será o primeiro elemento a ser removido.

As duas principais operações realizadas sobre uma pilha são as operações básicas push e pop. A operação push é executada para adicionar um elemento ao topo de uma pilha. A operação pop é executada para retirar um elemento do topo de uma pilha.
*/
