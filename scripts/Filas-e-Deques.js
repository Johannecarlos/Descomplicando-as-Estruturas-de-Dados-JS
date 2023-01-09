/*
class Fila {
  constructor() {
    this.itens = [];
  }

  enqueue(item) {
    this.itens.push(item);
  }

  isEmpty() {
    return this.itens.length == 0;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;

    return this.itens.shift();
  }

  front() {
    return this.itens[0];
  }
  rear() {
    return this.itens[this.itens.length - 1];
  }
}

const fila = new Fila();
console.log(fila.isEmpty());
fila.enqueue('Ferrari');
fila.enqueue('Fusca');
fila.enqueue('Del Rey');
fila.enqueue('HB20');
fila.dequeue();
console.table(fila.itens);
console.log(fila.isEmpty());

console.log(fila.front());
console.log(fila.rear());
*/

class Deque {
  constructor() {
    this.itens = [];
  }

  insertFront(item) {
    this.itens.unshift(item);
  }
  insertLast(item) {
    return this.itens.push(item);
  }
  deleteFront() {
    if (this.isEmpty()) return undefined;
    return this.itens.shift();
  }
  deleteLast() {
    if (this.isEmpty()) return undefined;
    return this.itens.pop();
  }
  isEmpty() {
    return this.itens.length == 0;
  }
  front() {
    return this.itens[0];
  }
  rear() {
    return this.itens[this.itens.length - 1];
  }
}

const deque = new Deque();
deque.insertFront('Ferrari');
deque.insertFront('Fusca');
deque.insertFront('Del Rey');

console.table(deque.itens);
