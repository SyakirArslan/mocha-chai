const chai = require("chai");
const expect = require("chai").expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
require('dotenv').config()

const api = chai.request(process.env.BASE_URL);

module.exports = function (){
	describe("Create New Project", function () {
		//Positif
		it("Passed : Success Create New Project", function (done) {
			api.post("/rest/v1/projects")
	      	.set("Authorization", "Bearer ea19ce9f20f84bcf0fe813977ff903b58b8bf73c")
	      	.send({
		    	name: "Test Mocha ayam"
		    })
		    .end(function (err, res) {
		        expect(res.status).to.equals(200);
				global.idProject=res.body.id
		        done();
		    });
		});
		//Negatif
		it("Failed : Invalid Token", function (done) {
			api.post("/rest/v1/projects")
	      	.set("Authorization", "Bearer 1ea19ce9f20f84bcf0fe813977ff903b58b8bf73c")
	      	.send({
		    	name: "Test Mocha QA"
		    })
		    .end(function (err, res) {
		        expect(res.status).to.equals(401);
		        done();
		    });
		});
		//Negatif
		it("Failed : Null", function (done) {
			api.post("/rest/v1/projects")
	      	.set("Authorization", "Bearer ea19ce9f20f84bcf0fe813977ff903b58b8bf73c")
	      	.send({
		    	name: ""
		    })
		    .end(function (err, res) {
		        expect(res.status).to.equals(400);
		        done();
		    });
		});
	})
}