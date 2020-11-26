exports.showUserList = (req, res, next) => {
    res.render('userList', {});
}

exports.showUserDetails = (req, res, next) => {
    res.render('userDetails', {});
}

exports.addUser = (req, res, next) => {
    res.render('addUser', {});
}

exports.editUser = (req, res, next) => {
    res.render('userEdit', {});
}