//包装函数  Gruntfile

module.exports = function(){

    'use strict';

    grunt.initConfig({

        //
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*!\n'+
                ' * admin-sgj v<%= pkg.version %>' +
                ' */\n'


    });


    grunt.registerTask('default',[]);

}