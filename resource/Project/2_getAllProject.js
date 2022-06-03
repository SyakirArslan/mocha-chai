const chai = require("chai");
const expect = require("chai").expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
//require('dotenv').config()

const api = chai.request("https://api.todoist.com");

module.exports = function (){
	describe("Get All Project", function () {
		it("Success Get All Project", function (done) {
			api.get("/rest/v1/projects")
	      	.set("Authorization", "Bearer ea19ce9f20f84bcf0fe813977ff903b58b8bf73c")
	      	// .send({
		    // 	email: "johndoe@example.com",
		    //     password: "password",
		    // })
		    .end(function (err, res) {
		        expect(res.status).to.equals(200);
		        done();
		    });
		});

        it("Failed Get All Project", function (done) {
			api.get("/rest/v1/projects")
	      	.set("Authorization", "Bearer invalidtoken")
	      	// .send({
		    // 	email: "johndoe@example.com",
		    //     password: "password",
		    // })
		    .end(function (err, res) {
		        expect(res.status).to.equals(401);
		        done();
		    });
		});
	})
}