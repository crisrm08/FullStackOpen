import { useState } from 'react'
import Button from './Button';

const App = () => 
{
  const anecdotes = 
  [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const length = anecdotes.length;

  const ButtonNextAction = () => {
    const randomIndex = Math.floor(Math.random() * length);
    console.log('Previous selected index:', selected); 
    setSelected(randomIndex); 
    console.log('New selected index:', randomIndex); 
  };

  const ButtonVoteAction = () => {
    const copy = [...votes]; 
    copy[selected] += 1; 
    setVotes(copy); 
    console.log('Votes:', copy); 
  };

  const indices = votes.map((vote, index) => index);
  const sortedIndices = indices.sort((a, b) => votes[b] - votes[a]);
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <div>Votes: {votes[selected]}</div> 
      <div></div>
      <Button action={ButtonNextAction} text={"Next"}></Button>
      <Button action={ButtonVoteAction} text={"Vote"}></Button>

      <h1>Anecdote with the most votes</h1>
      {anecdotes[sortedIndices[0]]}

    </div>
  )
}

export default App;