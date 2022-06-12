import React, {useImperativeHandle} from 'react';

const Child01 = (props, ref) => {

    useImperativeHandle(ref, (...rest)=>{
        console.log(rest,'rest')
        return {
            child01: ()=>{
                console.log('child01 is run')
            }
        }
    })

    return (
        <div>
            xx child01
        </div>
    );
};

export default React.forwardRef(Child01);