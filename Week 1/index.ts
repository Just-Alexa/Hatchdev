//sylvester-Divine's definition
class Human {
    hasHands: boolean;
    hasHead: boolean;
    hasLegs: boolean;
    hasBrain: boolean;
    canReason: boolean;

//David's definition
    name: string;
}

class Car {
    name: string;
    model: string;
    productionYear: Date;
    hasFourTyres: boolean;
}

class Account {
    balance: number;
    name: string;
    currency: string;
}

class Studnet {
    matricNo: string;
    faculty: string;
    department: string;
}
class Art {
    colors: Array<string> = ["orange", "indigo"];
}


const monalisa = new Art();
monalisa.colors = ['red', 'blue', 'green'];

const vangogh = new Art()
vangogh.colors = ["pink", "orange", "purple"]

console.log("Vangogh", vangogh)
console.log("monalisa",monalisa)