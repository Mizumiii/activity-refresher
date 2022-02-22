import { Student } from "./Student";
import { StudentList } from "./StudentList";

const student1 = new Student(
    "2015-105867",
    "BSCPE",
    "CEIT",
    "Carla",
    20,
    "MALE",
    "PASAY CITY"
);

const student2 = new Student(
    "2015-105868",
    "BSCPE",
    "CEIT",
    "Kurama",
    20,
    "MALE",
    "PASAY CITY"
);

const student3 = new Student(
    "2015-105869",
    "BSCPE",
    "CEIT",
    "Tuks",
    20,
    "MALE",
    "PASAY CITY"
);

const studentList = new StudentList([
    student1,
    student2,
    student3
]);


//console.log(studentList.getStudents());
// console.log("*************");
// console.log(studentList.updateStudentName("2015-105869", "Michael Jordan"));
// console.log("*************");
//console.log(studentList.updateAge("2015-105869", 30));
// console.log(studentList.checkStudentId("2015-105870"));
 console.log(studentList.updateCollege("2015-105869", "College of Business" ));
 console.log(studentList.updateCourse("2015-105869", "BSCIT" ));
 console.log(studentList.updateAddress("2015-105869", "Cainta Rizal" ));
console.log(studentList.getStudents());



