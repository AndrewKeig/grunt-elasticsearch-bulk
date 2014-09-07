'use strict';

var _ = require('lodash');
var elastic = require('elasticsearch');

module.exports = function(grunt) {
  grunt.registerMultiTask("elasticsearchbulk", "Grunt task for working with the elasticsearch bulk api", function() {
    var done = this.async();
    var options = this.options();
    var files = this.filesSrc;

   	var defaults = { 
   		elastic : {
	    host: 'http://127.0.0.1:9200',
	    client: {
	      apiVersion: "1.0",
	      log: "warning"
	    }
	  }
	};

	var options = _.extend(defaults, options);
	var client = new elastic.Client(options);

  	files.forEach(function(file){
  		grunt.log.ok('starting elastic search bulk for ', file);

    	var data = grunt.file.readJSON(file);

    	client.bulk({ body: data }, function(err){
    		if (err) {
      			grunt.fail.warn('Unable to connect to elastic search');
    		}
			
			if (!err) {
				grunt.log.ok('elastic search bulk run complete.');
			}
		});
  	});

  	done();
  });
};