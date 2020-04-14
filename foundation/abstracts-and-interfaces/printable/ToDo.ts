import { Printable } from './IPrintable'

export class ToDo implements Printable{
    task: string
    priority: string
    done: boolean

    constructor(task: string, priority: string, done: boolean){
        this.task = task
        this.priority = priority
        this.done = done
    }

    printAllFiles(): string {
        return `Task: ${this.task} | Priority: ${this.priority} | Done: ${this.done}`
    }

}