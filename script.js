
// MinHeap class


function calculateMinCost() {
  //your code here
	let text = document.getElementById("rope-lengths").value.trim();
	let result = document.getElementById("result");
	let arr = text.split(",").map(x=> parseInt(x.trim()))
	// arr = arr.map(Number);
	// result.innerHTML = 1
	let ans = 0;
	 if (arr.length <= 1) {
	    result.innerText = ans
		// return;
	  }
	  const pq = new MinHeap();
	  for (let i = 0; i < arr.length; i++) {
		pq.insert(arr[i]);
	  }
	  while (!pq.isEmpty()) {
		const first = pq.extractMin();
		const second = pq.extractMin();
		const temp = first + second;
		ans += temp;
		if (!pq.isEmpty()) {
		  pq.insert(temp);
		}
	  }
	result.innerText = ans
}  
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if (this.heap[currentIndex] < this.heap[parentIndex]) {
        [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  extractMin() {
    if (this.heap.length === 0) {
      return null;
    }

    const minValue = this.heap[0];
    const lastValue = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = lastValue;
      this.heapify(0);
    }

    return minValue;
  }

  heapify(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let smallestIndex = index;

    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
      smallestIndex = leftChildIndex;
    }

    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
      smallestIndex = rightChildIndex;
    }

    if (smallestIndex !== index) {
      [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
      this.heapify(smallestIndex);
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}
