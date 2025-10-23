

//useEffect

// import React, {useEffect,  useState } from "react";

// const Counter: React.FC = () => {
//   const [count, setCount] = useState<number>(0);

//   useEffect(() => {
//     console.log(`Count changed to: ${count}`);
//   }, [count]);

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 5)}>Increase</button>
//     </div>
//   );
// };

// export default Counter;







import React, { useEffect, useState } from "react";
// const Counter=()=>{
 const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("Ashok");

  useEffect(() => {
    console.log(`Count changed to: ${count}`);
  }, [count]); // Only runs when count changes

  return (
    <div>
      <h2>{name} clicked {count} times</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setName("Bhargav")}>Change Name</button>
      
    </div>
  );
};

export default Counter;
