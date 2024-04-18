import React, { useEffect, useRef, useState } from "react";

const CountUp = ({start = 50, end, timer = 50}) => {

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
        <div className="justify-center items-center">
            <h1 className="text-primary font-noto text-3xl lg:text-7xl font-semibold transition-all ease-in-out duration-500">{state} %</h1>
        </div>
    )

};
export default CountUp;