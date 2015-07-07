app.factory('sparqlQueries', ['$http', function($http) {

	return {
		getData: function() { 
			return $http.get('json/sparql.json')
				.success(function(data) {
					return data;
				})
				.error(function(err) {
				  	return err;
				}); 
		},
		getQueryStr: function(data, queryName) {
			var sparqlQuery = 'QUERY NOT FOUND';
			for (var i = 0; i< data.sparqlQueries.length; i++) {
				if (data.sparqlQueries[i].name === queryName) {
					var sparqlQuery = data.sparqlQueries[i].query.join(' ');
				}
			}
			return sparqlQuery;
		}
	}

}]);

