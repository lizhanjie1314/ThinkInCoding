/*
    双向链表
    节点类    Node
    链表类    LList
    方法:
        (1).添加insert(element, target) 同时要有一个find(target)
        (2).删除remove(element) 同时要有一个找到前节点的findPre(element)
*/

//节点类
function Node(element) {
    this.element = element;
    //前驱
    this.pre = null;
    //后继
    this.next = null;
}

//双向链表类
function LList() {
    this.head = new Node('head');
}
LList.prototype.find = function(target) {
    var curNode = this.head;
    while(curNode.element != target && curNode.next != null) {
        curNode = curNode.next;
    }
    return curNode;
}
LList.prototype.insert = function(newElement,target) {
    var newNode = new Node(newElement);
    var curNode = this.find(target);
    newNode.next = curNode.next;
    newNode.pre = curNode;
    //指定原来后继节点的前驱节点，《数据结构与算法JavaScript描述》中应该出现错误。
    if(curNode.next != null) {
        curNode.next.pre = newNode;
    }
    curNode.next = newNode;
}
LList.prototype.remove = function(target) {
    var curNode = this.find(target);
    while(curNode.next != null) {
        curNode.pre.next = curNode.next;
        curNode.next.pre = curNode.pre;
        curNode.next = null;
        curNode.pre = null;
    }
}
var list = new LList();
list.insert('1','head');
list.insert('2','1');
list.insert('3','2');
console.log(list);
