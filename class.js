class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "DM School"
    }
}

const student1 = new Student(11, "Kamal");
const student2 = new Student(12, "Jamal");
const student3 = new Student(13, "Rofiq");
// console.log(student1, student2);
// console.log(student3);

console.log(student3.name)