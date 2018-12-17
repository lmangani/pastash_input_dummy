var base_input = require('@pastash/pastash').base_input,
  util = require('util'),
  logger = require('@pastash/pastash').logger;

function InputDummy() {
  base_input.BaseInput.call(this);
  this.mergeConfig(this.unserializer_config());
  this.mergeConfig({
    name: 'Dummy',
    start_hook: this.start,
  });
}

util.inherits(InputDummy, base_input.BaseInput);

InputDummy.prototype.start = function(callback) {
  logger.info('Start Dummy Input');
  this.emit('data', {
        'message': 'One Dummy String!' 
      });
};

InputDummy.prototype.close = function(callback) {
  logger.info('Closing Dummy Input');
  callback();
};

exports.create = function() {
  return new InputDummy();
};
