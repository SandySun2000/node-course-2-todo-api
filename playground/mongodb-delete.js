const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/test', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server')
    }

    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res) =>{
    //     console.log(res);
    // });
    //deleteOne

   //  db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
   //      console.log(res);
   // });
    //findOneAndDelete

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
    //     console.log(result)
    // })

    db.collection('Users').findOneAndDelete({
         _id: new ObjectID('5a6b7cca252ba1fcec63b3a0')}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));

    })
//db.close();
})