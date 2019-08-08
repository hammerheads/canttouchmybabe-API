const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;



app.use(bodyParser.json());

var customers = [{
    id: 1,
    firstName: 'Robin',
    lastName: 'Le Lapin',
    email: 'chonco@slavs.com',
    phone: '967263998',
    babes: []
}, {
    id: 2,
    firstName: 'Rolo',
    lastName: 'RocketMan',
    email: 'rolao@dutchman.com',
    phone: '913477825',
    babes: []
}];

app.get('/customer/:id', (req, res) => res.send(stalker1));


// ADD A BABE
app.post('/customer/:cid/babe', function(req, res) {

    var babe = req.body;

    console.log(req.params.cid);
    
    var customer = getCustomer(req.params.cid);

    console.log(customer);
    

    babe.id = customer.babes.length+1;

    customer.babes.push(babe);

    res.send(customer.babes[0]);
    
});

// GET A BABE
app.get('/customer/:cid/babe/:bid', function(req, res) {

    res.send(getBabe(getCustomer(req.param[0]), req.param[1]));
})


function getCustomer(id) {
    console.log("searching");
    
    for (var i = 0; i < customers.length; i++) {
        if (customers[i].id === parseInt(id)) {
            return customers[i];
        }
    }
    
}


function getBabe(customer, id) {
    return customer.babes[0];
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


