var loaderUtils = require("loader-utils");

module.exports = function() {};
module.exports.pitch = function(remainingRequest) {
	this.cacheable && this.cacheable()
	var moduleRequest = loaderUtils.stringifyRequest(this, "!!" + remainingRequest)

	return [
	  "var pluginActions = require('redux-plugins-immutable').pluginActions",
		'var plugin = require(' + moduleRequest + ').default',
		'module.exports = plugin.update("pluginWasAdded", function(wrapped) {',
		'  return function(store) {',
		'    wrapped && wrapped(store)',
		'		 if (module.hot) {',
		'  	   module.hot.accept(' + moduleRequest + ', function() {',
		'		     plugin = require(' + moduleRequest + ').default',
		'		     store.dispatch(pluginActions.replacePlugin(plugin))',
		'      })',
		'    }',
		'  }',
		'})',
	].join("\n");
};
