module.exports = function (app) {
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/app/index.html');
    });
};
