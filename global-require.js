global.appRequire = function appRequire(module) {
  const idx = module.indexOf('~')
  if (idx !== -1) {
    return require(`${__dirname}/${module.substring(idx+1)}`)
  }
  return require(module)
}
