const chai = require("chai");
const expect = require("chai").expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
//require('dotenv').config()

const api = chai.request("https://api.todoist.com");

module.exports = function (){
	describe("Update A Project", function () {
		it("Success Update A Project", function (done) {
			api.post("/rest/v1/projects/"+global.idProject)
	      	.set("Authorization", "Bearer ea19ce9f20f84bcf0fe813977ff903b58b8bf73c")
	      	.send({
		    	name: "Test Update"
		    })
		    .end(function (err, res) {
		        expect(res.status).to.equals(204);
		        done();
		    });
		});
	})
}