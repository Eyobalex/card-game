
export default class Card {
    constructor(value, displayName,symbol) {
        this.value = value;
        this.displayName = displayName;
        this.symbol = symbol;
        // this.color = 'black'
    }
    
    
    nextCard= () => {
        
        // if( this.value === 12) {
        //     return new Card(1, "A", this.symbol);
        // } 
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
        const val = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        const typval =  Math.floor(Math.random() * (3  + 1)) ;

        // console.log(typval)
        return new Card(val,val.toString(), types[typval])

    }


    static getRandomCards(ammount) {
        const cards = [];
        for (let i = 0; i <ammount; i++) {
            cards.push(Card.getRandomCard());   
        }
        return cards;

    }


    getColor = () => {

        // console.log('getcolor', this.symbol == '&spades;' || this.symbole == '&clubs;');

        if(this.symbol === '&spades;') return 'black'
        else if(this.symbol === '&clubs;') return 'black'
        else return "red"
        // return( (this.symbol == '&spades;' ?  'black' : ( this.symbole == '&clubs;') ? 'black' : 'red') );
    }

    // displaySymol = () => {


        

    // }



    
    display = () =>{
        
        try {
            
            return `${this.value},${this.displayName},${this.symbol}`
        } catch (error) {
            console.log(error)
        }
    }

  }



//   const c1 = new Card(1, "A", "Arrow");
//   const c2 = new Card(12, "K","Diamond");

//   const c3 = c2.nextCard();

//   const c4 = c3.prevCard();
const c5 = Card.getRandomCard();
// //   console.log(c1.display(), c2.display());

// const c6 = Card.getRandomCards(12);
// console.log(c6.length)  


// // Card.getRandomCards(5)