'use strict';

module.exports = function(grunt) {

  grunt.loadTasks('./tasks');

  grunt.initConfig({
    
    elasticsearchbulk: {
      files: {
        src : ['data/user.json', 'data/role.json']
      },
      options: {      
        elastic: {
          host: "http://127.0.0.1:9200",
          client: {
            apiVersion: "1.0",
            log: "info"
          }
        }
      }
    }
  });
};