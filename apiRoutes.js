require

function expressify(app){
	app.post("/api/saveddata", function(req,res){
		console.log("we hit the route", req.body)
		res.json({
			we: "made it to the backend and back"
		})
	})
	app.get("/api/route2", function(req,res){
		res.end();
	})
	app.get("/api/route3", function(req,res){
		res.end();
	})
	app.get("/api/rouet4", function(req,res){
		res.end();
	})
};

module.exports = expressify;