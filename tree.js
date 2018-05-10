function BionarySearchTree(){
    var Node = function(key){
        this.key = key;
        this.left = null;
        this.right = null;
    };
    var root = null;
    // insert
    this.insert = function(key){
        var newNode = new Node(key);
        if(root === null){
            root = newNode;
            return;
        }
        insertNode(root, newNode);
    }
    // private insertNode function
    var insertNode = function(node, newNode){
        if(newNode.key < node.key){
            if(node.left === null)
                node.left = newNode;
            else
                insertNode(node.left, newNode);
        } else {
            if(node.right === null)
                node.right = newNode;
            else
                insertNode(node.right, newNode);
        }
    }
}