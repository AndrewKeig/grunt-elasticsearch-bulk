# grunt-elasticsearch-bulk

Grunt task for working with the elasticsearch bulk api

## Getting Started
This plugin requires Grunt `~0.4.1

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```
npm install grunt-elasticsearch-bulk --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```
grunt.loadNpmTasks('grunt-elasticsearch-bulk');
```

## The elasticsearchbulk task

### Overview
In your project's Gruntfile, add a section named `elasticsearchbulk` to the data object passed into `grunt.initConfig()`.

```
grunt.initConfig({
    elasticsearchbulk: {
      src: {
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
```

## Options

grunt-elasticsearch-bulk uses `elasticsearch.js`; so simply provide the options used there; where relevant for bulk api:

http://www.elasticsearch.org/guide/en/elasticsearch/client/javascript-api/current/configuration.html




