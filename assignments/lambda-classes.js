// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
        this.name = attributes.name,
        this.age = attributes.age,
        this.location = attributes.location,
        this.subject = attributes.subject
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person{
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty,
        this.favLanguage = attributes.favLanguage,
        this.catchPhrase = attributes.catchPhrase
    }
    demo(){
        return `Today we are learning about ${this.subject}`
    }
    grade(Student, Subject){
        return `${Student} receives a perfect score on ${Subject}`
    }
}

class Student extends Person{
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground,
        this.className = attributes.className,
        this.favSubjects = attributes.favSubjects
    }
    listsSubjects(){
        this.favSubjects.forEach(element => {console.log(element)})
    }
    PRAssignment(){
        return `${this.name} has submitted a PR for ${this.subject}`
    }
    sprintChallenge(){
        return `${this.name} has begun sprint challenge on ${this.subject}`
    }
}

class ProjectManager extends Instructor{
    constructor(attributes){
        super(attributes);
            this.gradClassName = attributes.gradClassName,
            this.favInstructor = attributes.favInstructor,
            this.channel = attributes.channel
    }
    standUp(){
        return `${this.name} announces to ${this.channel}, @channel standy times!​​​​​`
    }
    debugsCode(){
        return `${this.name} debugs ${Student.name}'s code on ${this.subject}`
    }
}

const sergio = new Person({
    name: 'Sergio',
    age: 20,
    location: 'USA',
    subject: 'Computer Science'
})

const leidy = new Person({
    name: 'Lediy',
    age: 17,
    location: 'USA',
    subject: 'Computer Science'
})

const brit = new Instructor({
    name: 'Brit',
    age: 26,
    location: 'Canada',
    subject: 'Math',
    specialty: 'CSS',
    favLanguage: 'JavaScript',
    catchPhrase: "Don't forget the homies"
})

const kevin = new Instructor({
    name: 'Kevin',
    age: 26,
    location: 'Africa',
    subject: 'English',
    specialty: 'Python',
    favLanguage: 'Ruby',
    catchPhrase: "Don't forget the food"
})

const jim = new Student({
    name: 'Jim',
    age: 29,
    location: 'Europe',
    subject: 'Biology',
    previousBackground: 'Construction',
    className: 'Web25',
    favSubjects: ['Html', 'CSS', 'JavaScript',]
})

const maritza = new Student({
    name: 'Maritza',
    age: 19,
    location: 'USA',
    subject: 'Biology',
    previousBackground: 'Retail',
    className: 'Web25',
    favSubjects: ['Html', 'CSS', 'JavaScript']
})

const tommy = new ProjectManager({
    name: 'Tommy',
    age: 37,
    location: 'USA',
    subject: 'JavaScript-I',
    specialty: 'CSS',
    favLanguage: 'HTML',
    catchPhrase: 'cereal is breakfast soup',
    gradClassName: 'CS1',
    favInstructor: 'Sean',
    channel: 'Web25'
})

const jerry = new ProjectManager({
    name: 'Jerry',
    age: 28,
    location: 'Asia',
    subject: 'JavaScript-II',
    specialty: 'Python',
    favLanguage: 'CSS',
    catchPhrase: `I don't have a catchphrase`,
    gradClassName: 'CS3',
    favInstructor: 'Sean',
    channel: 'Web24'
})

console.log(sergio.speak());
console.log(leidy.speak());

console.log(brit.demo());
console.log(brit.grade());
console.log(kevin.demo());
console.log(kevin.grade());

console.log(jim.listsSubjects());
console.log(jim.PRAssignment());
console.log(jim.sprintChallenge());
console.log(maritza.listsSubjects());
console.log(maritza.PRAssignment());
console.log(maritza.sprintChallenge());

console.log(tommy.standUp());
console.log(tommy.debugsCode());
console.log(jerry.standUp());
console.log(jerry.debugsCode());