module.exports = function override(config, env) {
    config = rewireReactHotLoader(config, env);
    return config;
  }