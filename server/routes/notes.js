var express = require('express');
var router = express.Router();
var admin = require('firebase-admin');
var serviceAccount = require('../noteapp-34c88-firebase-adminsdk-2kfqf-5512deb127.json')
var firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://noteapp-34c88.firebaseio.com'
})

var database = firebaseAdmin.database();
 


router.get('/notes', function(request, response){
    console.log("In get")
    var restaurantRef =  database.ref('/')
     
       
        restaurantRef.once('value', function(snapshot){
            var data = snapshot.val()
            if (!data){
                data = {}
            }
          
            response.send(data.notes)
          
        })
    
    
})

 
router.get('/notes/:id', function(request, response){
    
    var key = request.params.id
    console.log("in get:id", key)
    var restaurantRef =  database.ref('/notes/' + key)
    restaurantRef.once('value', function(snapshot){
        var data = snapshot.val()
        if (!data){
            data = {}
        }
        response.json(data)
    
    })
})

router.post('/notes', function(request, response){
    console.log("in post");
    var data = request.body
    console.log('data: ', data)
    var restaurantRef = database.ref('/notes')

    restaurantRef.push(data)
       .then(function(){
           console.log('data loaded')
       })
       .catch(function(error){
           console.log(error)
       })
      response.json(data)
})

router.put('/notes/:id', function(request, response){
    console.log('inside of put', request.params.id)
    var key = request.params.id
    let myUpdate;
    var notesRef = database.ref('/notes/' + key)
    console.log(key)
       console.log(notesRef)
       console.log(request.body)
       notesRef.update(request.body)
       .then(function(data){
        this.myUpdate = data })

    .catch(function(error){
        console.log(error)
    })
   response.json(myUpdate)
})

router.delete('/notes/:id', function(request, response){
    var key = request.params.id
    var notesRef = database.ref('/notes/' + key)
      notesRef.remove()
       .then(function(){
           console.log('data deleted')
       })
       .catch(function(error){
           console.log(error)
       })
      response.json(key)
})


module.exports = router;
