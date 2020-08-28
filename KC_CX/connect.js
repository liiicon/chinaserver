
var oracledb = require('oracledb');



var query = function async(sql, callback) {
    oracledb.getConnection(
        {
            user: 'c##scott120',
            password: 'oracle123',
            connectString: '120.79.238.205/orcl',
        },

        async function (err, connection) {
            if (err) {
                console.error(err.message);
                return;
            } else {
                console.log("连接成功");
            }

            await connection.execute(sql, [], function (err, result) {
                if (err) {
                    console.error(err.message);
                    doRelease(connection);
                    return;
                }

                //console.log(result.metaData);

                callback(result.rows.map((v) => {
                    return result.metaData.reduce((p, key, i) => {
                        p[key.name] = v[i];
                        return p;
                    }, {})
                }));

                doRelease(connection);

            });

        }

    );

}



function doRelease(connection) {

    connection.close(

        function (err) {

            if (err)

                console.error(err.message);

        });

}



exports.query = query;

