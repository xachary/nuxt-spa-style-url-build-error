/*global process:true*/
/*global require:true*/

let base = require('../nuxt.config')

let env = process.env.NODE_ENV ? process.env.NODE_ENV : 'production'

let config = env === 'production' ? base.env.prod : base.env.dev
console.warn(Object.assign(process.env.base, config, {env: process.env.NODE_ENV}))
// debugger
export default Object.assign(base.env.base, config, {env: env})