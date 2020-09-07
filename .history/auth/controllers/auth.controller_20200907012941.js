module.exports.auth = (req, res) => {
    console.log(`User: ${req.body}`);
    res.status(200).send({});
}