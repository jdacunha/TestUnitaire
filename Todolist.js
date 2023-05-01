const Item = require("./Item");
const Emailsend = require("./EmailSend");



module.exports = class toDoList {
    constructor() {
        this.item = []
    }

    allowToCreate(nom, date) {

        const nbItem = this.item.length 
        if(nbItem != 0) {
            
            if(nbItem == 10 ) {
                throw new Error('List is full')
            }
            
            for (let i = 0; i < nbItem; i++) {
                const element = this.item[i];
                if (element.name == nom) {
                    throw new Error('Name not unique')
                }
            }

            const pastItem = this.item[nbItem - 1]

            var pastCreationDate = pastItem.creationDate.getTime();

            var thirtyMin = 1000 * 60 * 30;
    
            if ((date.getTime() - pastCreationDate) > thirtyMin){
                return true;
            }
            throw new Error('wait 30 min between two items creation');

        }

        return true
    }

    addItem(nom, contenu, date) {

        date = new Date(date)

        if(this.allowToCreate(nom, date)) {

            const newItem = new Item(nom, contenu, date)

            if(newItem.checkContent()) {
                this.item.push(newItem);

                if (this.item.length == 8) {
                    Emailsend.sendEmail('email', 'objet', 'body');
                }

                return true
            }

            throw new Error('Content not valid');

        };

        throw new Error('Cant create item');
    }


}

