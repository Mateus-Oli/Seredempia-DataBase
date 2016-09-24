//Populates DB

//Goes to Collection
use seredempia

//Removes Data
db.students.remove({})
db.schools.remove({})
db.transports.remove({})


//Insert Students
db.students.insert({"cpf":"333.333.333-33","name":"Joao","status":{"state":"N","date":"8"},"school":{"cnpj":"99.999.999/9999-99","name":"Escola", "password":"Escola"}});
db.students.insert({"cpf":"444.444.444-44","name":"Pedro","status":{"state":"W","date":"8"},"school":{"cnpj":"99.999.999/9999-99","name":"Escola", "password":"Escola"}});
db.students.insert({"cpf":"555.555.555-55","name":"Carlos","status":{"state":"C","date":"8"},"school":{"cnpj":"99.999.999/9999-99","name":"Escola", "password":"Escola"}});
db.students.insert({"cpf":"666.666.666-66","name":"Ricardo","status":{"state":"B","date":"8"},"school":{"cnpj":"99.999.999/9999-99","name":"Escola", "password":"Escola"}});
db.students.insert({"cpf":"777.777.777-77","name":"Fernando","status":{"state":"C","date":"7"},"school":{"cnpj":"99.999.999/9999-99","name":"Escola", "password":"Escola"}});
