function linkedList() {
  this.length = 0;
  this.head = null;
}
linkedList.prototype.node = function(element) {
  this.element = element;
  this.next = null;
};
linkedList.prototype.append = function(element) {
  var tail = this.head;
  this.length += 1;
  // head is null
  if (!tail) {
    this.head = new this.node(element);
    return;
  }
  // head is not null => find tail
  while (tail.next) {
    tail = tail.next;
  }
  tail.next = new this.node(element);
};
linkedList.prototype.insert = function(position, element) {};
linkedList.prototype.removeAt = function(position) {};
linkedList.prototype.remove = function(element) {};
linkedList.prototype.indexOf = function(element) {};
linkedList.prototype.isEmpty = function() {};
linkedList.prototype.size = function() {};
linkedList.prototype.toString = function() {};
linkedList.prototype.print = function() {};
