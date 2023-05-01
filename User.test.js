const user = require("./User");

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
test('Less than 8 characters in pw to throw an Error', () => {
    const testUser= new user("dc", "jas", "oui@oui.fr", "Abc7", "02/04/2000")
    
    expect(() => {
        testUser.isValid()
    }).toThrow('Password not valid') 
});
test('More than 40 characters in pw to throw an Error', () => {
    const testUser= new user("dc", "jas", "oui@oui.fr", "Abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz1234567", "02/04/2000")
    
    expect(() => {
        testUser.isValid()
    }).toThrow('Password not valid') 
});
test('No caps in pw to throw an Error', () => {
    const testUser= new user("dc", "jas", "oui@oui.fr", "abcdefghi7", "02/04/2000")
    
    expect(() => {
        testUser.isValid()
    }).toThrow('Password not valid') 
});
test('No min in pw to throw an Error', () => {
    const testUser= new user("dc", "jas", "oui@oui.fr", "ABCDEFGHI7", "02/04/2000")
    
    expect(() => {
        testUser.isValid()
    }).toThrow('Password not valid') 
});
test('No number in pw to throw an Error', () => {
    const testUser= new user("dc", "jas", "oui@oui.fr", "Abcdefghi", "02/04/2000")
    
    expect(() => {
        testUser.isValid()
    }).toThrow('Password not valid') 
});


//---- Age Test ----
test('User born in 2020 to throw an error', () => {
    const testUser= new user("dc", "jas", "oui@oui.fr", "Abcdefghi7", "02/04/2020")
    
    expect(() => {
        testUser.isValid()
    }).toThrow('User too young') 
});


//----- Create ToDoList test -----
test('Create a todolist with a valid user to return true', () => {
    const testUser= new user("dc", "jas", "oui@oui.fr", "Abcdefghi7", "02/04/2000")    
    
    expect(() => {
        testUser.createTodolist();
    }).toBeTruthy() 
});
test('Todolist with a non-valid user to throw an error', () => {
    const testUser= new user(12, "jas", "oui@oui.fr", "Abcdefghi7", "02/04/2000")    
    
    expect(() => {
        testUser.createTodolist();
    }).toThrow('Last name not valid')
});
test('Create a second todolist to throw an error', () => {
    const testUser= new user("dc", "jas", "oui@oui.fr", "Abcdefghi7", "02/04/2000")    
    testUser.createTodolist();
    
    expect(() => {
        testUser.createTodolist();
    }).toThrow('This user already have a todolist') 
});