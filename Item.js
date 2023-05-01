module.exports = class Item {
    constructor(nom, contenu) {
        this.name = nom,
        this.content = contenu,
        this.creationDate = new Date()
    }

    checkContent() {
        if (this.content) {
            if (typeof this.content == 'string') {
                if (this.content.length < 1000){
                    return true
                }
            }
        }

        throw new Error('Content is not valid')
    }

}