/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    if(s==null){
            return false;
        }
        if(t==null){
            return true;
        }
        if(isSameTree(s,t)){
            return true;
        }else{
            return isSubtree(s.left,t)||isSubtree(s.right,t);
        }
    }
    const isSameTree = (a, b) =>{
        if(a==null&&b==null){
            return true;
        }
         if(a==null||b==null){
            return false;
        }
        
        if(a.val==b.val){
            return isSameTree(a.left,b.left)&&isSameTree(a.right,b.right);
        }else{
            return false;
        }
        
        
    }
    