const path = require('path');

module.exports = {
    mode:"development",
    entry:"./source/index.js",
    output:{
        path:path.resolve(__dirname, "dist"),
        filename:'index_bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}