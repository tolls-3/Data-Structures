
class ListNode {
    constructor(value, prev = null, next = null) {
        this.value = value;
        this.prev = prev;
        this.next = next
    }

    insert_after(value) {
        current_next = this.next
        this.next = ListNode(value, this, current_next)
        if (current_next) {
            current_next.prev = self.next
        }
    }
}

class DoublyLinkedList {
    constructor(node = null) {
        this.head = node
        this.tail = node
        this.length = node !== 1 ? 1 : 0
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
    add_to_head(value) {
        if (this.head === null && this.tail === null) {
            var new_node = new ListNode(value)
            this.head = new_node
            // this.tail = null
            this.length += 1
        }
        else{
            var new_node = new ListNode(value)
            new_node.next = this.head
            this.head.prev = new_node
            this.head = new_node
            this.length += 1
        }

    }
}

var newDll = new DoublyLinkedList()
//var newNode = new ListNode(1)
//newDll.head = newNode
// newDll.add_to_head(2)
console.log(newDll.add_to_head(1))
console.log(newDll.add_to_head(2))

console.log(newDll.print_list())

