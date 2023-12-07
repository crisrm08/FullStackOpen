import StatisticsLine from "./StatisticsLine"
const Statistics = ({ good, neutral, bad, total, average, positive }) =>
{
    if(good == 0 & neutral == 0 & bad == 0)
    {
        return(
            <div>No feedback given</div>
        )
    }
    return(
        <div>
         <h1>Statistics</h1>
            <table>
                <tbody>
                    <tr><td>good</td><td>{good}</td></tr>
                    <tr><td>neutral</td><td>{neutral}</td></tr>
                    <tr><td>bad</td><td>{bad}</td></tr>
                    <tr><td>all</td><td>{total}</td></tr>
                    <tr><td>average</td><td>{average}</td></tr>
                    <tr><td>positive</td><td>{positive} </td></tr>
                </tbody>
             </table>
    </div>
    )
}

export default Statistics

/*<div>good {good}</div>
            <div>neutral {neutral}</div>
            <div>bad {bad}</div>
            <div>total {total}</div>
            <div>average {average}</div>
            <div>positive {positive}</div>
            */