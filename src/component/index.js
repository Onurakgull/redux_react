import React from 'react'
import { increaseValue, decreaseValue } from '../redux/actionCreator'
import { useDispatch} from 'react-redux'
import { useSelector } from 'react-redux'

const Index = () => {
    const count = useSelector((state) => state.ourState.count)
    const disPatch = useDispatch()
    console.log('MY STATE' + count)
  return (
    <div>
        <h1>Sayaç Uygulaması</h1>
        <button onClick={()=>disPatch(increaseValue())}>INCREAMENT</button>
        <p>{count}</p>
        <button onClick={()=>disPatch(decreaseValue())}>DECREAMENT</button>
    </div>
  )
}

export default Index