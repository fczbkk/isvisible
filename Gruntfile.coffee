module.exports = (grunt) ->

  require('load-grunt-tasks')(grunt)

  grunt.initConfig

    pkg: grunt.file.readJSON 'package.json'

    banner:
      """
        /*
        <%= pkg.title %>, v<%= pkg.version %>
        by <%= pkg.author %>
        <%= pkg.homepage %>
        */

      """

    coffeelint:
      src: 'src/coffee/*.coffee'
      test: 'test/src/*.coffee'

    jasmine:
      default:
        src: ['build/*.js', '!build/*.min.js']
        options:
          keepRunner: false
          specs: 'test/spec/<%= pkg.name %>.spec.js'

    coffee:
      src:
        files:
          'build/<%= pkg.name %>.js' : 'src/coffee/*.coffee'
      test:
        files:
          'test/spec/<%= pkg.name %>.spec.js' : 'test/src/*.coffee'

    uglify:
      default:
        options:
          banner: "<%= banner %>"
        files:
          'build/<%= pkg.name %>.min.js' : 'build/<%= pkg.name %>.js'

    watch:
      options:
        atBegin: true
      src:
        files: ['src/coffee/*.coffee']
        tasks: ['coffeelint:src', 'coffee:src', 'jasmine']
      test:
        files: ['test/src/*.coffee']
        tasks: ['coffeelint:test', 'coffee:test', 'jasmine']


    bump:
      options:
        files: [
          'package.json'

          'bower.json'

        ]
        updateConfigs: ['pkg']
        commitFiles: ['-a']
        pushTo: 'origin'


  changelog:
    options: {}


  grunt.registerTask 'dev', [
    'coffeelint'
    'coffee'
    'jasmine'
    'uglify'
  ]


  # Constructs the code, runs tests and if everyting is OK, creates a minified
  # version ready for production. This task is intended to be run manually.
  grunt.registerTask 'build', 'Bumps version and builds JS.', (version_type) ->
    version_type = 'patch' unless version_type in ['patch', 'minor', 'major']
    grunt.task.run [
      "bump-only:#{version_type}"
      'dev'
      'changelog'
      'bump-commit'
    ]


  grunt.registerTask 'default', [
    'watch'
  ]
