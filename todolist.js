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
    
            /* var pastItem = new Date(this.item[nbItem - 2].creationDate).getTime();
    
            var thirtyMin = 1000 * 60 * 30;
    
            if ((new Date().getTime() - pastItem) > thirtyMin){
                return true;
            }
            throw new Error('wait 30 min between two items creation'); */

        }

        return true
    }

    addItem(nom, contenu) {

        if(this.allowToCreate()) {

            const newItem = new Item(nom, contenu)

            this.item.push(newItem);
            
            return true
        };

        throw new Error('Cant create item');
    }


}

