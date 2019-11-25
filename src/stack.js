function stack() {
  this.s = [];
}
stack.prototype.push = function (element) {
  this.s.push(element);
}
stack.prototype.isEmpty = function () {
  return !this.s.length;
}
stack.prototype.pop = function () {
  if (!this.isEmpty()) {
    return this.s.pop();
  }
  return undefined;
}
stack.prototype.peak = function () {
  if (!this.isEmpty()) {
    return this.s[this.s.length - 1];
  }
  return undefined;
}
stack.prototype.clear = function () {
  this.s.length = 0;
}
stack.prototype.size = function () {
  return this.s.length;
}