/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode(-1);
    let head = dummy;
    
    while(l1!== null && l2!== null){
        if(l1.val<= l2.val){
            dummy.next = new ListNode(l1.val);
            l1 = l1.next;
        }else{
            dummy.next = new ListNode(l2.val);
            l2 = l2.next;
        }
            
        dummy = dummy.next;
    }
    while(l1!= null){
        dummy.next = new ListNode(l1.val);
        l1 = l1.next;
        dummy = dummy.next;
    }
    while(l2!= null){
        dummy.next = new ListNode(l2.val);
        l2 = l2.next;
        dummy = dummy.next;
    }
    return head.next
};