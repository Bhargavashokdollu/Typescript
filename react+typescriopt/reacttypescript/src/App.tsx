
import './App.css'
import Props from './components/Props'
function App() {
  

  return (
    <>
    
      {/* <Props name='Bhargav' msg={20}/>
      <Props name='Ashok' msg={10}/>
      <Props name='kumar' msg={20}/> */}
<Props name='Ashok' age={30} salary={10000}  isActive={true} department="development" position='Frontend Developer'/>
    </>
  )
}
export default App
