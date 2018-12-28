const controller = {};
controller.list = (req, res) => {
    //res.send('Hello world');
    req.getConnection((err, conn) => {
        conn.query('select * from customer', (err, customers) => {
            if (err) {
                res.json(err);
                //next(err)
            }
            console.log(customers);
            res.render('customers', {
                data: customers
            });
        });
    });
}

controller.save = (req, res) => {
    //console.log(req.body);
    //res.send('works');
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO customer set ?', [data], (err, customer) => {
            console.log(customer);
            res.send('Works');
        });
    })
};
module.exports = controller;