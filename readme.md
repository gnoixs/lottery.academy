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

#接口信息
	首页计划查询
	http://www.21myplan.com/api/planapi/search?page=1&size=10&type=1&order=1
	
	上一期开奖号码查询
	http://www.21myplan.com/api/planapi/getopenresult
	
	计划详情查询
	http://www.21myplan.com/api/planapi/getplan?id=1208  
	主要响应说明:
	Data.Items.DisplayName:显示的名称 如【三星单式】【100注】【3期】安迪前三
	Data.CurrentResult.BetsNumber:当前奖期计划投注号码
