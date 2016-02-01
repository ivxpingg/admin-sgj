//包装函数  Gruntfile

module.exports = function(){

    'use strict';

    grunt.initConfig({

        //
        pkg: grunt.file.readJSON('package.json')
      //  banner: '/*!\n'+
       //         ' * admin-sgj v<%= pkg.version %>' +
       //         ' */\n'


    });
     
    //sass
    grunt.loadNpmTasks('grunt-contrib-sass');
    //合并文件
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default',['']);

}