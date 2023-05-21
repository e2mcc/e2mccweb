const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	console.log("hahah");
	const BackendNum = 3322;
	res.send({ BackendNum });
})

module.exports = router;
