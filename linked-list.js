class LinkedList {

    constructor(){
        this.head = null
        this.tail = null
    }

    append(value){

        const ele = { value, next:null }

        if(this.tail){
            this.tail.next = ele
        }

        this.tail = ele

        if(!this.head){
            this.head = ele
        }
    }

    prepend(value){

        const ele = { value, next:null }
        let lastHead =  null;

        if(this.head){
            lastHead = this.head
        }

        this.head = ele
        ele.next = lastHead

        if(!this.tail){
            this.tail = ele
        }
    }

    toArray(){

        const elements = []

        let current = this.head

        while(current){
            elements.push(current)
            current =  current.next
        }

        return elements
    }
}


const linkedList = new LinkedList()

linkedList.prepend(8)
linkedList.append(1)
linkedList.append(2)
linkedList.prepend(3)
linkedList.append(4)
linkedList.prepend(5)
const obj = linkedList.toArray()

console.log(obj)
console.log(obj[0].next === obj[1])
console.log(obj[0].next.next === obj[2])
console.log(obj[1].next === obj[2])
console.log(obj[3].next === obj[4])
console.log(obj[0].next.next.next.next.next === obj[5])
console.log(obj[1].next.next.next.next === obj[5])