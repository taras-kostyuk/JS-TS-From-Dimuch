import {CourseType} from "./04";

test("should take old men older then 90", () => {
 const ages = [18,20,22,1,100,90,14]




 const oldAges = ages.filter( age => age > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)

})


test ("Should take chipper courses then 160 ", ( ) => {
    const course  = [
        {title:"CSS",price:110},
        {title:"JS",price:200},
        {title:"REACT",price:150}]



    const chipCourse = course.filter(course => course.price < 160)

    expect(chipCourse.length).toBe(2)
    expect(chipCourse[1].price).toBe(150)
    expect (chipCourse[0].title).toBe("CSS");

})
type TasksType ={
    id:number
    title:string
    isDone:boolean
}

test ("get only completed tasks",()  => {
    const tasks = [
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Solt", isDone: false},
        {id: 4, title: "Sugar", isDone: true}
    ]

    const completedTask = (tasks:TasksType) => {
        return tasks.isDone
    }

    const TasksFiltered = tasks.filter(task => task.isDone)

    expect(TasksFiltered.length).toBe(2)
    expect (TasksFiltered[0].title).toBe("Milk");

})





test ("get only uncompleted tasks",()  => {
    const tasks = [
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Solt", isDone: false},
        {id: 4, title: "Sugar", isDone: true}
    ]


    const TasksFiltered = tasks.filter(task => !task.isDone)

    expect(TasksFiltered.length).toBe(2)
    expect (TasksFiltered[0].title).toBe("Bread");

})
























/*
test ("Should tale old men older then 90", ( ) => {
    const ages = [18,20,22,1,100,90,14]

    // const predicate = (age: number) => age > 90

    const oldAges = ages.filter(age => age > 90)
    expect(oldAges.length).toBe(1)
    expect (oldAges[0]).toBe(100);

})

test ("Should take chipper courses then 160 ", ( ) => {
    const courses  = [
        {title:"CSS",price:110},
        {title:"JS",price:200},
        {title:"REACT",price:150}]

    // const cheapPredicate= (courses:CourseType) => {
    //     return courses.price < 160
    // }
        const cheapCourses = courses.filter( courses => courses.price < 160)
    expect(cheapCourses.length).toBe(2)
    expect (cheapCourses[0].title).toBe("CSS");

})

test ("get only completed tasks",()  =>{
    const tasks =[
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Solt", isDone: false},
        {id: 4, title: "Sugar", isDone: true}
    ]
 const completedTasks = tasks.filter( task => task.isDone)
    expect(completedTasks.length).toBe(2)
    expect (completedTasks[0].title).toBe("Milk");

})
*/
