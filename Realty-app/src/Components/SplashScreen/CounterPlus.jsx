import React, { useEffect, useRef, useState } from "react";

const CounterPlus = ({start = 50, end, timer = 50}) => {

    const [state, setstate] = useState(null);
    const ref = useRef(start);

    const accumulator = end / 100;

    const updateCounterState = () => {
        if(ref.current < end) {
            const result = Math.ceil(ref.current + accumulator);
            if(result > end) return setstate(end);
            setstate(result);
            ref.current = result;
        }
        setTimeout(updateCounterState, timer);
    };

    useEffect(() => {
        let isMounted = true;
        if(isMounted) {
            updateCounterState();
        }
            
        return () => (isMounted = false);
    }, [end, start]);


    return (
        <div className="text-2xl md:text-3xl text-secondary-200 font-medium">{state}+</div>
    )

};
export default CounterPlus;