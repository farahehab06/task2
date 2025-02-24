
let students = [];
function createstudents (name, age , mark) {
     return { name : name , age : age , mark : mark};
}

students.push(createstudents("farah" , 18,80));
students.push(createstudents("aya" , 18,90));
students.push(createstudents("sara" ,18,80));
students.push(createstudents("jood" ,18,90));
students.push(createstudents("meera" ,18,80));



let successstudents =[];
let failedstudents =[];

for (let i=0; i< students.length ; i++){
    if(students [i].mark>=50){
        successstudents.push(students[i]);
    } else {
        failedstudents.push(students[i]);
    }
}

console.log("success students",successstudents);
console.log("failed students",failedstudents);