
import './App.css'
import Props from './components/Props'
import Button from './components/Button'
import Input from './components/Input'
import  LogedIn  from './components/state/LogedIn'
import {User} from './components/state/User'
import Practice from './components/Practice'
import Hooks from './components/Hooks'
function App() {
  

  return (
    <>
    
      {/* <Props name='Bhargav' msg={20}/>
      <Props name='Ashok' msg={10}/>
      <Props name='kumar' msg={20}/> */}
<Props name='Ashok' age={30} salary={10000}  isActive={true} department="development" position='Frontend Developer'/>
<Button handleClick={(event,id)=>{
  console.log('Button Clicked',event,id)
}

} />
<Input value='' handleChange={(event => console.log(event))}/>
<LogedIn />
<User />
<Practice />
<Hooks/>
    </>
  )
  
}
export default App
