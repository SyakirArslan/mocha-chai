const chai = require("chai");
const expect = require("chai").expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
require('dotenv').config()

const api = chai.request(process.env.BASE_URL);

module.exports = function (){
	describe("Get A Project", function () {
		it("Success Get A Project", function (done) {
			api.get("/rest/v1/projects/"+global.idProject)
	      	.set("Authorization", "Bearer ea19ce9f20f84bcf0fe813977ff903b58b8bf73c")
		    .end(function (err, res) {
		        expect(res.status).to.equals(200);
		        done();
		    });
		});
	})
}