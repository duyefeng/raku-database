### author 杜冶锋
### version 1.0.0
### update—time 2016/12/28

### raku-database模块 配置方法
    下载 raku-database.js 入口文件
    下载 package.json 包管理文件
    然后 当前目录 $ npm install
    数据库json文件 格式 [
        {
            "host" :  主机名(eg. "127.0.0.1"),
            "user" :  用户名(eg. "root"),             
            "password" : 密码(eg. "root"),      
            "port" : 端口号(eg. "3306"),                  
            "database": 数据库名(eg. "test")
        }
    ]
### raku-database模块 API
    
    主入口文件 
    var rakuDatabase = require("./database/raku-database"); 
    ...
    ...
    var myDatabase = [];
    rakuDatabase.init('./database.example.json',function(result) {
        myDatabase = result;  //构建个变量存储数据库数组,数据库排列顺序按照json顺序
    });
    ...
    ...
    ...
    
    #### 打开数据库 // 表示已打开该数据库
    myDatabase[0].open() 

    #### 连接数据库 // 表示已建立与该数据库的连接
    myDatabase[0].connect() 

    #### 查询某表所有字段 // SQL = 'select * from table_name',result 表示查询结果， err 表示查询错误
    myDatabase[0].selectAll('table_name',function (err, result) {
        ... callback code 
        ... callback code
    });

    #### 关闭数据库 // 表示关闭数据库
    myDatabase[0].close()