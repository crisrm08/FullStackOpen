const Button = ({action, text}) => {
    return(
        <button onClick={action} text={text} > {text}</button>
    )
}
export default Button;

