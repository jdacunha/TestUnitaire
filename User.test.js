const user = require("./User");
const toDoList = require("./todolist");

const myMock = jest.fn();

test('User info classics to return true', () => {
    const testUser= new user("dc", "jas", "oui@oui.fr", "Abcdefghi7", "02/04/2000")
    
    expect(testUser.isValid()).toBeTruthy();
});
test('Name not string to throw an Error', () => {
    const testUser= new user(12, "jas", "oui@oui.fr", "Abcdefghi7", "02/04/2000")
    
    expect(() => {
        testUser.isValid()
    }).toThrow('Last name not valid') 
});
test('No name to throw an Error', () => {
    const testUser= new user("", "jas", "oui@oui.fr", "Abcdefghi7", "02/04/2000")
    
    expect(() => {
        testUser.isValid()
    }).toThrow('Last name not valid') 
});



test('Test TODOLIST', () => {
    const testUser= new user("dc", "jas", "oui@oui.fr", "Abcdefghi7", "02/04/2000")    
    testUser.createTodolist();
    testUser.todolist.addItem("blabla", "blublu")
    testUser.todolist.addItem("floflo", "flyfly")

    expect(testUser.todolist.item.length).toBe(2);
});
