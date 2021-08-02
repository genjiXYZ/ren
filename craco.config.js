/*
 * @Author: your name
 * @Date: 2021-07-30 01:09:39
 * @LastEditTime: 2021-07-30 01:17:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /temporal/craco.config.js
 */
module.exports = {
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer')
            ]
        }
    }
}
