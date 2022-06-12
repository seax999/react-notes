import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import SubMit from "./SubMit";
import Child01 from "./Child01";

function Index(props) {
    const [count, setCount] = useState(0)
    const [age, setAge] = useState('asd')
    const [value, setValue] = useState('')
    const Input = useRef(null);


    // const sub = useCallback(()=>{
    //     console.log(count,'count is')
    // },[count])
    return (
        <div>
            <p onClick={()=>{
                console.log(Input.current,'000')
            }}>count: {count}</p>
            <input type='text' value={value} onChange={(e)=>setValue(e.target.value)} />
            <SubMit ref={Input} />
            <Child01 ref={Input} />
        </div>
    );
}

export default Index;