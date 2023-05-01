const user = require("./User");
const toDoList = require("./Todolist");


test('Test New item', () => {
    const testUser= new user("dc", "jas", "oui@oui.fr", "Abcdefghi7", "01/05/2010")    
    testUser.createTodolist();
    testUser.todolist.addItem("blabla", "blublu")
    
    expect(() => {
        testUser.todolist.addItem("floflo", "flyfly")
    }).toThrow('wait 30 min between two items creation') 
});

test('Test TODOLIST', () => {
    const testUser= new user("dc", "jas", "oui@oui.fr", "Abcdefghi7", "02/04/2000")    
    testUser.createTodolist();
    testUser.todolist.addItem("blabla", "blublu")

    console.log(testUser.todolist)

    expect(testUser.todolist.item.length).toBe(1);
}); 


