import {student, StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType, HouseType} from "../02/02_02";

debugger
export const sum = (a:number, b:number) => {
    return a + b
}
export function sum2  (a:number, b:number)  {
    return a + b
}
const res = sum (sum(1,2), sum(1,3))

export const addSkill = (student:StudentType,skill: string) => {
    student.technologies.push({id: new Date().getTime(),
        title:skill
    })
}

export function addSkill2  (student:StudentType,skill: string)  {
    student.technologies.push({id: new Date().getTime(),
        title:skill
    })
}


export function makeStudentActive(student: StudentType) {
    student.isActive = true;
}

export function doesStudentLiveIn (student: StudentType,cityName:string ) {
    return student.address.city.title === cityName
}

export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) => {
    building.budget += budget;
}
export const repairedHouse = (house: HouseType) => {
    house.repaired = true
}
export const toFireStaff = (staff:GovernmentBuildingsType,stuff:number) => {
    staff.staffCount -= stuff
}
export function toHireStaff (staff:GovernmentBuildingsType,stuff:number) {
    staff.staffCount += stuff

}
export function createMessage (city:CityType) {
    //return "Hello " + city.title + " citizens. I want you be happy. All " + city.citizensNumber + " people "
    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} people `

}