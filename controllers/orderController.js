exports.showOrderList = (req, res, next) => {
    res.render('orderList', {});
}

exports.showOrderDetails = (req, res, next) => {
    res.render('orderDetails', {});
}

exports.addOrder = (req, res, next) => {
    res.render('addOrder', {});
}

exports.editOrder = (req, res, next) => {
    res.render('orderEdit', {});
}