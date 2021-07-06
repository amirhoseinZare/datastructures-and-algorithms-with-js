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

    delete(value){

        while(this.head && this.head.value===value){
            this.head = this.head.next
        }

        if(!this.head){
            return -1
        }

        let current = this.head;
        while(current.next){
            if(current.next.value === value){
                current.next = current.next.next
            } else{
                current = current.next
            }
        }

        if(this.tail.value === value){
            this.tail = current
        }

    }

    find(value){
        let current = this.head
        if(!this.head){
            return -1
        }
        while(current){
            if(current.value === value){
                return current
            }
            current = current.next
        }
        return -1
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

    insertAfter(value, nextValue){
        const foundEle = this.find(value)
        if(foundEle===-1)
            return false
        const nextEle = foundEle.next
        foundEle.next = { value:nextValue, next:nextEle }
        return true
    }

    insertBefore(value, beforeValue) {
        const foundEle = this.find(value)
        if(foundEle===-1)
            return false
        const element = { value:beforeValue, next:null }
        if(this.head.value === value){
            element.next = this.head
            this.head = element
            return true
        }
        let current = this.head
        while(current){
            if(current.next.value === value){
                const lastNext = current.next
                current.next = element
                current.next.next = lastNext
                return true
            }
            current = current.next
        }
    }
}


const linkedList = new LinkedList()

linkedList.append(9)
linkedList.append(10)
linkedList.append(7)

const obj = linkedList.toArray()

// console.log(obj)
// console.log(obj[0].next === obj[1])
// console.log(obj[0].next.next === obj[2])
// console.log(obj[1].next === obj[2])
// console.log(obj[3].next === obj[4])
// console.log(obj[0].next.next.next.next.next === obj[5])
// console.log(obj[1].next.next.next.next === obj[5])

console.log(linkedList.toArray())
// linkedList.delete(10)
console.log(linkedList.toArray())
console.log(linkedList.find(11))
console.log(linkedList.insertAfter(9, 15))
console.log(linkedList.toArray())
linkedList.insertBefore(10, 1)
console.log(linkedList.toArray())
// 9 15 1 10 7