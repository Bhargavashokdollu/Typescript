// type GreetProps={
//     name:string;
//     msg:number;
// }

// const Greet = (props:GreetProps) =>{
//     return(
//         <div>
//             <h2>welcome {props.name} you have {props.msg} unread msg</h2>
//         </div>
//     )
// }

// export default Greet

interface Employee {
    name:string;
    age:number;
    salary:number;
    isActive?:boolean;
}

interface EmployeeDetails extends Employee{
    department:string;
    position:string;
}
const Greet = ({name,age,salary,isActive,department,position="Frontend"}:EmployeeDetails)=>{
    return (
        <div>
            <h2>hi {name} your age {age} and your salary is {salary} and his  {isActive? "active":"inactive"}</h2>
            <p> his department is{department} and his position is {position}</p>
        </div>
    )
}

export default Greet;