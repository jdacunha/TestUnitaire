const user = require("./User");

const myMock = jest.fn();


test('AddItem to return true', () => {
    const testUser= new user("dc", "jas", "oui@oui.fr", "Abcdefghi7", "02/04/2000")    
    testUser.createTodolist();
    
    expect(testUser.todolist.addItem("toto", "blabla")).toBeTruthy();
});

test('Add 2 items with same name to throw an error', () => {
    const testUser= new user("dc", "jas", "oui@oui.fr", "Abcdefghi7", "02/04/2000")    
    testUser.createTodolist();;
    testUser.todolist.addItem("toto", "blabla");
    
    expect(() => {
        testUser.todolist.addItem("toto", "blublu")
    }).toThrow('Name not unique') 
});
test('Add 2 items in less than 30min to throw an error', () => {
    const testUser= new user("dc", "jas", "oui@oui.fr", "Abcdefghi7", "02/04/2000")    
    testUser.createTodolist();;
    testUser.todolist.addItem("toto", "blabla");
    
    expect(() => {
        testUser.todolist.addItem("tata", "blublu")
    }).toThrow('wait 30 min between two items creation') 
});

/* test('Add more than 10 items to throw an error', () => {
    const testUser= new user("dc", "jas", "oui@oui.fr", "Abcdefghi7", "02/04/2000")    
    testUser.createTodolist();;
    testUser.todolist.addItem("toto", "blublu");
    testUser.todolist.addItem("tata", "blublu");
    testUser.todolist.addItem("tati", "blublu");
    testUser.todolist.addItem("tatu", "blublu");
    testUser.todolist.addItem("tyty", "blublu");
    testUser.todolist.addItem("titi", "blublu");
    testUser.todolist.addItem("tato", "blublu");
    testUser.todolist.addItem("tota", "blublu");
    testUser.todolist.addItem("tita", "blublu");
    testUser.todolist.addItem("tuta", "blublu");
    
    expect(() => {
        testUser.todolist.addItem("tete", "blublu")
    }).toThrow('List is full') 
});  */
