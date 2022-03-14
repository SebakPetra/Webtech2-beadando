const Product = require('../models/gala');

exports.gala_create = function (req, res, next) {
    Product.findOne({ title: req.body.title }, function (err, p) {
        if (err) return err;
        return p
    }).exec(function (err, existingProduct) {
        if (existingProduct && existingProduct.title === req.body.title) {
            return next(err)
        } else {
            let product = new Product(
                {
                    title: req.body.title,
                    organizer: req.body.organizer,
                    date: req.body.date,
                    price: req.body.price,
                    sitting: req.body.sitting,
                }
            );
            product.save(function (err, object) {
                if (err) {
                    return next(err);
                }
                res.json({ id: object.id })
            })
        }
    })

};

exports.gala_get_all = function (req, res, next) {
    Product.find({}, function (err, product) {
        if (err) return next(err);
        res.json(product);
    })
};

exports.gala_details = function (req, res, next) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.json(product);
    })
};


exports.gala_update = function (req, res, next) {
    Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
        if (err) return next(err);
        res.json('Product udpated.');
    });
};

exports.gala_delete = function (req, res, next) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.json('Deleted successfully!');
    })
};