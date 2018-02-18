const Helpers = {
  move: {
    allOf: function(attributeToMove, attributeValueToMove, cards, newLocation){
      let newCards = cards.map((thisCard) => {
        if (thisCard[attributeToMove] === attributeValueToMove){
          thisCard.location = newLocation;
        }
        return thisCard;
      });
      return newCards;
    },
    selected: function(toMove, cards, newLocation){
      let newCards = [...cards];
      toMove.forEach((moveCard) => {
        newCards = newCards.map((thisCard) => {
          if (thisCard.name === moveCard.name){
            thisCard.location = newLocation;
          }
          return thisCard;
        });
      });
      return newCards;
    }
  },
  get: {
    cardsInStage: function(stage, cards){
      return cards.filter((thisCard) => {
        return thisCard.stage === stage;
      });
    },
    cardsInLocation: function(location, cards){
      return cards.filter((thisCard) => {
        return thisCard.location === location;
      });
    }
  }
};

export default Helpers;
