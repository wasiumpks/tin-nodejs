exports.showItemList = (req, res, next) => {
    res.render('itemList', {});
}

exports.showItemDetails = (req, res, next) => {
    res.render('itemDetails', {});
}

exports.addItem = (req, res, next) => {
    res.render('addItem', {});
}

exports.editItem = (req, res, next) => {
    res.render('editItem', {});
}