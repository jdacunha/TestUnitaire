const Item = require("./Item");


module.exports = class toDoList {
    constructor() {
        this.item = []
    }

    allowToCreate(nom) {

        const nbItem = this.item.length 
        if(nbItem != 0) {
            
            if(nbItem == 10 ) {
                throw new Error('List is full')
            }
            else if (nbItem == 7) {
                //mock envoie email
            }
            
            for (let i = 0; i < nbItem; i++) {
                const element = this.item[i];
                if (element.name == nom) {
                    throw new Error('Name not unique')
                }
            }

            const pastItem = this.item[nbItem - 1]

            var pastCreationDate = new Date(pastItem.creationDate).getTime();

            var thirtyMin = 1000 * 60 * 30;
    
            if ((new Date().getTime() - pastCreationDate) > thirtyMin){
                return true;
            }
            throw new Error('wait 30 min between two items creation');

        }

        return true
    }

    addItem(nom, contenu) {

        if(this.allowToCreate(nom)) {

            const newItem = new Item(nom, contenu)

            if(newItem.checkContent()) {
                this.item.push(newItem);

                return true
            }
            
        };

        throw new Error('Cant create item');
    }


}

