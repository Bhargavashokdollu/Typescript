// useState

// import  { useState } from 'react';

// const Counter = () => {
  
//   const [count, setCount] = useState<number>(0);

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <button onClick={() => setCount(count - 1)}>Decrease</button>
//     </div>
//   );
// };

// export default Counter;


//useEffect

// import React, { useEffect, useState } from 'react';

// const Timer: React.FC = () => {
//   const [seconds, setSeconds] = useState<number>(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSeconds(prev => prev + 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return <h2>Timer: {seconds}s</h2>;
// };

// export default Timer;



//useContext

// import { createContext, useContext } from 'react';

// interface User {
//   name: string;
//   age: number;
// }

// const UserContext = createContext<User | null>(null);

// const UserProvider = () => {
//   const user = { name: 'Ashok', age: 30 };
//   return (
//     <UserContext.Provider value={user}>
//       <UserProfile />
//     </UserContext.Provider>
//   );
// };

// const UserProfile = () => {
//   const user = useContext(UserContext);
//   return <h2>{user ? `Hello, ${user.name}` : 'No user'}</h2>;
// };

// export default UserProvider;


//useRef

import  { useRef } from 'react';

const InputFocus = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default InputFocus;
