import React, {useImperativeHandle} from 'react';

function SubMit(props, ref) {
    // console.log('submit is run')

    useImperativeHandle(ref, ()=>({
        submits: ()=>{
            console.log(9527)
        }
    }))

    return (
        <h1>xx</h1>
    );
}

export default React.forwardRef(SubMit);