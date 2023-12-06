const StatisticsLine = ({ good, neutral, bad, text, value }) =>
{
    if(good == 0 & neutral == 0 & bad == 0)
    {
        return(
            <div>No feedback given</div>
        )
    }
    return(
        <div>{text} {value}</div>
    )
}

export default StatisticsLine