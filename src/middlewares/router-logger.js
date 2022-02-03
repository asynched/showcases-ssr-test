const routerLogger = (logger) => (req, res, next) => {
  logger(`[INFO] ${req.method} ${req.url} - ${new Date().toISOString()}`)
  next()
}

export default routerLogger
