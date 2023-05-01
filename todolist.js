const Item = require("./Item");


module.exports = class toDoList {
    constructor() {
        this.item = []
    }

    allowToCreate() {

        const nbItem = this.item.length 
        if(nbItem != 0) {
            
            if(nbItem == 10 ) {
                throw new Error('List is full')
            }
            else if (nbItem == 7) {
                //mock envoie email
            }
            
            const pastItem = this.item[nbItem - 1]

            var pastCreationDate = new Date(pastItem.creationDate).getTime();
            
            console.log(pastCreationDate)

            var thirtyMin = 1000 * 60 * 30;
    
            if ((new Date().getTime() - pastCreationDate) > thirtyMin){
                return true;
            }
            throw new Error('wait 30 min between two items creation');

        }

        return true
    }

    addItem(nom, contenu) {

        if(this.allowToCreate()) {

            const newItem = new Item(nom, contenu)

            this.item.push(newItem);
            
            console.log(newItem)

            return true
        };

        throw new Error('Cant create item');
    }


}

