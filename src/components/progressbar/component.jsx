import './style.css'
import {useRef, useState, useEffect} from 'react'
import {useScrollProgress} from '../../hooks/use-scroll-progress.js'

export const ProgressBar = ({progressbar}) => {
    const [progress, setProgress] = useState(0);
    const progressElementRef = useRef()
    useEffect(() => useScrollProgress(setProgress), []);
    return <div className="progressbar">
        <div ref={progressElementRef} className="inner" style={{width: progress + '%'}}></div>
    </div>
}
