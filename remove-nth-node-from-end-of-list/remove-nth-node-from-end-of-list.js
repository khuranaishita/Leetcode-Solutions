/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(head==null){
            return head;
        }
    
        let prev =null, curr = head, temp=head;
        for(let i=0;i<n;i++){
            if(temp==null){
                return null;
            }
            temp=temp.next;
       
        }
        while(temp!=null){
            prev=curr;
            curr=curr.next;
            temp=temp.next;
        }
     
        if(prev!=null){
            prev.next = curr.next;
            return head;
        }else{
            return head.next;
        }
    } 
