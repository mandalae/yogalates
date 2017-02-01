const authenticate = (req, res, next) => {
    if (req.params.secret === process.env.YOGALATES_SECRET){
        next()
    } else {
        res.status(401).end("Unauthorized!")
    }
}

module.exports = authenticate
