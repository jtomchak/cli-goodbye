const { loadBinding } = require('@node-rs/helper')

/**
 * __dirname means load native addon from current dir
 * 'cli-goodbye' means native addon name is `cli-goodbye`
 * the first arguments was decided by `napi.name` field in `package.json`
 * the second arguments was decided by `name` field in `package.json`
 * loadBinding helper will load `cli-goodbye.[PLATFORM].node` from `__dirname` first
 * If failed to load addon, it will fallback to load from `@jtomchak/cli-goodbye-[PLATFORM]`
 */
module.exports = loadBinding(__dirname, 'cli-goodbye', '@jtomchak/cli-goodbye')
