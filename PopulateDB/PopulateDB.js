//Populates DB

//Removes Data
db.students.remove({});
db.schools.remove({});
db.transports.remove({});

//Insert Transport
db.transports.insert({"cnpj": "77777777777777", "name": "Transporte", "password": "Transporte"});

//Insert Schools
db.schools.insert({"cnpj": "88888888888888", "name": "Faculdade", "password": "Faculdade"});
db.schools.insert({"cnpj": "99999999999999", "name": "Escola",    "password": "Escola"});

//Insert Students for school:"Faculdade"
db.students.insert({"cpf": "00000000000", "name": "Tutui",    "status": {"state": "N","date": 8}, "school": db.schools.findOne({"cnpj": "88888888888888"})._id});
db.students.insert({"cpf": "22222222222", "name": "Felipe",   "status": {"state": "W","date": 8}, "school": db.schools.findOne({"cnpj": "88888888888888"})._id});
db.students.insert({"cpf": "44444444444", "name": "Camila",   "status": {"state": "C","date": 8}, "school": db.schools.findOne({"cnpj": "88888888888888"})._id});
db.students.insert({"cpf": "66666666666", "name": "Renata",   "status": {"state": "B","date": 8}, "school": db.schools.findOne({"cnpj": "88888888888888"})._id});
db.students.insert({"cpf": "88888888888", "name": "Matheus",  "status": {"state": "C","date": 7}, "school": db.schools.findOne({"cnpj": "88888888888888"})._id});

//Insert Students for school:"Escola"
db.students.insert({"cpf": "11111111111", "name": "Anderson", "status": {"state": "N","date": 8}, "school": db.schools.findOne({"cnpj": "99999999999999"})._id});
db.students.insert({"cpf": "33333333333", "name": "Rubens",    "status": {"state": "W","date": 8}, "school": db.schools.findOne({"cnpj": "99999999999999"})._id});
db.students.insert({"cpf": "55555555555", "name": "Emerson",  "status": {"state": "C","date": 8}, "school": db.schools.findOne({"cnpj": "99999999999999"})._id});
db.students.insert({"cpf": "77777777777", "name": "Ricardo",  "status": {"state": "B","date": 8}, "school": db.schools.findOne({"cnpj": "99999999999999"})._id});
db.students.insert({"cpf": "99999999999", "name": "Pedro Petista",   "status": {"state": "C","date": 7}, "school": db.schools.findOne({"cnpj": "99999999999999"})._id});
