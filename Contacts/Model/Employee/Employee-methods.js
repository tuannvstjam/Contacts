

model.Employee.methods.getData = function() {
	// Add your code here;
	var xxx=ds.Employee.compute("salary","firstName");
	return xxx;
};
model.Employee.methods.getData.scope="public";

model.Employee.collectionMethods.demo = function() {
	// Add your code here;
	var xxx=ds.Employee.compute("salary","firstName");
	return xxx;
};
model.Employee.collectionMethods.demo.scope="public";