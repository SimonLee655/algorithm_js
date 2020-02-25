function priorityQueue () {
  this.q = [];
}
priorityQueue.prototype.queueElement = function (element, priority) {
  this.element = element;
  this.priority = priority;
}
priorityQueue.prototype.enqueue = function (element, priority) {
  let qe = new this.queueElement(element, priority);
  let added = false;
  for (let index = 0; index < this.q.length; index++) {
    if (qe.priority < this.q[index].priority) {
      this.q.splice(index, 0, qe);
      added = true;
      break;
    }
  }
  if (!added) {
    this.q.push(qe);
  }
}
priorityQueue.prototype.isEmpty = function () {
  return !this.q.length;
}
priorityQueue.prototype.dequeue = function () {
  if (!this.isEmpty()) {
    let e = this.q.shift();
    return e.element;
  }
  return undefined;
}
priorityQueue.prototype.front = function () {
  if (!this.isEmpty()) {
    return this.q[0].element;
  }
  return undefined;
}
priorityQueue.prototype.size = function () {
  return this.q.length;
}
priorityQueue.prototype.print = function () {
  this.q.forEach((e) => {
    console.log(`element: ${e.element}, priority: ${e.priority}`);
  })
}
module.exports = priorityQueue;