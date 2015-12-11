exports.requiresLogin = function(req, res, next) {
	if (!req.isAuthenticated()) {
		return res.status(200).send(false);
	} else {
		return res.status(200).send(true);
	}
	next();
};
