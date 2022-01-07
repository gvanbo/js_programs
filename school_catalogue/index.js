class School {
    constructor(name, level, numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name(){
        return this._name;
    }

    get level(){
        return this._level
    }

    get numberOfStudents(){
        return this._numberOfStudents
    }

    set numberOfStudents(num){
        this._numberOfStudents = num;
        console.log(`Number of students is now set to : ${this.numberOfStudents}`)
    }

    quickFacts(){
        console.log(`School: ${this.name} \nLevel: ${this.level}\nNumber of Students: ${this.numberOfStudents}`)
    }

    static pickSubstituteTeacher(){
        const substituteTeachers = ['Mrs A', 'Mr B', 'Mrs C', 'Mr D', 'Mrs E', 'Mr F']
        const chosenTeacher = substituteTeachers[Math.floor(Math.random * substituteTeachers.length)];
        console.log(`Sub teacher is: ${chosenTeacher}`)
        return chosenTeacher;
    }
}

class Primary extends School{
    constructor(props, pickupPolicy){
        super(props)
        this._pickupPolicy = pickupPolicy;
    }

    

}