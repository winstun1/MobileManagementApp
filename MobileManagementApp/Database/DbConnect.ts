// https://www.infoq.com/articles/typescript-mysql/

const DbConnect = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "",
    "database": "MobileManagementApp",
    "syncrhonize": true,
    "logging": false,
    "entities": [
        "src/entity/**/*.ts"
    ],
    "migrations": [
        "src/migration/**/*.ts"
    ],
    "subscribers":[
        "src/subscriber/**/*.ts"
    ]
}

export default DbConnect