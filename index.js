const { loadBinding } = require('@node-rs/helper')

/**
 * __dirname means load native addon from current dir
 * 'qwik-optimizer' means native addon name is `qwik-optimizer`
 * the first arguments was decided by `napi.name` field in `package.json`
 * the second arguments was decided by `name` field in `package.json`
 * loadBinding helper will load `qwik-optimizer.[PLATFORM].node` from `__dirname` first
 * If failed to load addon, it will fallback to load from `@builder.io/qwik-[PLATFORM]`
 */
module.exports = loadBinding(__dirname, 'qwik-optimizer', '@builder.io/qwik')
