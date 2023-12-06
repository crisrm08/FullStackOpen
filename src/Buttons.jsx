const Buttons = ({onClick, text}) =>
{
    return(
        <div>
            <button onClick={onClick}> {text}</button>
        </div>
    )
}

export default Buttons;