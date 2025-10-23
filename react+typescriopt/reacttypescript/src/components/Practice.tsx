
// import { useState } from 'react';
// const Counter=()=>{
//     const [count, setCount]=useState<number>(0);
//     const increment=()=>{
//         setCount(count+1)
//     }
//     const decrement=()=>{
//         setCount(count-1)
//     }
//     return (
//         <div>
//             <button onClick={increment}>Count increase</button>
//             <button onClick={decrement}>Count decreased</button>
//             <h2>Count:{count}</h2>
//         </div>
//     )
// }

// export default Counter




//State with Array
// import { useState } from 'react';
// const FruitsList = () => {
//   const [fruits, setFruits] = useState<string[]>(["Apple", "Mango"]);

//   const addFruit = () => {
//     setFruits([...fruits, "Banana"]); 
//   };

//   return (
//     <div>
//       <ul>
//         {fruits.map((fruit, index) => (
//           <li key={index}>{fruit}</li>
//         ))}
//       </ul>
//       <button onClick={addFruit}>Add Banana</button>
//       <button onClick={addFruit}>Add Grape</button>
//       <button onClick={addFruit}>Add Orange</button>
//     </div>
//   );
// };

// export default FruitsList;






//State with Object
import { useState } from 'react';
interface User {
  name: string;
  age: number;
}

const UserProfile = () => {
  const [user, setUser] = useState<User>({ name: "Ashok", age: 25 });

  const updateAge = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <button onClick={updateAge}>Increase Age</button>
    </div>
  );
};

export default UserProfile;
