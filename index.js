var Transformer = require("babel-core").Transformer;
// FIXME: This is considered internal. Need to find a better way to do this.
var tpath = "babel-core/lib/transformation/transformers";
var _ForOfStatementArray = require(tpath+"/es6/for-of")._ForOfStatementArray;

module.exports = new Transformer("for-of-array-only", {
	ForOfStatement: function(node, parent, scope, file) {
		return _ForOfStatementArray.call(this, node, scope, file);
	}
});
