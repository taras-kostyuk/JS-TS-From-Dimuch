import {ManType} from "./Destructuring";

let props:ManType
beforeEach( () => {
    props = {
            name: "Dimuch",
            age:32,
            lesson:[{title:"1"},{title:"2"},{title:"3", name:"react"}],
        address: {
                street:{
                    title:"Botha road"
                }
        }

    }
})


test ('',() => {
    const l1 = props.lesson[0]
    const l2 = props.lesson[1]

    const [,ls2, ...restLesson] =props.lesson

    expect(l1.title).toBe("1")
    expect(l2.title).toBe("2")
   // expect(ls1.title).toBe("1")
    expect(ls2.title).toBe("2")

    expect(restLesson.length).toBe(1)
    expect(restLesson[0].title).toBe('3')
    expect(restLesson[0]).toStrictEqual({title:"3", name:"react"})

})