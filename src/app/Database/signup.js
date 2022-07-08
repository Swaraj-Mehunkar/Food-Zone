const express=require('express')
const bodyparser=require('body-parser');
const cors=require('cors');
const db=require('./connection')
const app=express();
app.use(cors());
app.use(bodyparser.json());
//-----
db.connect(err => {
    if (err) { console.log('err');}
    console.log('database Connected...');
})


app.post('/signup' , (req,res) => {
    let qr = 'INSERT INTO public."signup"'
        "F_name", "L_name", email, password, country;
    db
        .query({
           //rowMode: "array",
            text: qr
        })

    //     .then(result => {
    //         //console.log(result); 
    //         var data1 = []; 
    //         for (var i = 0; i < result.rows.length; i++) {
    //             data1.push({
    //                 food_id: result.rows[i].food_id,
    //                 food_name: result.rows[i].food_name,
    //                 price: result.rows[i].price,
    //                 rating: result.rows[i].rating,
    //                 category: result.rows[i].category,
    //                 cook_time: result.rows[i].cook_time,
    //                 image_url: result.rows[i].image_url
    //             }); 
            
    //         }
    //         console.log(result.rows[0].Name);
    //         res.send(
    //             data1
    //     );
    //         //res.send(result.rows);
    //         //}
    //     })
    //     .catch(err => console.log(err, 'errs'));
    // });
    app.listen(3000, () => {
console.log('server Running');
    })
});