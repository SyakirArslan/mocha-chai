const chai = require("chai");
const expect = require("chai").expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
require('dotenv').config()

const api = chai.request(process.env.BASE_URL);

module.exports = function (){
	describe("Delete A Project", function () {
		it("Success Delete A Project", function (done) {
			api.delete("/rest/v1/projects/"+global.idProject)
	      	.set("Authorization", "Bearer ea19ce9f20f84bcf0fe813977ff903b58b8bf73c")
		    .end(function (err, res) {
		        expect(res.status).to.equals(204);
		        done();
		    });
		});
	})
}