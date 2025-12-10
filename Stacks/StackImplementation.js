class Stack {
  constructor(myArray) {
    this.myArray = myArray;
  }

  push(element) {
    return this.myArray.push(element);
  }

  pop() {
    return this.myArray.pop();
  }
  size() {
    return this.myArray.length;
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is Empty";
    }
    return this.myArray[this.myArray.length - 1];
  }

  isEmpty() {
    return this.myArray.length === 0;
  }

  print() {
    console.log(this.myArray);
  }
}

const stacking = new Stack([]);

stacking.push("A");
stacking.push("B");
console.log(stacking.peek());
stacking.pop();
stacking.push("D");
console.log(stacking.peek());
console.log(stacking.size());
console.log(stacking.isEmpty());
stacking.pop();
stacking.pop();
console.log(stacking.isEmpty());
stacking.push("A");
stacking.push("B");
stacking.push("A");
stacking.push("B");
stacking.push("A");
stacking.push("B");
stacking.push("A");
stacking.push("B");

stacking.print();
