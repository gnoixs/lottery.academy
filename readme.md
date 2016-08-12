#创建git仓库
	git init

#创建项目
	express -e
	npm install
	npm start

#集成gulp
	npm install gulp gulp-concat gulp-clean-css gulp-minify-html gulp-rename gulp-uglify gulp-jshint 
				gulp-imagemin gulp-sass gulp-autoprefixer gulp-notify gulp-clean gulp-cache 
	--save-dev
	gulpfile.js

#集成bower
	npm install bower --save-dev
	.bowerrc
	bower init   bower.json
	bower install jquery#1.8.3 --save

