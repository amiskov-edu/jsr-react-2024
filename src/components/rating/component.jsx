import './style.css'

export const Rating = ({handler, current, range}) => {
    return <div style={{display: 'inline-block'}}>
        {range.map(value =>
            <button className={current === value ? 'active' : ''}
                    onClick={handler} type="button" value={value}>
                {value}
            </button>)}
    </div>
}
