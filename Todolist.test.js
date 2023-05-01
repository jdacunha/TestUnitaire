const user = require("./User");
const Emailsend = require("./EmailSend");

test('AddItem to return true', () => {
    const testUser= new user("dc", "jas", "oui@oui.fr", "Abcdefghi7", "02/04/2000")    
    testUser.createTodolist();
    
    expect(testUser.todolist.addItem("toto", "blabla", "01/05/2023 22:40")).toBeTruthy();
});

test('Add 2 items with same name to throw an error', () => {
    const testUser= new user("dc", "jas", "oui@oui.fr", "Abcdefghi7", "02/04/2000")    
    testUser.createTodolist();
    testUser.todolist.addItem("toto", "blabla", "01/05/2023 22:40");
    
    expect(() => {
        testUser.todolist.addItem("toto", "blublu", "01/05/2023 23:40")
    }).toThrow('Name not unique') 
});

test('Add 2 items in less than 30min to throw an error', () => {
    const testUser= new user("dc", "jas", "oui@oui.fr", "Abcdefghi7", "02/04/2000")    
    testUser.createTodolist();
    testUser.todolist.addItem("toto", "blabla", "01/05/2023 22:39");

    expect(() => {
        testUser.todolist.addItem("tata", "blublu", "01/05/2023 22:40")
    }).toThrow('wait 30 min between two items creation') 
});

//----- Not more than 10 items test -----
 test('Add more than 10 items to throw an error', () => {
    const testUser= new user("dc", "jas", "oui@oui.fr", "Abcdefghi7", "02/04/2000")    
    testUser.createTodolist();;
    testUser.todolist.addItem("toto", "blublu", "01/05/2023 10:40");
    testUser.todolist.addItem("tata", "blublu", "01/05/2023 11:40");
    testUser.todolist.addItem("tati", "blublu", "01/05/2023 12:40");
    testUser.todolist.addItem("tatu", "blublu", "01/05/2023 13:40");
    testUser.todolist.addItem("tyty", "blublu", "01/05/2023 14:40");
    testUser.todolist.addItem("titi", "blublu", "01/05/2023 15:40");
    testUser.todolist.addItem("tato", "blublu", "01/05/2023 16:40");
    testUser.todolist.addItem("tota", "blublu", "01/05/2023 17:40");
    testUser.todolist.addItem("tita", "blublu", "01/05/2023 18:40");
    testUser.todolist.addItem("tuta", "blublu", "01/05/2023 19:40");
    
    
    expect(() => {
        testUser.todolist.addItem("tete", "blublu","01/05/2023 22:40")
    }).toThrow('List is full')
});

//----- MOCK SEND EMAIL ----
test('should add a new item and call mockSendEmail when the list has 8 items', () => {

    Emailsend.sendEmail = jest.fn();;

    const testUser= new user("dc", "jas", "oui@oui.fr", "Abcdefghi7", "02/04/2000")    
    testUser.createTodolist();

    // Appel à addItem pour ajouter 8 éléments
    for (let i = 0; i < 8; i++) {
        testUser.todolist.addItem('item ' + i, 'content ' + i, "01/05/2023 1" + i + ":00");
    }

    // Appel à addItem pour ajouter un 9ème élément
    testUser.todolist.addItem('item 9', 'content 9', "01/05/2023 20:00");

    // Vérifiez que la fonction fictive a été appelée avec les bons arguments
    expect(Emailsend.sendEmail).toHaveBeenCalledWith('email', 'objet', 'body');
    expect(Emailsend.sendEmail).toHaveBeenCalledTimes(1);

    // Vérifiez que le nouvel élément a bien été ajouté à la liste
    expect(testUser.todolist.item.length).toBe(9);
}); 