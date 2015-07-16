module.exports = (config) ->

  config.set

    basePath: '.'
    reporters: ['mocha']
    frameworks: ['jasmine']
    browsers: [
      # 'Chrome'
      # 'Firefox'
      # 'Safari'
      # 'Opera'
      'PhantomJS'
    ]
    files: [
      'bower_components/expose/lib/expose.js'
      'build/*.js'
      'test/spec/*.spec.js'
    ]
