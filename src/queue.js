function queue () {
  this.q = [];
}
queue.prototype.isEmpty = function () {
  return !this.q.length;
}
queue.prototype.enqueue = function (element) {
  this.q.push(element)
}
queue.prototype.dequeue = function () {
  if (!this.isEmpty()) {
    return this.q.shift();
  }
  return undefined;
}
queue.prototype.front = function () {
  if (!this.isEmpty()) {
    return this.q[0];
  }
  return undefined;
}
queue.prototype.size = function () {
  return this.q.length;
}
module.exports = queue;