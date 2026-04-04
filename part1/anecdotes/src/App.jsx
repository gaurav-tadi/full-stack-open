import { useState } from "react";

const App = () => {
  const anecdotes =[
  "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
  "Computer science is no more about computers than astronomy is about telescopes.",
  "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
  "The most exciting phrase to hear in software development is not 'Eureka!' but 'That's funny...'",
  "Walking on water and developing software from a specification are easy if both are frozen.",
  "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
  "A primary cause of complexity is that software vendors uncritically adopt any feature users think they want.",
  "There are only two hard things in Computer Science: cache invalidation and naming things.",
];
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const getNextAnecdote = () => {
    while (true) {
      const randomNumber = Math.floor(Math.random() * anecdotes.length);
      if (randomNumber !== selected) {
        setSelected(randomNumber);
        break;
      }
    }
  };

  const voteAnecdote = () => {
    const copyOfVotes = [...votes];
    copyOfVotes[selected] += 1;
    setVotes(copyOfVotes);
  };

  const getMostVotes = () => {
    return votes.indexOf(Math.max(...votes));
  };

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <button onClick={voteAnecdote}>vote</button>
      <button onClick={getNextAnecdote}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[getMostVotes()]}</div>
      <div>has {votes[getMostVotes()]} votes</div>
    </>
  );
};

export default App;
