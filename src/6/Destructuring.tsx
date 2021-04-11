
export type ManType ={
    name:string,
    age:number,
    lesson:Array<{title:string,name?:string}>
    address:any
}


type PropsType = {
    title:string
    man:ManType
    car:{model:string}
    food:Array<string>
}

let man = {
    name: "Dimuch",
    age:32,
    lesson:[{title:"1"},{title:"1"}]
}

export const ManComponent:React.FC<PropsType> = ({title,man,...props}) => {
    //const {title,man,...restProps} = props

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {man.name}
        </div>
    </div>
}