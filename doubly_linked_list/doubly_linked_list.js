
class ListNode {
    constructor(value, prev = null, next = null) {
        this.value = value
        this.prev = prev
        this.next = next
    }
}

class DoublyLinkedList {
    constructor(node = null) {
        this.head = node;
        this.tail = node
        //this.length = node !== 1 ? 1 : 0
    }

    length() {
        return this.length
    }

    print_list() {
        if (this.head === null && this.tail === null) {
            return 'empty'
        }
        else {
            var curr_node = this.head
            var output = ''
            output = `${curr_node.value}<=>`
            while (curr_node.next !== null) {
                curr_node = this.head
                output += `${curr_node.value}<=>`
            }
            return output
        }
    }
    insert(value) {
        let new_node = new ListNode(value)

        // this.head = new_node
        // this.tail = new_node
        //this.length += 1
        new_node.next = this.head
        new_node.prev = null

        if (this.head !== null) {
            this.head.prev = new_node
            //this.length += 1
        }
        this.head = new_node

    }
}

var newDll = new DoublyLinkedList()
var newNode = new ListNode(1)
newDll.head = newNode
// newDll.insert(2)
//newDll.insert(1)
newDll.insert(2)

console.log(newDll.print_list())

