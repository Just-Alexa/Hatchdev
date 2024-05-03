/* console.log("Someone will be evicted today!!") 

function getStudentNames() {
    return["Ade","Lola","Bola","Tola"]
}

function getTotalNumberOfStudents() {
    const studentNames = getStudentNames()
    return studentNames.length;
} */
//You can remove the comments it will output Someone will be evicted today!!!

// class HatchDevclass {
//   private pupils: string[];

//   constructor(student: string[]) {
//     this.pupils = student;
//   }

//   getStudentNames() {
//     return this.pupils;
//   }

//   getNumberOfStudents() {
//     return ["Ade", "Lola", "Bola", "Tola"];
//   }

//   getTotalNumberOfStudents() {
//     // const studentNames = this.getStudentNames();
//     // return studentNames.length;
//     return this.pupils.length;
//   }

// }

// const excelSheet = ["Ade", "Lola", "Bola", "Tola"];
// const HC = new HatchDevclass(excelSheet);
// console.log(HC);
// // console.log(HC[""]);
// console.log(HC.getNumberOfStudents());

// const chl = ['arsenal','bayern','real-madrid','man-city']
// const disPeople: string[] = []

// //Declarative way of doing programming
// chl.filter((club:string) => {
//     if (club == "arsenal" || club == "man-city") {
//         disPeople.push(club)
//     }
// })

// //Imparative way of doing programming
// for(let i = 0; i < chl.length; i++) {
//     const club = chl[i];
//     if(club == "arsenal" || club == "man-city") {
//         disPeople.push(club)
//     }
// }

// console.log(disPeople)

// Understanding Instance property
// class car {
//   constructor(brand: string) {
//     //or use public readonly brand: string
//     this.brand = brand;
//   }
//   brand: string;
//   public move() {}
// }
