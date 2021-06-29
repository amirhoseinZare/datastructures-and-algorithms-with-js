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
