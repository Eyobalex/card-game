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

    if (gameEnd && winners.length === 0) {
      alert("There are no winners at this round");
    }

  }, [gameEnd, winners.length])

  const checkWinner = () => {
    players.map((player, i) => {
      const high =
        cards[player.card[0]].value > cards[player.card[1]].value
          ? cards[player.card[0]].value
          : cards[player.card[1]].value;
      const low =
        cards[player.card[0]].value < cards[player.card[1]].value
          ? cards[player.card[0]].value
          : cards[player.card[1]].value;
      if (dealerCard.value > low && dealerCard.value < high) {
        setwinners((ps) => [...ps, player]);
      }

      // return;
    });
    setGameEnd(true);
  };


  return (
      <div className="app">
        {/* <div className="app-header"></div> */}

        <div className="playing-area">
          <div className="app__card-placement dealer">
            <DealerCard card={dealerCard} />
          </div>

            {players.map((player) => (
              <div className={`app__container`} key={player.num}>
                <div
                  className="app__bet-placement"
                  style={{
                    backgroundColor:
                      winners.filter((x) => x.num === player.num).length > 0
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

                    </div>
                )}

                <div className="text-box">
                <a href="/" className="flip-cards btn btn-white btn-animate">
                        Refresh game 
                      </a>
                </div>
      </div>
  );
};

export default App;
