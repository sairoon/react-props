import './App.css'
import ClsComp from './components/ClsComp'
import FuncComp from './components/FuncComp'
import PropsComp from './components/PropsComp'
import ShortProps from './components/ShortProps'

function App() {
  let p = "This is a props"
  return (
    <>
      <h1>Hello React</h1>
      <FuncComp />
      <PropsComp propsName={p} propsAlso="It is also props" 
        object={{
          name: "Sairoon",
          age: 24,
        }}
      />
      <ShortProps title="It is ShortProps" title2="It is also ShortProps" />
      <ClsComp title="It is Props on Cls" title2="It is also Props on Cls"  />
    </>
  )
}

export default App
