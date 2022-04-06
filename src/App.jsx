import React, { useContext, useEffect, useState } from "react";
import "./App.scss";
import Cards from "./components/Cards";
import Card from "./models/Card";
import { CardContext} from "./contexts/CardContext";
import DealerCard from "./components/DealerCard";
const cards = Card.getRandomCards(12);

console.log(cards);
const dealerCard = Card.getRandomCard();

const App = () => {
  const {flipped} = useContext(CardContext);

  // const [winner, setWinner] = useState("white");
  const [gameEnd, setGameEnd] = useState(false);

  const [winners, setwinners] = useState([]);

  const players = [
    { num: 1, card: [0, 1] },
    { num: 2, card: [2, 3] },
    { num: 3, card: [4, 5] },
    { num: 4, card: [6, 7] },
    { num: 5, card: [8, 9] },
    { num: 6, card: [10, 11] },
  ];

  useEffect(() => {

    if (gameEnd && winners.length == 0) {
      alert("There are no winners at this round");
    }
      
  }, [gameEnd])
  

  // const winners = [];

  // console.log(winners)

  const checkWinner = () => {

    // e.preventDefault();
    players.map((player, i) => {
      const high =
        cards[player.card[0]].value > cards[player.card[1]].value
          ? cards[player.card[0]].value
          : cards[player.card[1]].value;
      const low =
        cards[player.card[0]].value < cards[player.card[1]].value
          ? cards[player.card[0]].value
          : cards[player.card[1]].value;
      // const high = player.card[0].value > player.card[1].value ? player.card[0].value :player.card[1].value;
      // const low = player.card[0].value < player.card[1].value ? player.card[0].value :player.card[1].value;

      if (dealerCard.value > low && dealerCard.value < high) {
        // winners.push(player);
        setwinners((ps) => [...ps, player]);

        // console.log("first")
        // setWinner('gold');

        // console.log("yes", high, dealerCard.value, low);
      }
      // else{

      //   console.log("no", high, dealerCard.value, low);
      // }

      // console.log("first", winners)
    });

    // console.log('no winner', winners)

    // if( winners.length <= 0 ){
    //   //  alert(winners.length, "No winners found in this round")
    //   }
    // return winners;

    setGameEnd(true);
  };

  // useEffect(() =>{

  //   // console.log("useeffect", winners)

  //   checkWinner();

  // }, [winners])

  return (
      <div className="app">
        <div className="app-header"></div>

        {/* {console.log("dealerCard", JSON.stringify(dealerCard))} */}

        <div className="playing-area">
          <div className="app__card-placement dealer">
            <DealerCard card={dealerCard} />
          </div>

          {/* {console.log("playr", players)} */}

          {players.map((player) => (
            <div className={`app__container`} key={player.num}>
              <div
                className="app__bet-placement"
                style={{
                  backgroundColor:
                    winners.filter((x) => x.num == player.num).length > 0
                      ? "gold"
                      : "",
                }}
              >
                {/* {console.log("ins", )} */}
                <p className="p-text">{player.num}</p>
              </div>

              <div className="app__card-placement">
                <Cards card={cards[player.card[0]]} />
                <Cards card={cards[player.card[1]]} />
              </div>
            </div>
          ))}
        </div>

                {flipped && (
                    <div className="text-box">
                      <a href="#" className="flip-cards btn btn-white btn-animate" onClick={() => checkWinner()}>
                        Show winners
                      </a>

                      
                      {/* <button className="show-winner"onClick={() => setFlipped(ps => !ps)}>show winner</button> */}
                    </div>

                )}

                <div className="text-box">
                <a href="/" className="flip-cards btn btn-white btn-animate">
                        Refresh game 
                      </a>
                </div>

        {/* <div className="winners">

            {(checkWinner().length === 0) ? "there are no winners " : (
              players.map(player => (
                (checkWinner().includes(player)) && <p>{player.num} wins</p>
              ))
            )} 
          </div> */}

        {/* {winners.length > 0 && (
          <div>
            {winners.map((player) => (
              <p> player {player.num} have won </p>
            ))}
          </div>
        )} */}
      </div>
  );
};

export default App;
