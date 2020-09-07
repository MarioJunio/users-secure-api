module.exports.auth = (req, res) => {
    console.log(`User: ${req.body.email} - ${req.body.senha}`);
    res.status(200).send({});
}