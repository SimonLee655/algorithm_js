const priorityQueue = require('../src/priorityQueue');

test('aaa', () => {
  let pq = new priorityQueue();
  pq.enqueue('e', 3);
  pq.enqueue('b', 1);
  pq.enqueue('c', 2);
  pq.enqueue('d', 3);
  pq.enqueue('a', 1);
  pq.enqueue('f', 1);
  console.log(pq);
})