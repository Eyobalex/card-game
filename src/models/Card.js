
export default class Card {
    constructor(value, displayName,symbol) {
        this.value = value;
        this.displayName = displayName;
        this.symbol = symbol;
    }
    
    
    nextCard= () => {
        const next = this.value + 1;
        
        switch (next) {
            case 9:  return new Card(10, "J", this.symbol);
            case 10: return new Card(11, "Q", this.symbol);
            case 11: return new Card(12, "K", this.symbol);
            case 12: return this;
            default: break;
        }
        return new Card(next, next.toString(), this.symbol);
    }
    prevCard= () => {
        
        if( this.value === 1) {
            return this;
        } 
        const next = this.value - 1;
        
        switch (next) {
            case 11: return new Card(10, "J", this.symbol);
            case 12: return new Card(11, "Q", this.symbol);
            default: break;
        }
        return new Card(next, next.toString(), this.symbol);
    }
    
    
    static getRandomCard()  {
        const types = ['&spades;', '&clubs;', '&hearts;', '&diams;'];
        const val = Math.floor(Math.random() * (11 - 2 + 1)) + 2;
        const typval =  Math.floor(Math.random() * (3  + 1)) ;
        return new Card(val,val.toString(), types[typval])

    }


    static getRandomCards(ammount) {
        const cards = [];
        // console.log("card",(cards.filter(card => card.value === newCard.value)).length) 
        for (let i = 0; i <ammount; i++) {
            cards.push(Card.getRandomCard());   
        }
        return cards;

    }


    getColor = () => {
        if(this.symbol === '&spades;') return 'black'
        else if(this.symbol === '&clubs;') return 'black'
        else return "red"
    }

    displaySymbol = () => {
            switch (this.symbol) {
              case "&diams;":
                return (  <span className="rank">&diams;</span>)
              case "&hearts;":
                return (<span className="rank">&hearts;</span>)
              case "&clubs;":
                return (<span className="rank">&clubs;</span>)
              case "&spades;":
                return (<span className="rank">&spades;</span>)
              default:
                return (<span className="rank">&spades;</span>)
            }
          }
    }





    Card.getRandomCards(10)