const user = require("./User");
const toDoList = require("./todolist");

const myMock = jest.fn();

//----- Classic test -----
test('User info classics to return true', () => {
    const testUser= new user("dc", "jas", "oui@oui.fr", "Abcdefghi7", "02/04/2000")
    
    expect(testUser.isValid()).toBeTruthy();
});

//----- Lastname/Firstname tests -----
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

//----- Email tests -----
test('No @ in email to throw an Error', () => {
    const testUser= new user("dc", "jas", "ouioui.fr", "Abcdefghi7", "02/04/2000")
    
    expect(() => {
        testUser.isValid()
    }).toThrow('Email not valid') 
});
test('No domain name in email to throw an Error', () => {
    const testUser= new user("dc", "jas", "oui@ouifr", "Abcdefghi7", "02/04/2000")
    
    expect(() => {
        testUser.isValid()
    }).toThrow('Email not valid') 
});
test('No first part in email to throw an Error', () => {
    const testUser= new user("dc", "jas", "@oui.fr", "Abcdefghi7", "02/04/2000")
    
    expect(() => {
        testUser.isValid()
    }).toThrow('Email not valid') 
});
test('No second part in email to throw an Error', () => {
    const testUser= new user("dc", "jas", "oui@.fr", "Abcdefghi7", "02/04/2000")
    
    expect(() => {
        testUser.isValid()
    }).toThrow('Email not valid') 
});


//----- Password tests -----





test('Test New item', () => {
    const testUser= new user("dc", "jas", "oui@oui.fr", "Abcdefghi7", "02/04/2000")    
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






