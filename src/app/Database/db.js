//data.js
const db = require('./connection');
// const { ConnectableObserveble } = require('rxjs')
const express = require('express');
const app = express();
const cors = require('cors');
// const { privateDecrypt } = require('crypto');
// app.use(function(req, res, next){
//     res.header('Access-Control-Allow-Origin', "*");
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });
// const bodyparser = require('body-parser');
// const { nextTick } = require('process');
app.use(cors);
// app.use(bodyparser.json());

// Connection
db.connect(err => {
    if (err) { console.log('err'); }
    console.log(`database Connected...`);
})

// Get all data
// module.get=(app.get);

// app.get('/food', (req, res)=>{
//     db.query(`Select * from public."food_info"`, (err, result)=>{
//        console.log(result.rows[0]);
//         // if(!err){
//             res.send(result.rows);
//         // }
//     });
//     db.end;
// })
// app.get('/user', (req, res) => {
//     res.send("hello");
// });
app.get('/food' , (req,res) => {
    let qr = 'select * from "food_info"';
    db
      .query({
            rowMode: "array",
            text: qr
        })

        .then(result => {

            // var data1 = []; 
            // for (var i = 0; i < result.rows.length; i++) {
            //     data1.push({
            //         food_id: result.rows[i].food_id,
            //         food_name: result.rows[i].food_name,
            //         price: result.rows[i].price,
            //         rating: result.rows[i].rating,
            //         category: result.rows[i].category,
            //         cook_time: result.rows[i].cook_time,
            //         image_url: result.rows[i].image_url
            //     }); 
            // }
            // console.log(data1.length);
            res.send({
                message: 'all info data',
                data: result.rows
            });
        })
        .catch(err => console.log(err, 'errs'));
    });
    app.listen(3000, () => {
console.log('server Running');
    })