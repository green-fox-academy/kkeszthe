import { Person } from "./Person";
import { Student } from "./Student";
import { Mentor } from "./Mentor";

export class Cohort {
    name: string;
    students: Student[] = [];
    mentors: Mentor[] = [];

    constructor (name: string){
        this.name = name;
        this.students = [];
        this.mentors = [];
    }

    addStudent(student: Student): Student[] {
       this.students.push(student);
       return this.students
    }
    //adds the given Student to students list
    addMentor(mentor: Mentor): Mentor[]{
        this.mentors.push(mentor);
        return this.mentors;
    }
    //adds the given Mentor to mentors list
    info(): void {
        console.log("The "
        + this.name
        + " cohort has "
        + this.students.length
        + " student and "
        + this.mentors.length
        + " mentors."
        )
    }
    //prints out 'The name cohort has students.size students and mentors.size mentors.'
}