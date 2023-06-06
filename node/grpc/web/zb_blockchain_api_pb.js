/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var amount_pb = require('./amount_pb.js');
var order_pb = require('./order_pb.js');
var transaction_pb = require('./transaction_pb.js');
var events_pb = require('./events_pb.js');
var transactions_api_pb = require('./transactions_api_pb.js');
goog.exportSymbol('proto.zb.dex.grpc.integration.AddressRequest', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.AssetDescription', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.AssetDescriptionResponse', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.AssetIdRequest', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.BalanceChangesFlattenResponse', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.BalanceChangesResponse', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.BalanceChangesResponse.Record', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.BroadcastRequest', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.BroadcastResponse', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.CheckedBroadcastRequest', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.CheckedBroadcastResponse', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.CheckedBroadcastResponse.Failure', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.CurrentBlockInfoResponse', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.Exception', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.ExchangeTransaction', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.ForgedOrderRequest', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.ForgedOrderResponse', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.GetBalancesRequest', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.GetBalancesResponse', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.GetOutgoingLeasingResponse', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.HasAddressScriptRequest', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.HasScriptResponse', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.IsFeatureActivatedRequest', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.IsFeatureActivatedResponse', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.RunAddressScriptRequest', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.RunAssetScriptRequest', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.RunScriptResponse', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.SignedExchangeTransaction', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.SpendableAssetBalanceRequest', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.SpendableAssetBalanceResponse', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.TransactionDiff', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.TransactionDiff.OrderFill', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.TransactionsStatusesResponse', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.UtxEvent', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.UtxEvent.Switch', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.UtxEvent.Update', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.UtxEvent.Update.Added', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.UtxEvent.Update.Removed', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.Reason', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.UtxStateResponse', null, global);
goog.exportSymbol('proto.zb.dex.grpc.integration.UtxTransaction', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.AssetIdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zb.dex.grpc.integration.AssetIdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.AssetIdRequest.displayName = 'proto.zb.dex.grpc.integration.AssetIdRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.AssetIdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.AssetIdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.AssetIdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.AssetIdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetId: msg.getAssetId_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.AssetIdRequest}
 */
proto.zb.dex.grpc.integration.AssetIdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.AssetIdRequest;
  return proto.zb.dex.grpc.integration.AssetIdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.AssetIdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.AssetIdRequest}
 */
proto.zb.dex.grpc.integration.AssetIdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAssetId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.AssetIdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.AssetIdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.AssetIdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.AssetIdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes asset_id = 1;
 * @return {string}
 */
proto.zb.dex.grpc.integration.AssetIdRequest.prototype.getAssetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes asset_id = 1;
 * This is a type-conversion wrapper around `getAssetId()`
 * @return {string}
 */
proto.zb.dex.grpc.integration.AssetIdRequest.prototype.getAssetId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAssetId()));
};


/**
 * optional bytes asset_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAssetId()`
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.AssetIdRequest.prototype.getAssetId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAssetId()));
};


/** @param {!(string|Uint8Array)} value */
proto.zb.dex.grpc.integration.AssetIdRequest.prototype.setAssetId = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.AddressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zb.dex.grpc.integration.AddressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.AddressRequest.displayName = 'proto.zb.dex.grpc.integration.AddressRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.AddressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.AddressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.AddressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.AddressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.AddressRequest}
 */
proto.zb.dex.grpc.integration.AddressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.AddressRequest;
  return proto.zb.dex.grpc.integration.AddressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.AddressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.AddressRequest}
 */
proto.zb.dex.grpc.integration.AddressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.AddressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.AddressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.AddressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.AddressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes address = 1;
 * @return {string}
 */
proto.zb.dex.grpc.integration.AddressRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.zb.dex.grpc.integration.AddressRequest.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.AddressRequest.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.zb.dex.grpc.integration.AddressRequest.prototype.setAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.HasScriptResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zb.dex.grpc.integration.HasScriptResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.HasScriptResponse.displayName = 'proto.zb.dex.grpc.integration.HasScriptResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.HasScriptResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.HasScriptResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.HasScriptResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.HasScriptResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    has: jspb.Message.getFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.HasScriptResponse}
 */
proto.zb.dex.grpc.integration.HasScriptResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.HasScriptResponse;
  return proto.zb.dex.grpc.integration.HasScriptResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.HasScriptResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.HasScriptResponse}
 */
proto.zb.dex.grpc.integration.HasScriptResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHas(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.HasScriptResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.HasScriptResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.HasScriptResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.HasScriptResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHas();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool has = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.zb.dex.grpc.integration.HasScriptResponse.prototype.getHas = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.zb.dex.grpc.integration.HasScriptResponse.prototype.setHas = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.RunScriptResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zb.dex.grpc.integration.RunScriptResponse.oneofGroups_);
};
goog.inherits(proto.zb.dex.grpc.integration.RunScriptResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.RunScriptResponse.displayName = 'proto.zb.dex.grpc.integration.RunScriptResponse';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zb.dex.grpc.integration.RunScriptResponse.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.zb.dex.grpc.integration.RunScriptResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  WRONG_INPUT: 1,
  SCRIPT_ERROR: 2,
  UNEXPECTED_RESULT: 3,
  EXCEPTION: 4,
  DENIED: 5
};

/**
 * @return {proto.zb.dex.grpc.integration.RunScriptResponse.ResultCase}
 */
proto.zb.dex.grpc.integration.RunScriptResponse.prototype.getResultCase = function() {
  return /** @type {proto.zb.dex.grpc.integration.RunScriptResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.zb.dex.grpc.integration.RunScriptResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.RunScriptResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.RunScriptResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.RunScriptResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.RunScriptResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    wrongInput: jspb.Message.getFieldWithDefault(msg, 1, ""),
    scriptError: jspb.Message.getFieldWithDefault(msg, 2, ""),
    unexpectedResult: jspb.Message.getFieldWithDefault(msg, 3, ""),
    exception: (f = msg.getException()) && proto.zb.dex.grpc.integration.Exception.toObject(includeInstance, f),
    denied: (f = msg.getDenied()) && google_protobuf_empty_pb.Empty.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.RunScriptResponse}
 */
proto.zb.dex.grpc.integration.RunScriptResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.RunScriptResponse;
  return proto.zb.dex.grpc.integration.RunScriptResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.RunScriptResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.RunScriptResponse}
 */
proto.zb.dex.grpc.integration.RunScriptResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWrongInput(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setScriptError(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnexpectedResult(value);
      break;
    case 4:
      var value = new proto.zb.dex.grpc.integration.Exception;
      reader.readMessage(value,proto.zb.dex.grpc.integration.Exception.deserializeBinaryFromReader);
      msg.setException(value);
      break;
    case 5:
      var value = new google_protobuf_empty_pb.Empty;
      reader.readMessage(value,google_protobuf_empty_pb.Empty.deserializeBinaryFromReader);
      msg.setDenied(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.RunScriptResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.RunScriptResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.RunScriptResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.RunScriptResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getException();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.zb.dex.grpc.integration.Exception.serializeBinaryToWriter
    );
  }
  f = message.getDenied();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_empty_pb.Empty.serializeBinaryToWriter
    );
  }
};


/**
 * optional string wrong_input = 1;
 * @return {string}
 */
proto.zb.dex.grpc.integration.RunScriptResponse.prototype.getWrongInput = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.zb.dex.grpc.integration.RunScriptResponse.prototype.setWrongInput = function(value) {
  jspb.Message.setOneofField(this, 1, proto.zb.dex.grpc.integration.RunScriptResponse.oneofGroups_[0], value);
};


proto.zb.dex.grpc.integration.RunScriptResponse.prototype.clearWrongInput = function() {
  jspb.Message.setOneofField(this, 1, proto.zb.dex.grpc.integration.RunScriptResponse.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.zb.dex.grpc.integration.RunScriptResponse.prototype.hasWrongInput = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string script_error = 2;
 * @return {string}
 */
proto.zb.dex.grpc.integration.RunScriptResponse.prototype.getScriptError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.zb.dex.grpc.integration.RunScriptResponse.prototype.setScriptError = function(value) {
  jspb.Message.setOneofField(this, 2, proto.zb.dex.grpc.integration.RunScriptResponse.oneofGroups_[0], value);
};


proto.zb.dex.grpc.integration.RunScriptResponse.prototype.clearScriptError = function() {
  jspb.Message.setOneofField(this, 2, proto.zb.dex.grpc.integration.RunScriptResponse.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.zb.dex.grpc.integration.RunScriptResponse.prototype.hasScriptError = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string unexpected_result = 3;
 * @return {string}
 */
proto.zb.dex.grpc.integration.RunScriptResponse.prototype.getUnexpectedResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.zb.dex.grpc.integration.RunScriptResponse.prototype.setUnexpectedResult = function(value) {
  jspb.Message.setOneofField(this, 3, proto.zb.dex.grpc.integration.RunScriptResponse.oneofGroups_[0], value);
};


proto.zb.dex.grpc.integration.RunScriptResponse.prototype.clearUnexpectedResult = function() {
  jspb.Message.setOneofField(this, 3, proto.zb.dex.grpc.integration.RunScriptResponse.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.zb.dex.grpc.integration.RunScriptResponse.prototype.hasUnexpectedResult = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Exception exception = 4;
 * @return {?proto.zb.dex.grpc.integration.Exception}
 */
proto.zb.dex.grpc.integration.RunScriptResponse.prototype.getException = function() {
  return /** @type{?proto.zb.dex.grpc.integration.Exception} */ (
    jspb.Message.getWrapperField(this, proto.zb.dex.grpc.integration.Exception, 4));
};


/** @param {?proto.zb.dex.grpc.integration.Exception|undefined} value */
proto.zb.dex.grpc.integration.RunScriptResponse.prototype.setException = function(value) {
  jspb.Message.setOneofWrapperField(this, 4, proto.zb.dex.grpc.integration.RunScriptResponse.oneofGroups_[0], value);
};


proto.zb.dex.grpc.integration.RunScriptResponse.prototype.clearException = function() {
  this.setException(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.zb.dex.grpc.integration.RunScriptResponse.prototype.hasException = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Empty denied = 5;
 * @return {?proto.google.protobuf.Empty}
 */
proto.zb.dex.grpc.integration.RunScriptResponse.prototype.getDenied = function() {
  return /** @type{?proto.google.protobuf.Empty} */ (
    jspb.Message.getWrapperField(this, google_protobuf_empty_pb.Empty, 5));
};


/** @param {?proto.google.protobuf.Empty|undefined} value */
proto.zb.dex.grpc.integration.RunScriptResponse.prototype.setDenied = function(value) {
  jspb.Message.setOneofWrapperField(this, 5, proto.zb.dex.grpc.integration.RunScriptResponse.oneofGroups_[0], value);
};


proto.zb.dex.grpc.integration.RunScriptResponse.prototype.clearDenied = function() {
  this.setDenied(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.zb.dex.grpc.integration.RunScriptResponse.prototype.hasDenied = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.TransactionsStatusesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zb.dex.grpc.integration.TransactionsStatusesResponse.repeatedFields_, null);
};
goog.inherits(proto.zb.dex.grpc.integration.TransactionsStatusesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.TransactionsStatusesResponse.displayName = 'proto.zb.dex.grpc.integration.TransactionsStatusesResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zb.dex.grpc.integration.TransactionsStatusesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.TransactionsStatusesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.TransactionsStatusesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.TransactionsStatusesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.TransactionsStatusesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionsStatutesList: jspb.Message.toObjectList(msg.getTransactionsStatutesList(),
    transactions_api_pb.TransactionStatus.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.TransactionsStatusesResponse}
 */
proto.zb.dex.grpc.integration.TransactionsStatusesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.TransactionsStatusesResponse;
  return proto.zb.dex.grpc.integration.TransactionsStatusesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.TransactionsStatusesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.TransactionsStatusesResponse}
 */
proto.zb.dex.grpc.integration.TransactionsStatusesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new transactions_api_pb.TransactionStatus;
      reader.readMessage(value,transactions_api_pb.TransactionStatus.deserializeBinaryFromReader);
      msg.addTransactionsStatutes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.TransactionsStatusesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.TransactionsStatusesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.TransactionsStatusesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.TransactionsStatusesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionsStatutesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      transactions_api_pb.TransactionStatus.serializeBinaryToWriter
    );
  }
};


/**
 * repeated zb.node.grpc.TransactionStatus transactions_statutes = 1;
 * @return {!Array<!proto.zb.node.grpc.TransactionStatus>}
 */
proto.zb.dex.grpc.integration.TransactionsStatusesResponse.prototype.getTransactionsStatutesList = function() {
  return /** @type{!Array<!proto.zb.node.grpc.TransactionStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, transactions_api_pb.TransactionStatus, 1));
};


/** @param {!Array<!proto.zb.node.grpc.TransactionStatus>} value */
proto.zb.dex.grpc.integration.TransactionsStatusesResponse.prototype.setTransactionsStatutesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.zb.node.grpc.TransactionStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zb.node.grpc.TransactionStatus}
 */
proto.zb.dex.grpc.integration.TransactionsStatusesResponse.prototype.addTransactionsStatutes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.zb.node.grpc.TransactionStatus, opt_index);
};


proto.zb.dex.grpc.integration.TransactionsStatusesResponse.prototype.clearTransactionsStatutesList = function() {
  this.setTransactionsStatutesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.BroadcastRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zb.dex.grpc.integration.BroadcastRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.BroadcastRequest.displayName = 'proto.zb.dex.grpc.integration.BroadcastRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.BroadcastRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.BroadcastRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.BroadcastRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.BroadcastRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    transaction: (f = msg.getTransaction()) && proto.zb.dex.grpc.integration.SignedExchangeTransaction.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.BroadcastRequest}
 */
proto.zb.dex.grpc.integration.BroadcastRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.BroadcastRequest;
  return proto.zb.dex.grpc.integration.BroadcastRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.BroadcastRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.BroadcastRequest}
 */
proto.zb.dex.grpc.integration.BroadcastRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zb.dex.grpc.integration.SignedExchangeTransaction;
      reader.readMessage(value,proto.zb.dex.grpc.integration.SignedExchangeTransaction.deserializeBinaryFromReader);
      msg.setTransaction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.BroadcastRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.BroadcastRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.BroadcastRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.BroadcastRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.zb.dex.grpc.integration.SignedExchangeTransaction.serializeBinaryToWriter
    );
  }
};


/**
 * optional SignedExchangeTransaction transaction = 1;
 * @return {?proto.zb.dex.grpc.integration.SignedExchangeTransaction}
 */
proto.zb.dex.grpc.integration.BroadcastRequest.prototype.getTransaction = function() {
  return /** @type{?proto.zb.dex.grpc.integration.SignedExchangeTransaction} */ (
    jspb.Message.getWrapperField(this, proto.zb.dex.grpc.integration.SignedExchangeTransaction, 1));
};


/** @param {?proto.zb.dex.grpc.integration.SignedExchangeTransaction|undefined} value */
proto.zb.dex.grpc.integration.BroadcastRequest.prototype.setTransaction = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.zb.dex.grpc.integration.BroadcastRequest.prototype.clearTransaction = function() {
  this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.zb.dex.grpc.integration.BroadcastRequest.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.BroadcastResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zb.dex.grpc.integration.BroadcastResponse.oneofGroups_);
};
goog.inherits(proto.zb.dex.grpc.integration.BroadcastResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.BroadcastResponse.displayName = 'proto.zb.dex.grpc.integration.BroadcastResponse';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zb.dex.grpc.integration.BroadcastResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.zb.dex.grpc.integration.BroadcastResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  ADDED: 1,
  FAILED: 2
};

/**
 * @return {proto.zb.dex.grpc.integration.BroadcastResponse.ResultCase}
 */
proto.zb.dex.grpc.integration.BroadcastResponse.prototype.getResultCase = function() {
  return /** @type {proto.zb.dex.grpc.integration.BroadcastResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.zb.dex.grpc.integration.BroadcastResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.BroadcastResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.BroadcastResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.BroadcastResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.BroadcastResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    added: jspb.Message.getFieldWithDefault(msg, 1, false),
    failed: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.BroadcastResponse}
 */
proto.zb.dex.grpc.integration.BroadcastResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.BroadcastResponse;
  return proto.zb.dex.grpc.integration.BroadcastResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.BroadcastResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.BroadcastResponse}
 */
proto.zb.dex.grpc.integration.BroadcastResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAdded(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFailed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.BroadcastResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.BroadcastResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.BroadcastResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.BroadcastResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bool added = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.zb.dex.grpc.integration.BroadcastResponse.prototype.getAdded = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.zb.dex.grpc.integration.BroadcastResponse.prototype.setAdded = function(value) {
  jspb.Message.setOneofField(this, 1, proto.zb.dex.grpc.integration.BroadcastResponse.oneofGroups_[0], value);
};


proto.zb.dex.grpc.integration.BroadcastResponse.prototype.clearAdded = function() {
  jspb.Message.setOneofField(this, 1, proto.zb.dex.grpc.integration.BroadcastResponse.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.zb.dex.grpc.integration.BroadcastResponse.prototype.hasAdded = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string failed = 2;
 * @return {string}
 */
proto.zb.dex.grpc.integration.BroadcastResponse.prototype.getFailed = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.zb.dex.grpc.integration.BroadcastResponse.prototype.setFailed = function(value) {
  jspb.Message.setOneofField(this, 2, proto.zb.dex.grpc.integration.BroadcastResponse.oneofGroups_[0], value);
};


proto.zb.dex.grpc.integration.BroadcastResponse.prototype.clearFailed = function() {
  jspb.Message.setOneofField(this, 2, proto.zb.dex.grpc.integration.BroadcastResponse.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.zb.dex.grpc.integration.BroadcastResponse.prototype.hasFailed = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.CheckedBroadcastRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zb.dex.grpc.integration.CheckedBroadcastRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.CheckedBroadcastRequest.displayName = 'proto.zb.dex.grpc.integration.CheckedBroadcastRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.CheckedBroadcastRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.CheckedBroadcastRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.CheckedBroadcastRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.CheckedBroadcastRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    transaction: (f = msg.getTransaction()) && proto.zb.dex.grpc.integration.SignedExchangeTransaction.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.CheckedBroadcastRequest}
 */
proto.zb.dex.grpc.integration.CheckedBroadcastRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.CheckedBroadcastRequest;
  return proto.zb.dex.grpc.integration.CheckedBroadcastRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.CheckedBroadcastRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.CheckedBroadcastRequest}
 */
proto.zb.dex.grpc.integration.CheckedBroadcastRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zb.dex.grpc.integration.SignedExchangeTransaction;
      reader.readMessage(value,proto.zb.dex.grpc.integration.SignedExchangeTransaction.deserializeBinaryFromReader);
      msg.setTransaction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.CheckedBroadcastRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.CheckedBroadcastRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.CheckedBroadcastRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.CheckedBroadcastRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.zb.dex.grpc.integration.SignedExchangeTransaction.serializeBinaryToWriter
    );
  }
};


/**
 * optional SignedExchangeTransaction transaction = 1;
 * @return {?proto.zb.dex.grpc.integration.SignedExchangeTransaction}
 */
proto.zb.dex.grpc.integration.CheckedBroadcastRequest.prototype.getTransaction = function() {
  return /** @type{?proto.zb.dex.grpc.integration.SignedExchangeTransaction} */ (
    jspb.Message.getWrapperField(this, proto.zb.dex.grpc.integration.SignedExchangeTransaction, 1));
};


/** @param {?proto.zb.dex.grpc.integration.SignedExchangeTransaction|undefined} value */
proto.zb.dex.grpc.integration.CheckedBroadcastRequest.prototype.setTransaction = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.zb.dex.grpc.integration.CheckedBroadcastRequest.prototype.clearTransaction = function() {
  this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.zb.dex.grpc.integration.CheckedBroadcastRequest.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.CheckedBroadcastResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zb.dex.grpc.integration.CheckedBroadcastResponse.oneofGroups_);
};
goog.inherits(proto.zb.dex.grpc.integration.CheckedBroadcastResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.CheckedBroadcastResponse.displayName = 'proto.zb.dex.grpc.integration.CheckedBroadcastResponse';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zb.dex.grpc.integration.CheckedBroadcastResponse.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.zb.dex.grpc.integration.CheckedBroadcastResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  UNCONFIRMED: 1,
  CONFIRMED: 2,
  FAILED: 3
};

/**
 * @return {proto.zb.dex.grpc.integration.CheckedBroadcastResponse.ResultCase}
 */
proto.zb.dex.grpc.integration.CheckedBroadcastResponse.prototype.getResultCase = function() {
  return /** @type {proto.zb.dex.grpc.integration.CheckedBroadcastResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.zb.dex.grpc.integration.CheckedBroadcastResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.CheckedBroadcastResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.CheckedBroadcastResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.CheckedBroadcastResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.CheckedBroadcastResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    unconfirmed: jspb.Message.getFieldWithDefault(msg, 1, false),
    confirmed: (f = msg.getConfirmed()) && google_protobuf_empty_pb.Empty.toObject(includeInstance, f),
    failed: (f = msg.getFailed()) && proto.zb.dex.grpc.integration.CheckedBroadcastResponse.Failure.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.CheckedBroadcastResponse}
 */
proto.zb.dex.grpc.integration.CheckedBroadcastResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.CheckedBroadcastResponse;
  return proto.zb.dex.grpc.integration.CheckedBroadcastResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.CheckedBroadcastResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.CheckedBroadcastResponse}
 */
proto.zb.dex.grpc.integration.CheckedBroadcastResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUnconfirmed(value);
      break;
    case 2:
      var value = new google_protobuf_empty_pb.Empty;
      reader.readMessage(value,google_protobuf_empty_pb.Empty.deserializeBinaryFromReader);
      msg.setConfirmed(value);
      break;
    case 3:
      var value = new proto.zb.dex.grpc.integration.CheckedBroadcastResponse.Failure;
      reader.readMessage(value,proto.zb.dex.grpc.integration.CheckedBroadcastResponse.Failure.deserializeBinaryFromReader);
      msg.setFailed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.CheckedBroadcastResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.CheckedBroadcastResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.CheckedBroadcastResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.CheckedBroadcastResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getConfirmed();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_empty_pb.Empty.serializeBinaryToWriter
    );
  }
  f = message.getFailed();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.zb.dex.grpc.integration.CheckedBroadcastResponse.Failure.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.CheckedBroadcastResponse.Failure = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zb.dex.grpc.integration.CheckedBroadcastResponse.Failure, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.CheckedBroadcastResponse.Failure.displayName = 'proto.zb.dex.grpc.integration.CheckedBroadcastResponse.Failure';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.CheckedBroadcastResponse.Failure.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.CheckedBroadcastResponse.Failure.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.CheckedBroadcastResponse.Failure} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.CheckedBroadcastResponse.Failure.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, ""),
    canRetry: jspb.Message.getFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.CheckedBroadcastResponse.Failure}
 */
proto.zb.dex.grpc.integration.CheckedBroadcastResponse.Failure.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.CheckedBroadcastResponse.Failure;
  return proto.zb.dex.grpc.integration.CheckedBroadcastResponse.Failure.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.CheckedBroadcastResponse.Failure} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.CheckedBroadcastResponse.Failure}
 */
proto.zb.dex.grpc.integration.CheckedBroadcastResponse.Failure.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanRetry(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.CheckedBroadcastResponse.Failure.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.CheckedBroadcastResponse.Failure.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.CheckedBroadcastResponse.Failure} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.CheckedBroadcastResponse.Failure.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCanRetry();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.zb.dex.grpc.integration.CheckedBroadcastResponse.Failure.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.zb.dex.grpc.integration.CheckedBroadcastResponse.Failure.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool can_retry = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.zb.dex.grpc.integration.CheckedBroadcastResponse.Failure.prototype.getCanRetry = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.zb.dex.grpc.integration.CheckedBroadcastResponse.Failure.prototype.setCanRetry = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool unconfirmed = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.zb.dex.grpc.integration.CheckedBroadcastResponse.prototype.getUnconfirmed = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.zb.dex.grpc.integration.CheckedBroadcastResponse.prototype.setUnconfirmed = function(value) {
  jspb.Message.setOneofField(this, 1, proto.zb.dex.grpc.integration.CheckedBroadcastResponse.oneofGroups_[0], value);
};


proto.zb.dex.grpc.integration.CheckedBroadcastResponse.prototype.clearUnconfirmed = function() {
  jspb.Message.setOneofField(this, 1, proto.zb.dex.grpc.integration.CheckedBroadcastResponse.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.zb.dex.grpc.integration.CheckedBroadcastResponse.prototype.hasUnconfirmed = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Empty confirmed = 2;
 * @return {?proto.google.protobuf.Empty}
 */
proto.zb.dex.grpc.integration.CheckedBroadcastResponse.prototype.getConfirmed = function() {
  return /** @type{?proto.google.protobuf.Empty} */ (
    jspb.Message.getWrapperField(this, google_protobuf_empty_pb.Empty, 2));
};


/** @param {?proto.google.protobuf.Empty|undefined} value */
proto.zb.dex.grpc.integration.CheckedBroadcastResponse.prototype.setConfirmed = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.zb.dex.grpc.integration.CheckedBroadcastResponse.oneofGroups_[0], value);
};


proto.zb.dex.grpc.integration.CheckedBroadcastResponse.prototype.clearConfirmed = function() {
  this.setConfirmed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.zb.dex.grpc.integration.CheckedBroadcastResponse.prototype.hasConfirmed = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Failure failed = 3;
 * @return {?proto.zb.dex.grpc.integration.CheckedBroadcastResponse.Failure}
 */
proto.zb.dex.grpc.integration.CheckedBroadcastResponse.prototype.getFailed = function() {
  return /** @type{?proto.zb.dex.grpc.integration.CheckedBroadcastResponse.Failure} */ (
    jspb.Message.getWrapperField(this, proto.zb.dex.grpc.integration.CheckedBroadcastResponse.Failure, 3));
};


/** @param {?proto.zb.dex.grpc.integration.CheckedBroadcastResponse.Failure|undefined} value */
proto.zb.dex.grpc.integration.CheckedBroadcastResponse.prototype.setFailed = function(value) {
  jspb.Message.setOneofWrapperField(this, 3, proto.zb.dex.grpc.integration.CheckedBroadcastResponse.oneofGroups_[0], value);
};


proto.zb.dex.grpc.integration.CheckedBroadcastResponse.prototype.clearFailed = function() {
  this.setFailed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.zb.dex.grpc.integration.CheckedBroadcastResponse.prototype.hasFailed = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.IsFeatureActivatedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zb.dex.grpc.integration.IsFeatureActivatedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.IsFeatureActivatedRequest.displayName = 'proto.zb.dex.grpc.integration.IsFeatureActivatedRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.IsFeatureActivatedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.IsFeatureActivatedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.IsFeatureActivatedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.IsFeatureActivatedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    featureId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.IsFeatureActivatedRequest}
 */
proto.zb.dex.grpc.integration.IsFeatureActivatedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.IsFeatureActivatedRequest;
  return proto.zb.dex.grpc.integration.IsFeatureActivatedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.IsFeatureActivatedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.IsFeatureActivatedRequest}
 */
proto.zb.dex.grpc.integration.IsFeatureActivatedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFeatureId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.IsFeatureActivatedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.IsFeatureActivatedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.IsFeatureActivatedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.IsFeatureActivatedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFeatureId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 feature_id = 1;
 * @return {number}
 */
proto.zb.dex.grpc.integration.IsFeatureActivatedRequest.prototype.getFeatureId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.zb.dex.grpc.integration.IsFeatureActivatedRequest.prototype.setFeatureId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.IsFeatureActivatedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zb.dex.grpc.integration.IsFeatureActivatedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.IsFeatureActivatedResponse.displayName = 'proto.zb.dex.grpc.integration.IsFeatureActivatedResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.IsFeatureActivatedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.IsFeatureActivatedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.IsFeatureActivatedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.IsFeatureActivatedResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    isActivated: jspb.Message.getFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.IsFeatureActivatedResponse}
 */
proto.zb.dex.grpc.integration.IsFeatureActivatedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.IsFeatureActivatedResponse;
  return proto.zb.dex.grpc.integration.IsFeatureActivatedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.IsFeatureActivatedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.IsFeatureActivatedResponse}
 */
proto.zb.dex.grpc.integration.IsFeatureActivatedResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActivated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.IsFeatureActivatedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.IsFeatureActivatedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.IsFeatureActivatedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.IsFeatureActivatedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsActivated();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_activated = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.zb.dex.grpc.integration.IsFeatureActivatedResponse.prototype.getIsActivated = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.zb.dex.grpc.integration.IsFeatureActivatedResponse.prototype.setIsActivated = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.AssetDescriptionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zb.dex.grpc.integration.AssetDescriptionResponse.oneofGroups_);
};
goog.inherits(proto.zb.dex.grpc.integration.AssetDescriptionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.AssetDescriptionResponse.displayName = 'proto.zb.dex.grpc.integration.AssetDescriptionResponse';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zb.dex.grpc.integration.AssetDescriptionResponse.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.zb.dex.grpc.integration.AssetDescriptionResponse.MaybeDescriptionCase = {
  MAYBE_DESCRIPTION_NOT_SET: 0,
  DESCRIPTION: 1
};

/**
 * @return {proto.zb.dex.grpc.integration.AssetDescriptionResponse.MaybeDescriptionCase}
 */
proto.zb.dex.grpc.integration.AssetDescriptionResponse.prototype.getMaybeDescriptionCase = function() {
  return /** @type {proto.zb.dex.grpc.integration.AssetDescriptionResponse.MaybeDescriptionCase} */(jspb.Message.computeOneofCase(this, proto.zb.dex.grpc.integration.AssetDescriptionResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.AssetDescriptionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.AssetDescriptionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.AssetDescriptionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.AssetDescriptionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    description: (f = msg.getDescription()) && proto.zb.dex.grpc.integration.AssetDescription.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.AssetDescriptionResponse}
 */
proto.zb.dex.grpc.integration.AssetDescriptionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.AssetDescriptionResponse;
  return proto.zb.dex.grpc.integration.AssetDescriptionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.AssetDescriptionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.AssetDescriptionResponse}
 */
proto.zb.dex.grpc.integration.AssetDescriptionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zb.dex.grpc.integration.AssetDescription;
      reader.readMessage(value,proto.zb.dex.grpc.integration.AssetDescription.deserializeBinaryFromReader);
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.AssetDescriptionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.AssetDescriptionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.AssetDescriptionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.AssetDescriptionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDescription();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.zb.dex.grpc.integration.AssetDescription.serializeBinaryToWriter
    );
  }
};


/**
 * optional AssetDescription description = 1;
 * @return {?proto.zb.dex.grpc.integration.AssetDescription}
 */
proto.zb.dex.grpc.integration.AssetDescriptionResponse.prototype.getDescription = function() {
  return /** @type{?proto.zb.dex.grpc.integration.AssetDescription} */ (
    jspb.Message.getWrapperField(this, proto.zb.dex.grpc.integration.AssetDescription, 1));
};


/** @param {?proto.zb.dex.grpc.integration.AssetDescription|undefined} value */
proto.zb.dex.grpc.integration.AssetDescriptionResponse.prototype.setDescription = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.zb.dex.grpc.integration.AssetDescriptionResponse.oneofGroups_[0], value);
};


proto.zb.dex.grpc.integration.AssetDescriptionResponse.prototype.clearDescription = function() {
  this.setDescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.zb.dex.grpc.integration.AssetDescriptionResponse.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.AssetDescription = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zb.dex.grpc.integration.AssetDescription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.AssetDescription.displayName = 'proto.zb.dex.grpc.integration.AssetDescription';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.AssetDescription.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.AssetDescription.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.AssetDescription} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.AssetDescription.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: msg.getName_asB64(),
    decimals: jspb.Message.getFieldWithDefault(msg, 2, 0),
    hasScript: jspb.Message.getFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.AssetDescription}
 */
proto.zb.dex.grpc.integration.AssetDescription.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.AssetDescription;
  return proto.zb.dex.grpc.integration.AssetDescription.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.AssetDescription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.AssetDescription}
 */
proto.zb.dex.grpc.integration.AssetDescription.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDecimals(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasScript(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.AssetDescription.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.AssetDescription.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.AssetDescription} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.AssetDescription.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getDecimals();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getHasScript();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional bytes name = 1;
 * @return {string}
 */
proto.zb.dex.grpc.integration.AssetDescription.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes name = 1;
 * This is a type-conversion wrapper around `getName()`
 * @return {string}
 */
proto.zb.dex.grpc.integration.AssetDescription.prototype.getName_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getName()));
};


/**
 * optional bytes name = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getName()`
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.AssetDescription.prototype.getName_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getName()));
};


/** @param {!(string|Uint8Array)} value */
proto.zb.dex.grpc.integration.AssetDescription.prototype.setName = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int32 decimals = 2;
 * @return {number}
 */
proto.zb.dex.grpc.integration.AssetDescription.prototype.getDecimals = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.zb.dex.grpc.integration.AssetDescription.prototype.setDecimals = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool has_script = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.zb.dex.grpc.integration.AssetDescription.prototype.getHasScript = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.zb.dex.grpc.integration.AssetDescription.prototype.setHasScript = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.RunAssetScriptRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zb.dex.grpc.integration.RunAssetScriptRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.RunAssetScriptRequest.displayName = 'proto.zb.dex.grpc.integration.RunAssetScriptRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.RunAssetScriptRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.RunAssetScriptRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.RunAssetScriptRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.RunAssetScriptRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetId: msg.getAssetId_asB64(),
    transaction: (f = msg.getTransaction()) && proto.zb.dex.grpc.integration.SignedExchangeTransaction.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.RunAssetScriptRequest}
 */
proto.zb.dex.grpc.integration.RunAssetScriptRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.RunAssetScriptRequest;
  return proto.zb.dex.grpc.integration.RunAssetScriptRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.RunAssetScriptRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.RunAssetScriptRequest}
 */
proto.zb.dex.grpc.integration.RunAssetScriptRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAssetId(value);
      break;
    case 2:
      var value = new proto.zb.dex.grpc.integration.SignedExchangeTransaction;
      reader.readMessage(value,proto.zb.dex.grpc.integration.SignedExchangeTransaction.deserializeBinaryFromReader);
      msg.setTransaction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.RunAssetScriptRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.RunAssetScriptRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.RunAssetScriptRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.RunAssetScriptRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.zb.dex.grpc.integration.SignedExchangeTransaction.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes asset_id = 1;
 * @return {string}
 */
proto.zb.dex.grpc.integration.RunAssetScriptRequest.prototype.getAssetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes asset_id = 1;
 * This is a type-conversion wrapper around `getAssetId()`
 * @return {string}
 */
proto.zb.dex.grpc.integration.RunAssetScriptRequest.prototype.getAssetId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAssetId()));
};


/**
 * optional bytes asset_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAssetId()`
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.RunAssetScriptRequest.prototype.getAssetId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAssetId()));
};


/** @param {!(string|Uint8Array)} value */
proto.zb.dex.grpc.integration.RunAssetScriptRequest.prototype.setAssetId = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional SignedExchangeTransaction transaction = 2;
 * @return {?proto.zb.dex.grpc.integration.SignedExchangeTransaction}
 */
proto.zb.dex.grpc.integration.RunAssetScriptRequest.prototype.getTransaction = function() {
  return /** @type{?proto.zb.dex.grpc.integration.SignedExchangeTransaction} */ (
    jspb.Message.getWrapperField(this, proto.zb.dex.grpc.integration.SignedExchangeTransaction, 2));
};


/** @param {?proto.zb.dex.grpc.integration.SignedExchangeTransaction|undefined} value */
proto.zb.dex.grpc.integration.RunAssetScriptRequest.prototype.setTransaction = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.zb.dex.grpc.integration.RunAssetScriptRequest.prototype.clearTransaction = function() {
  this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.zb.dex.grpc.integration.RunAssetScriptRequest.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.RunAddressScriptRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zb.dex.grpc.integration.RunAddressScriptRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.RunAddressScriptRequest.displayName = 'proto.zb.dex.grpc.integration.RunAddressScriptRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.RunAddressScriptRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.RunAddressScriptRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.RunAddressScriptRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.RunAddressScriptRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64(),
    order: (f = msg.getOrder()) && order_pb.Order.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.RunAddressScriptRequest}
 */
proto.zb.dex.grpc.integration.RunAddressScriptRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.RunAddressScriptRequest;
  return proto.zb.dex.grpc.integration.RunAddressScriptRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.RunAddressScriptRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.RunAddressScriptRequest}
 */
proto.zb.dex.grpc.integration.RunAddressScriptRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    case 2:
      var value = new order_pb.Order;
      reader.readMessage(value,order_pb.Order.deserializeBinaryFromReader);
      msg.setOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.RunAddressScriptRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.RunAddressScriptRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.RunAddressScriptRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.RunAddressScriptRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getOrder();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      order_pb.Order.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes address = 1;
 * @return {string}
 */
proto.zb.dex.grpc.integration.RunAddressScriptRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.zb.dex.grpc.integration.RunAddressScriptRequest.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.RunAddressScriptRequest.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.zb.dex.grpc.integration.RunAddressScriptRequest.prototype.setAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional zb.Order order = 2;
 * @return {?proto.zb.Order}
 */
proto.zb.dex.grpc.integration.RunAddressScriptRequest.prototype.getOrder = function() {
  return /** @type{?proto.zb.Order} */ (
    jspb.Message.getWrapperField(this, order_pb.Order, 2));
};


/** @param {?proto.zb.Order|undefined} value */
proto.zb.dex.grpc.integration.RunAddressScriptRequest.prototype.setOrder = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.zb.dex.grpc.integration.RunAddressScriptRequest.prototype.clearOrder = function() {
  this.setOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.zb.dex.grpc.integration.RunAddressScriptRequest.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.HasAddressScriptRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zb.dex.grpc.integration.HasAddressScriptRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.HasAddressScriptRequest.displayName = 'proto.zb.dex.grpc.integration.HasAddressScriptRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.HasAddressScriptRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.HasAddressScriptRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.HasAddressScriptRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.HasAddressScriptRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.HasAddressScriptRequest}
 */
proto.zb.dex.grpc.integration.HasAddressScriptRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.HasAddressScriptRequest;
  return proto.zb.dex.grpc.integration.HasAddressScriptRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.HasAddressScriptRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.HasAddressScriptRequest}
 */
proto.zb.dex.grpc.integration.HasAddressScriptRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.HasAddressScriptRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.HasAddressScriptRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.HasAddressScriptRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.HasAddressScriptRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes address = 1;
 * @return {string}
 */
proto.zb.dex.grpc.integration.HasAddressScriptRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.zb.dex.grpc.integration.HasAddressScriptRequest.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.HasAddressScriptRequest.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.zb.dex.grpc.integration.HasAddressScriptRequest.prototype.setAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.SpendableAssetBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zb.dex.grpc.integration.SpendableAssetBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.SpendableAssetBalanceRequest.displayName = 'proto.zb.dex.grpc.integration.SpendableAssetBalanceRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.SpendableAssetBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.SpendableAssetBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.SpendableAssetBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.SpendableAssetBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64(),
    assetId: msg.getAssetId_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.SpendableAssetBalanceRequest}
 */
proto.zb.dex.grpc.integration.SpendableAssetBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.SpendableAssetBalanceRequest;
  return proto.zb.dex.grpc.integration.SpendableAssetBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.SpendableAssetBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.SpendableAssetBalanceRequest}
 */
proto.zb.dex.grpc.integration.SpendableAssetBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAssetId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.SpendableAssetBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.SpendableAssetBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.SpendableAssetBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.SpendableAssetBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getAssetId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes address = 1;
 * @return {string}
 */
proto.zb.dex.grpc.integration.SpendableAssetBalanceRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.zb.dex.grpc.integration.SpendableAssetBalanceRequest.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.SpendableAssetBalanceRequest.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.zb.dex.grpc.integration.SpendableAssetBalanceRequest.prototype.setAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes asset_id = 2;
 * @return {string}
 */
proto.zb.dex.grpc.integration.SpendableAssetBalanceRequest.prototype.getAssetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes asset_id = 2;
 * This is a type-conversion wrapper around `getAssetId()`
 * @return {string}
 */
proto.zb.dex.grpc.integration.SpendableAssetBalanceRequest.prototype.getAssetId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAssetId()));
};


/**
 * optional bytes asset_id = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAssetId()`
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.SpendableAssetBalanceRequest.prototype.getAssetId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAssetId()));
};


/** @param {!(string|Uint8Array)} value */
proto.zb.dex.grpc.integration.SpendableAssetBalanceRequest.prototype.setAssetId = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.SpendableAssetBalanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zb.dex.grpc.integration.SpendableAssetBalanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.SpendableAssetBalanceResponse.displayName = 'proto.zb.dex.grpc.integration.SpendableAssetBalanceResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.SpendableAssetBalanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.SpendableAssetBalanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.SpendableAssetBalanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.SpendableAssetBalanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    balance: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.SpendableAssetBalanceResponse}
 */
proto.zb.dex.grpc.integration.SpendableAssetBalanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.SpendableAssetBalanceResponse;
  return proto.zb.dex.grpc.integration.SpendableAssetBalanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.SpendableAssetBalanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.SpendableAssetBalanceResponse}
 */
proto.zb.dex.grpc.integration.SpendableAssetBalanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.SpendableAssetBalanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.SpendableAssetBalanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.SpendableAssetBalanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.SpendableAssetBalanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBalance();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 balance = 1;
 * @return {number}
 */
proto.zb.dex.grpc.integration.SpendableAssetBalanceResponse.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.zb.dex.grpc.integration.SpendableAssetBalanceResponse.prototype.setBalance = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.repeatedFields_, null);
};
goog.inherits(proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.displayName = 'proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64(),
    assetIdsList: jspb.Message.toObjectList(msg.getAssetIdsList(),
    proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest}
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest;
  return proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest}
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    case 2:
      var value = new proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record;
      reader.readMessage(value,proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record.deserializeBinaryFromReader);
      msg.addAssetIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getAssetIdsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record.displayName = 'proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetId: msg.getAssetId_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record}
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record;
  return proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record}
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAssetId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes asset_id = 1;
 * @return {string}
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record.prototype.getAssetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes asset_id = 1;
 * This is a type-conversion wrapper around `getAssetId()`
 * @return {string}
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record.prototype.getAssetId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAssetId()));
};


/**
 * optional bytes asset_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAssetId()`
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record.prototype.getAssetId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAssetId()));
};


/** @param {!(string|Uint8Array)} value */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record.prototype.setAssetId = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes address = 1;
 * @return {string}
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.prototype.setAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated Record asset_ids = 2;
 * @return {!Array<!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record>}
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.prototype.getAssetIdsList = function() {
  return /** @type{!Array<!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record, 2));
};


/** @param {!Array<!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record>} value */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.prototype.setAssetIdsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record}
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.prototype.addAssetIds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.Record, opt_index);
};


proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest.prototype.clearAssetIdsList = function() {
  this.setAssetIdsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.repeatedFields_, null);
};
goog.inherits(proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.displayName = 'proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    balancesList: jspb.Message.toObjectList(msg.getBalancesList(),
    proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse}
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse;
  return proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse}
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record;
      reader.readMessage(value,proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record.deserializeBinaryFromReader);
      msg.addBalances(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBalancesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record.displayName = 'proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetId: msg.getAssetId_asB64(),
    balance: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record}
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record;
  return proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record}
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAssetId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getBalance();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional bytes asset_id = 1;
 * @return {string}
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record.prototype.getAssetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes asset_id = 1;
 * This is a type-conversion wrapper around `getAssetId()`
 * @return {string}
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record.prototype.getAssetId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAssetId()));
};


/**
 * optional bytes asset_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAssetId()`
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record.prototype.getAssetId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAssetId()));
};


/** @param {!(string|Uint8Array)} value */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record.prototype.setAssetId = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int64 balance = 2;
 * @return {number}
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record.prototype.setBalance = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated Record balances = 1;
 * @return {!Array<!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record>}
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.prototype.getBalancesList = function() {
  return /** @type{!Array<!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record, 1));
};


/** @param {!Array<!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record>} value */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.prototype.setBalancesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record}
 */
proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.prototype.addBalances = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.Record, opt_index);
};


proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.prototype.clearBalancesList = function() {
  this.setBalancesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.ForgedOrderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zb.dex.grpc.integration.ForgedOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.ForgedOrderRequest.displayName = 'proto.zb.dex.grpc.integration.ForgedOrderRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.ForgedOrderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.ForgedOrderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.ForgedOrderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.ForgedOrderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderId: msg.getOrderId_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.ForgedOrderRequest}
 */
proto.zb.dex.grpc.integration.ForgedOrderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.ForgedOrderRequest;
  return proto.zb.dex.grpc.integration.ForgedOrderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.ForgedOrderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.ForgedOrderRequest}
 */
proto.zb.dex.grpc.integration.ForgedOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOrderId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.ForgedOrderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.ForgedOrderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.ForgedOrderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.ForgedOrderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes order_id = 1;
 * @return {string}
 */
proto.zb.dex.grpc.integration.ForgedOrderRequest.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes order_id = 1;
 * This is a type-conversion wrapper around `getOrderId()`
 * @return {string}
 */
proto.zb.dex.grpc.integration.ForgedOrderRequest.prototype.getOrderId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOrderId()));
};


/**
 * optional bytes order_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOrderId()`
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.ForgedOrderRequest.prototype.getOrderId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOrderId()));
};


/** @param {!(string|Uint8Array)} value */
proto.zb.dex.grpc.integration.ForgedOrderRequest.prototype.setOrderId = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.ForgedOrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zb.dex.grpc.integration.ForgedOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.ForgedOrderResponse.displayName = 'proto.zb.dex.grpc.integration.ForgedOrderResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.ForgedOrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.ForgedOrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.ForgedOrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.ForgedOrderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    isForged: jspb.Message.getFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.ForgedOrderResponse}
 */
proto.zb.dex.grpc.integration.ForgedOrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.ForgedOrderResponse;
  return proto.zb.dex.grpc.integration.ForgedOrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.ForgedOrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.ForgedOrderResponse}
 */
proto.zb.dex.grpc.integration.ForgedOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsForged(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.ForgedOrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.ForgedOrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.ForgedOrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.ForgedOrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsForged();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool is_forged = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.zb.dex.grpc.integration.ForgedOrderResponse.prototype.getIsForged = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.zb.dex.grpc.integration.ForgedOrderResponse.prototype.setIsForged = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.BalanceChangesFlattenResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zb.dex.grpc.integration.BalanceChangesFlattenResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.BalanceChangesFlattenResponse.displayName = 'proto.zb.dex.grpc.integration.BalanceChangesFlattenResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.BalanceChangesFlattenResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.BalanceChangesFlattenResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.BalanceChangesFlattenResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.BalanceChangesFlattenResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64(),
    asset: msg.getAsset_asB64(),
    balance: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.BalanceChangesFlattenResponse}
 */
proto.zb.dex.grpc.integration.BalanceChangesFlattenResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.BalanceChangesFlattenResponse;
  return proto.zb.dex.grpc.integration.BalanceChangesFlattenResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.BalanceChangesFlattenResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.BalanceChangesFlattenResponse}
 */
proto.zb.dex.grpc.integration.BalanceChangesFlattenResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAsset(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.BalanceChangesFlattenResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.BalanceChangesFlattenResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.BalanceChangesFlattenResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.BalanceChangesFlattenResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getAsset_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getBalance();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional bytes address = 1;
 * @return {string}
 */
proto.zb.dex.grpc.integration.BalanceChangesFlattenResponse.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.zb.dex.grpc.integration.BalanceChangesFlattenResponse.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.BalanceChangesFlattenResponse.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.zb.dex.grpc.integration.BalanceChangesFlattenResponse.prototype.setAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes asset = 2;
 * @return {string}
 */
proto.zb.dex.grpc.integration.BalanceChangesFlattenResponse.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes asset = 2;
 * This is a type-conversion wrapper around `getAsset()`
 * @return {string}
 */
proto.zb.dex.grpc.integration.BalanceChangesFlattenResponse.prototype.getAsset_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAsset()));
};


/**
 * optional bytes asset = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAsset()`
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.BalanceChangesFlattenResponse.prototype.getAsset_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAsset()));
};


/** @param {!(string|Uint8Array)} value */
proto.zb.dex.grpc.integration.BalanceChangesFlattenResponse.prototype.setAsset = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional int64 balance = 3;
 * @return {number}
 */
proto.zb.dex.grpc.integration.BalanceChangesFlattenResponse.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.zb.dex.grpc.integration.BalanceChangesFlattenResponse.prototype.setBalance = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.BalanceChangesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zb.dex.grpc.integration.BalanceChangesResponse.repeatedFields_, null);
};
goog.inherits(proto.zb.dex.grpc.integration.BalanceChangesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.BalanceChangesResponse.displayName = 'proto.zb.dex.grpc.integration.BalanceChangesResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zb.dex.grpc.integration.BalanceChangesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.BalanceChangesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.BalanceChangesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.BalanceChangesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.BalanceChangesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    batchList: jspb.Message.toObjectList(msg.getBatchList(),
    proto.zb.dex.grpc.integration.BalanceChangesResponse.Record.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.BalanceChangesResponse}
 */
proto.zb.dex.grpc.integration.BalanceChangesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.BalanceChangesResponse;
  return proto.zb.dex.grpc.integration.BalanceChangesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.BalanceChangesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.BalanceChangesResponse}
 */
proto.zb.dex.grpc.integration.BalanceChangesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zb.dex.grpc.integration.BalanceChangesResponse.Record;
      reader.readMessage(value,proto.zb.dex.grpc.integration.BalanceChangesResponse.Record.deserializeBinaryFromReader);
      msg.addBatch(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.BalanceChangesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.BalanceChangesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.BalanceChangesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.BalanceChangesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBatchList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.zb.dex.grpc.integration.BalanceChangesResponse.Record.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.BalanceChangesResponse.Record = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zb.dex.grpc.integration.BalanceChangesResponse.Record, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.BalanceChangesResponse.Record.displayName = 'proto.zb.dex.grpc.integration.BalanceChangesResponse.Record';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.BalanceChangesResponse.Record.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.BalanceChangesResponse.Record.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.BalanceChangesResponse.Record} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.BalanceChangesResponse.Record.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64(),
    asset: msg.getAsset_asB64(),
    balance: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.BalanceChangesResponse.Record}
 */
proto.zb.dex.grpc.integration.BalanceChangesResponse.Record.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.BalanceChangesResponse.Record;
  return proto.zb.dex.grpc.integration.BalanceChangesResponse.Record.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.BalanceChangesResponse.Record} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.BalanceChangesResponse.Record}
 */
proto.zb.dex.grpc.integration.BalanceChangesResponse.Record.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAsset(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.BalanceChangesResponse.Record.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.BalanceChangesResponse.Record.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.BalanceChangesResponse.Record} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.BalanceChangesResponse.Record.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getAsset_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getBalance();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional bytes address = 1;
 * @return {string}
 */
proto.zb.dex.grpc.integration.BalanceChangesResponse.Record.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.zb.dex.grpc.integration.BalanceChangesResponse.Record.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.BalanceChangesResponse.Record.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.zb.dex.grpc.integration.BalanceChangesResponse.Record.prototype.setAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes asset = 2;
 * @return {string}
 */
proto.zb.dex.grpc.integration.BalanceChangesResponse.Record.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes asset = 2;
 * This is a type-conversion wrapper around `getAsset()`
 * @return {string}
 */
proto.zb.dex.grpc.integration.BalanceChangesResponse.Record.prototype.getAsset_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAsset()));
};


/**
 * optional bytes asset = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAsset()`
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.BalanceChangesResponse.Record.prototype.getAsset_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAsset()));
};


/** @param {!(string|Uint8Array)} value */
proto.zb.dex.grpc.integration.BalanceChangesResponse.Record.prototype.setAsset = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional int64 balance = 3;
 * @return {number}
 */
proto.zb.dex.grpc.integration.BalanceChangesResponse.Record.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.zb.dex.grpc.integration.BalanceChangesResponse.Record.prototype.setBalance = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated Record batch = 1;
 * @return {!Array<!proto.zb.dex.grpc.integration.BalanceChangesResponse.Record>}
 */
proto.zb.dex.grpc.integration.BalanceChangesResponse.prototype.getBatchList = function() {
  return /** @type{!Array<!proto.zb.dex.grpc.integration.BalanceChangesResponse.Record>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zb.dex.grpc.integration.BalanceChangesResponse.Record, 1));
};


/** @param {!Array<!proto.zb.dex.grpc.integration.BalanceChangesResponse.Record>} value */
proto.zb.dex.grpc.integration.BalanceChangesResponse.prototype.setBatchList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.zb.dex.grpc.integration.BalanceChangesResponse.Record=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zb.dex.grpc.integration.BalanceChangesResponse.Record}
 */
proto.zb.dex.grpc.integration.BalanceChangesResponse.prototype.addBatch = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.zb.dex.grpc.integration.BalanceChangesResponse.Record, opt_index);
};


proto.zb.dex.grpc.integration.BalanceChangesResponse.prototype.clearBatchList = function() {
  this.setBatchList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest.repeatedFields_, null);
};
goog.inherits(proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest.displayName = 'proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64(),
    excludeAssetIdsList: msg.getExcludeAssetIdsList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest}
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest;
  return proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest}
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addExcludeAssetIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getExcludeAssetIdsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes address = 1;
 * @return {string}
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest.prototype.setAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated bytes exclude_asset_ids = 2;
 * @return {!Array<string>}
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest.prototype.getExcludeAssetIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * repeated bytes exclude_asset_ids = 2;
 * This is a type-conversion wrapper around `getExcludeAssetIdsList()`
 * @return {!Array<string>}
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest.prototype.getExcludeAssetIdsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getExcludeAssetIdsList()));
};


/**
 * repeated bytes exclude_asset_ids = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getExcludeAssetIdsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest.prototype.getExcludeAssetIdsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getExcludeAssetIdsList()));
};


/** @param {!(Array<!Uint8Array>|Array<string>)} value */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest.prototype.setExcludeAssetIdsList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest.prototype.addExcludeAssetIds = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest.prototype.clearExcludeAssetIdsList = function() {
  this.setExcludeAssetIdsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.repeatedFields_, null);
};
goog.inherits(proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.displayName = 'proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    balancesList: jspb.Message.toObjectList(msg.getBalancesList(),
    proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse}
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse;
  return proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse}
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record;
      reader.readMessage(value,proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record.deserializeBinaryFromReader);
      msg.addBalances(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBalancesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record.displayName = 'proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetId: msg.getAssetId_asB64(),
    balance: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record}
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record;
  return proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record}
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAssetId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getBalance();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional bytes asset_id = 1;
 * @return {string}
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record.prototype.getAssetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes asset_id = 1;
 * This is a type-conversion wrapper around `getAssetId()`
 * @return {string}
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record.prototype.getAssetId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAssetId()));
};


/**
 * optional bytes asset_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAssetId()`
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record.prototype.getAssetId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAssetId()));
};


/** @param {!(string|Uint8Array)} value */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record.prototype.setAssetId = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int64 balance = 2;
 * @return {number}
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record.prototype.setBalance = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated Record balances = 1;
 * @return {!Array<!proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record>}
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.prototype.getBalancesList = function() {
  return /** @type{!Array<!proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record, 1));
};


/** @param {!Array<!proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record>} value */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.prototype.setBalancesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record}
 */
proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.prototype.addBalances = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.Record, opt_index);
};


proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.prototype.clearBalancesList = function() {
  this.setBalancesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.CurrentBlockInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zb.dex.grpc.integration.CurrentBlockInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.CurrentBlockInfoResponse.displayName = 'proto.zb.dex.grpc.integration.CurrentBlockInfoResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.CurrentBlockInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.CurrentBlockInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.CurrentBlockInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.CurrentBlockInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    height: jspb.Message.getFieldWithDefault(msg, 1, 0),
    blockId: msg.getBlockId_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.CurrentBlockInfoResponse}
 */
proto.zb.dex.grpc.integration.CurrentBlockInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.CurrentBlockInfoResponse;
  return proto.zb.dex.grpc.integration.CurrentBlockInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.CurrentBlockInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.CurrentBlockInfoResponse}
 */
proto.zb.dex.grpc.integration.CurrentBlockInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHeight(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBlockId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.CurrentBlockInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.CurrentBlockInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.CurrentBlockInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.CurrentBlockInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getBlockId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional int32 height = 1;
 * @return {number}
 */
proto.zb.dex.grpc.integration.CurrentBlockInfoResponse.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.zb.dex.grpc.integration.CurrentBlockInfoResponse.prototype.setHeight = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes block_id = 2;
 * @return {string}
 */
proto.zb.dex.grpc.integration.CurrentBlockInfoResponse.prototype.getBlockId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes block_id = 2;
 * This is a type-conversion wrapper around `getBlockId()`
 * @return {string}
 */
proto.zb.dex.grpc.integration.CurrentBlockInfoResponse.prototype.getBlockId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBlockId()));
};


/**
 * optional bytes block_id = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBlockId()`
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.CurrentBlockInfoResponse.prototype.getBlockId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBlockId()));
};


/** @param {!(string|Uint8Array)} value */
proto.zb.dex.grpc.integration.CurrentBlockInfoResponse.prototype.setBlockId = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.GetOutgoingLeasingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zb.dex.grpc.integration.GetOutgoingLeasingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.GetOutgoingLeasingResponse.displayName = 'proto.zb.dex.grpc.integration.GetOutgoingLeasingResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.GetOutgoingLeasingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.GetOutgoingLeasingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.GetOutgoingLeasingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.GetOutgoingLeasingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    outgoingLeasing: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.GetOutgoingLeasingResponse}
 */
proto.zb.dex.grpc.integration.GetOutgoingLeasingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.GetOutgoingLeasingResponse;
  return proto.zb.dex.grpc.integration.GetOutgoingLeasingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.GetOutgoingLeasingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.GetOutgoingLeasingResponse}
 */
proto.zb.dex.grpc.integration.GetOutgoingLeasingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOutgoingLeasing(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.GetOutgoingLeasingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.GetOutgoingLeasingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.GetOutgoingLeasingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.GetOutgoingLeasingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutgoingLeasing();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 outgoing_leasing = 1;
 * @return {number}
 */
proto.zb.dex.grpc.integration.GetOutgoingLeasingResponse.prototype.getOutgoingLeasing = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.zb.dex.grpc.integration.GetOutgoingLeasingResponse.prototype.setOutgoingLeasing = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.UtxStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zb.dex.grpc.integration.UtxStateResponse.repeatedFields_, null);
};
goog.inherits(proto.zb.dex.grpc.integration.UtxStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.UtxStateResponse.displayName = 'proto.zb.dex.grpc.integration.UtxStateResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zb.dex.grpc.integration.UtxStateResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.UtxStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.UtxStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.UtxStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.UtxStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(),
    proto.zb.dex.grpc.integration.UtxTransaction.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.UtxStateResponse}
 */
proto.zb.dex.grpc.integration.UtxStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.UtxStateResponse;
  return proto.zb.dex.grpc.integration.UtxStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.UtxStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.UtxStateResponse}
 */
proto.zb.dex.grpc.integration.UtxStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zb.dex.grpc.integration.UtxTransaction;
      reader.readMessage(value,proto.zb.dex.grpc.integration.UtxTransaction.deserializeBinaryFromReader);
      msg.addTransactions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.UtxStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.UtxStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.UtxStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.UtxStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.zb.dex.grpc.integration.UtxTransaction.serializeBinaryToWriter
    );
  }
};


/**
 * repeated UtxTransaction transactions = 1;
 * @return {!Array<!proto.zb.dex.grpc.integration.UtxTransaction>}
 */
proto.zb.dex.grpc.integration.UtxStateResponse.prototype.getTransactionsList = function() {
  return /** @type{!Array<!proto.zb.dex.grpc.integration.UtxTransaction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zb.dex.grpc.integration.UtxTransaction, 1));
};


/** @param {!Array<!proto.zb.dex.grpc.integration.UtxTransaction>} value */
proto.zb.dex.grpc.integration.UtxStateResponse.prototype.setTransactionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.zb.dex.grpc.integration.UtxTransaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zb.dex.grpc.integration.UtxTransaction}
 */
proto.zb.dex.grpc.integration.UtxStateResponse.prototype.addTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.zb.dex.grpc.integration.UtxTransaction, opt_index);
};


proto.zb.dex.grpc.integration.UtxStateResponse.prototype.clearTransactionsList = function() {
  this.setTransactionsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.GetBalancesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zb.dex.grpc.integration.GetBalancesRequest.repeatedFields_, null);
};
goog.inherits(proto.zb.dex.grpc.integration.GetBalancesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.GetBalancesRequest.displayName = 'proto.zb.dex.grpc.integration.GetBalancesRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zb.dex.grpc.integration.GetBalancesRequest.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.GetBalancesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.GetBalancesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.GetBalancesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.GetBalancesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    regularList: jspb.Message.toObjectList(msg.getRegularList(),
    proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair.toObject, includeInstance),
    outgoingleasingaddressesList: msg.getOutgoingleasingaddressesList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.GetBalancesRequest}
 */
proto.zb.dex.grpc.integration.GetBalancesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.GetBalancesRequest;
  return proto.zb.dex.grpc.integration.GetBalancesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.GetBalancesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.GetBalancesRequest}
 */
proto.zb.dex.grpc.integration.GetBalancesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair;
      reader.readMessage(value,proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair.deserializeBinaryFromReader);
      msg.addRegular(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addOutgoingleasingaddresses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.GetBalancesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.GetBalancesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.GetBalancesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.GetBalancesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRegularList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair.serializeBinaryToWriter
    );
  }
  f = message.getOutgoingleasingaddressesList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      2,
      f
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair.repeatedFields_, null);
};
goog.inherits(proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair.displayName = 'proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64(),
    assetsList: msg.getAssetsList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair}
 */
proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair;
  return proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair}
 */
proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addAssets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getAssetsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes address = 1;
 * @return {string}
 */
proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair.prototype.setAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated bytes assets = 2;
 * @return {!Array<string>}
 */
proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair.prototype.getAssetsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * repeated bytes assets = 2;
 * This is a type-conversion wrapper around `getAssetsList()`
 * @return {!Array<string>}
 */
proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair.prototype.getAssetsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getAssetsList()));
};


/**
 * repeated bytes assets = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAssetsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair.prototype.getAssetsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getAssetsList()));
};


/** @param {!(Array<!Uint8Array>|Array<string>)} value */
proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair.prototype.setAssetsList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 */
proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair.prototype.addAssets = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair.prototype.clearAssetsList = function() {
  this.setAssetsList([]);
};


/**
 * repeated RegularPair regular = 1;
 * @return {!Array<!proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair>}
 */
proto.zb.dex.grpc.integration.GetBalancesRequest.prototype.getRegularList = function() {
  return /** @type{!Array<!proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair, 1));
};


/** @param {!Array<!proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair>} value */
proto.zb.dex.grpc.integration.GetBalancesRequest.prototype.setRegularList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair}
 */
proto.zb.dex.grpc.integration.GetBalancesRequest.prototype.addRegular = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.zb.dex.grpc.integration.GetBalancesRequest.RegularPair, opt_index);
};


proto.zb.dex.grpc.integration.GetBalancesRequest.prototype.clearRegularList = function() {
  this.setRegularList([]);
};


/**
 * repeated bytes outgoingLeasingAddresses = 2;
 * @return {!Array<string>}
 */
proto.zb.dex.grpc.integration.GetBalancesRequest.prototype.getOutgoingleasingaddressesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * repeated bytes outgoingLeasingAddresses = 2;
 * This is a type-conversion wrapper around `getOutgoingleasingaddressesList()`
 * @return {!Array<string>}
 */
proto.zb.dex.grpc.integration.GetBalancesRequest.prototype.getOutgoingleasingaddressesList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getOutgoingleasingaddressesList()));
};


/**
 * repeated bytes outgoingLeasingAddresses = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOutgoingleasingaddressesList()`
 * @return {!Array<!Uint8Array>}
 */
proto.zb.dex.grpc.integration.GetBalancesRequest.prototype.getOutgoingleasingaddressesList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getOutgoingleasingaddressesList()));
};


/** @param {!(Array<!Uint8Array>|Array<string>)} value */
proto.zb.dex.grpc.integration.GetBalancesRequest.prototype.setOutgoingleasingaddressesList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 */
proto.zb.dex.grpc.integration.GetBalancesRequest.prototype.addOutgoingleasingaddresses = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.zb.dex.grpc.integration.GetBalancesRequest.prototype.clearOutgoingleasingaddressesList = function() {
  this.setOutgoingleasingaddressesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.GetBalancesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zb.dex.grpc.integration.GetBalancesResponse.repeatedFields_, null);
};
goog.inherits(proto.zb.dex.grpc.integration.GetBalancesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.GetBalancesResponse.displayName = 'proto.zb.dex.grpc.integration.GetBalancesResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.GetBalancesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.GetBalancesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    regularList: jspb.Message.toObjectList(msg.getRegularList(),
    proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair.toObject, includeInstance),
    outgoingleasingList: jspb.Message.toObjectList(msg.getOutgoingleasingList(),
    proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.GetBalancesResponse}
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.GetBalancesResponse;
  return proto.zb.dex.grpc.integration.GetBalancesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.GetBalancesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.GetBalancesResponse}
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair;
      reader.readMessage(value,proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair.deserializeBinaryFromReader);
      msg.addRegular(value);
      break;
    case 2:
      var value = new proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair;
      reader.readMessage(value,proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair.deserializeBinaryFromReader);
      msg.addOutgoingleasing(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.GetBalancesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.GetBalancesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRegularList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair.serializeBinaryToWriter
    );
  }
  f = message.getOutgoingleasingList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair.repeatedFields_, null);
};
goog.inherits(proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair.displayName = 'proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64(),
    amountList: jspb.Message.toObjectList(msg.getAmountList(),
    amount_pb.Amount.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair}
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair;
  return proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair}
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    case 2:
      var value = new amount_pb.Amount;
      reader.readMessage(value,amount_pb.Amount.deserializeBinaryFromReader);
      msg.addAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getAmountList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      amount_pb.Amount.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes address = 1;
 * @return {string}
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair.prototype.setAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated zb.Amount amount = 2;
 * @return {!Array<!proto.zb.Amount>}
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair.prototype.getAmountList = function() {
  return /** @type{!Array<!proto.zb.Amount>} */ (
    jspb.Message.getRepeatedWrapperField(this, amount_pb.Amount, 2));
};


/** @param {!Array<!proto.zb.Amount>} value */
proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair.prototype.setAmountList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zb.Amount=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zb.Amount}
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair.prototype.addAmount = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zb.Amount, opt_index);
};


proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair.prototype.clearAmountList = function() {
  this.setAmountList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair.displayName = 'proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64(),
    amount: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair}
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair;
  return proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair}
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional bytes address = 1;
 * @return {string}
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/** @param {!(string|Uint8Array)} value */
proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair.prototype.setAddress = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int64 amount = 2;
 * @return {number}
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair.prototype.setAmount = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated RegularPair regular = 1;
 * @return {!Array<!proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair>}
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.prototype.getRegularList = function() {
  return /** @type{!Array<!proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair, 1));
};


/** @param {!Array<!proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair>} value */
proto.zb.dex.grpc.integration.GetBalancesResponse.prototype.setRegularList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair}
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.prototype.addRegular = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.zb.dex.grpc.integration.GetBalancesResponse.RegularPair, opt_index);
};


proto.zb.dex.grpc.integration.GetBalancesResponse.prototype.clearRegularList = function() {
  this.setRegularList([]);
};


/**
 * repeated OutgoingLeasingPair outgoingLeasing = 2;
 * @return {!Array<!proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair>}
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.prototype.getOutgoingleasingList = function() {
  return /** @type{!Array<!proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair, 2));
};


/** @param {!Array<!proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair>} value */
proto.zb.dex.grpc.integration.GetBalancesResponse.prototype.setOutgoingleasingList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair}
 */
proto.zb.dex.grpc.integration.GetBalancesResponse.prototype.addOutgoingleasing = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zb.dex.grpc.integration.GetBalancesResponse.OutgoingLeasingPair, opt_index);
};


proto.zb.dex.grpc.integration.GetBalancesResponse.prototype.clearOutgoingleasingList = function() {
  this.setOutgoingleasingList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.Exception = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zb.dex.grpc.integration.Exception, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.Exception.displayName = 'proto.zb.dex.grpc.integration.Exception';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.Exception.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.Exception.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.Exception} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.Exception.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.Exception}
 */
proto.zb.dex.grpc.integration.Exception.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.Exception;
  return proto.zb.dex.grpc.integration.Exception.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.Exception} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.Exception}
 */
proto.zb.dex.grpc.integration.Exception.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.Exception.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.Exception.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.Exception} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.Exception.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.zb.dex.grpc.integration.Exception.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.zb.dex.grpc.integration.Exception.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.zb.dex.grpc.integration.Exception.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.zb.dex.grpc.integration.Exception.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.SignedExchangeTransaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zb.dex.grpc.integration.SignedExchangeTransaction.repeatedFields_, null);
};
goog.inherits(proto.zb.dex.grpc.integration.SignedExchangeTransaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.SignedExchangeTransaction.displayName = 'proto.zb.dex.grpc.integration.SignedExchangeTransaction';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zb.dex.grpc.integration.SignedExchangeTransaction.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.SignedExchangeTransaction.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.SignedExchangeTransaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.SignedExchangeTransaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.SignedExchangeTransaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    transaction: (f = msg.getTransaction()) && proto.zb.dex.grpc.integration.ExchangeTransaction.toObject(includeInstance, f),
    proofsList: msg.getProofsList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.SignedExchangeTransaction}
 */
proto.zb.dex.grpc.integration.SignedExchangeTransaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.SignedExchangeTransaction;
  return proto.zb.dex.grpc.integration.SignedExchangeTransaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.SignedExchangeTransaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.SignedExchangeTransaction}
 */
proto.zb.dex.grpc.integration.SignedExchangeTransaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zb.dex.grpc.integration.ExchangeTransaction;
      reader.readMessage(value,proto.zb.dex.grpc.integration.ExchangeTransaction.deserializeBinaryFromReader);
      msg.setTransaction(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addProofs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.SignedExchangeTransaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.SignedExchangeTransaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.SignedExchangeTransaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.SignedExchangeTransaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.zb.dex.grpc.integration.ExchangeTransaction.serializeBinaryToWriter
    );
  }
  f = message.getProofsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      2,
      f
    );
  }
};


/**
 * optional ExchangeTransaction transaction = 1;
 * @return {?proto.zb.dex.grpc.integration.ExchangeTransaction}
 */
proto.zb.dex.grpc.integration.SignedExchangeTransaction.prototype.getTransaction = function() {
  return /** @type{?proto.zb.dex.grpc.integration.ExchangeTransaction} */ (
    jspb.Message.getWrapperField(this, proto.zb.dex.grpc.integration.ExchangeTransaction, 1));
};


/** @param {?proto.zb.dex.grpc.integration.ExchangeTransaction|undefined} value */
proto.zb.dex.grpc.integration.SignedExchangeTransaction.prototype.setTransaction = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.zb.dex.grpc.integration.SignedExchangeTransaction.prototype.clearTransaction = function() {
  this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.zb.dex.grpc.integration.SignedExchangeTransaction.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated bytes proofs = 2;
 * @return {!Array<string>}
 */
proto.zb.dex.grpc.integration.SignedExchangeTransaction.prototype.getProofsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * repeated bytes proofs = 2;
 * This is a type-conversion wrapper around `getProofsList()`
 * @return {!Array<string>}
 */
proto.zb.dex.grpc.integration.SignedExchangeTransaction.prototype.getProofsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getProofsList()));
};


/**
 * repeated bytes proofs = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getProofsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.zb.dex.grpc.integration.SignedExchangeTransaction.prototype.getProofsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getProofsList()));
};


/** @param {!(Array<!Uint8Array>|Array<string>)} value */
proto.zb.dex.grpc.integration.SignedExchangeTransaction.prototype.setProofsList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 */
proto.zb.dex.grpc.integration.SignedExchangeTransaction.prototype.addProofs = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.zb.dex.grpc.integration.SignedExchangeTransaction.prototype.clearProofsList = function() {
  this.setProofsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.ExchangeTransaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zb.dex.grpc.integration.ExchangeTransaction.oneofGroups_);
};
goog.inherits(proto.zb.dex.grpc.integration.ExchangeTransaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.ExchangeTransaction.displayName = 'proto.zb.dex.grpc.integration.ExchangeTransaction';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zb.dex.grpc.integration.ExchangeTransaction.oneofGroups_ = [[107]];

/**
 * @enum {number}
 */
proto.zb.dex.grpc.integration.ExchangeTransaction.DataCase = {
  DATA_NOT_SET: 0,
  EXCHANGE: 107
};

/**
 * @return {proto.zb.dex.grpc.integration.ExchangeTransaction.DataCase}
 */
proto.zb.dex.grpc.integration.ExchangeTransaction.prototype.getDataCase = function() {
  return /** @type {proto.zb.dex.grpc.integration.ExchangeTransaction.DataCase} */(jspb.Message.computeOneofCase(this, proto.zb.dex.grpc.integration.ExchangeTransaction.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.ExchangeTransaction.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.ExchangeTransaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.ExchangeTransaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.ExchangeTransaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    senderPublicKey: msg.getSenderPublicKey_asB64(),
    fee: (f = msg.getFee()) && amount_pb.Amount.toObject(includeInstance, f),
    timestamp: jspb.Message.getFieldWithDefault(msg, 4, 0),
    version: jspb.Message.getFieldWithDefault(msg, 5, 0),
    exchange: (f = msg.getExchange()) && transaction_pb.ExchangeTransactionData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.ExchangeTransaction}
 */
proto.zb.dex.grpc.integration.ExchangeTransaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.ExchangeTransaction;
  return proto.zb.dex.grpc.integration.ExchangeTransaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.ExchangeTransaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.ExchangeTransaction}
 */
proto.zb.dex.grpc.integration.ExchangeTransaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChainId(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSenderPublicKey(value);
      break;
    case 3:
      var value = new amount_pb.Amount;
      reader.readMessage(value,amount_pb.Amount.deserializeBinaryFromReader);
      msg.setFee(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVersion(value);
      break;
    case 107:
      var value = new transaction_pb.ExchangeTransactionData;
      reader.readMessage(value,transaction_pb.ExchangeTransactionData.deserializeBinaryFromReader);
      msg.setExchange(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.ExchangeTransaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.ExchangeTransaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.ExchangeTransaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.ExchangeTransaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSenderPublicKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getFee();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      amount_pb.Amount.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getExchange();
  if (f != null) {
    writer.writeMessage(
      107,
      f,
      transaction_pb.ExchangeTransactionData.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 chain_id = 1;
 * @return {number}
 */
proto.zb.dex.grpc.integration.ExchangeTransaction.prototype.getChainId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.zb.dex.grpc.integration.ExchangeTransaction.prototype.setChainId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bytes sender_public_key = 2;
 * @return {string}
 */
proto.zb.dex.grpc.integration.ExchangeTransaction.prototype.getSenderPublicKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes sender_public_key = 2;
 * This is a type-conversion wrapper around `getSenderPublicKey()`
 * @return {string}
 */
proto.zb.dex.grpc.integration.ExchangeTransaction.prototype.getSenderPublicKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSenderPublicKey()));
};


/**
 * optional bytes sender_public_key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSenderPublicKey()`
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.ExchangeTransaction.prototype.getSenderPublicKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSenderPublicKey()));
};


/** @param {!(string|Uint8Array)} value */
proto.zb.dex.grpc.integration.ExchangeTransaction.prototype.setSenderPublicKey = function(value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional zb.Amount fee = 3;
 * @return {?proto.zb.Amount}
 */
proto.zb.dex.grpc.integration.ExchangeTransaction.prototype.getFee = function() {
  return /** @type{?proto.zb.Amount} */ (
    jspb.Message.getWrapperField(this, amount_pb.Amount, 3));
};


/** @param {?proto.zb.Amount|undefined} value */
proto.zb.dex.grpc.integration.ExchangeTransaction.prototype.setFee = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.zb.dex.grpc.integration.ExchangeTransaction.prototype.clearFee = function() {
  this.setFee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.zb.dex.grpc.integration.ExchangeTransaction.prototype.hasFee = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 timestamp = 4;
 * @return {number}
 */
proto.zb.dex.grpc.integration.ExchangeTransaction.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.zb.dex.grpc.integration.ExchangeTransaction.prototype.setTimestamp = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 version = 5;
 * @return {number}
 */
proto.zb.dex.grpc.integration.ExchangeTransaction.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.zb.dex.grpc.integration.ExchangeTransaction.prototype.setVersion = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional zb.ExchangeTransactionData exchange = 107;
 * @return {?proto.zb.ExchangeTransactionData}
 */
proto.zb.dex.grpc.integration.ExchangeTransaction.prototype.getExchange = function() {
  return /** @type{?proto.zb.ExchangeTransactionData} */ (
    jspb.Message.getWrapperField(this, transaction_pb.ExchangeTransactionData, 107));
};


/** @param {?proto.zb.ExchangeTransactionData|undefined} value */
proto.zb.dex.grpc.integration.ExchangeTransaction.prototype.setExchange = function(value) {
  jspb.Message.setOneofWrapperField(this, 107, proto.zb.dex.grpc.integration.ExchangeTransaction.oneofGroups_[0], value);
};


proto.zb.dex.grpc.integration.ExchangeTransaction.prototype.clearExchange = function() {
  this.setExchange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.zb.dex.grpc.integration.ExchangeTransaction.prototype.hasExchange = function() {
  return jspb.Message.getField(this, 107) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.UtxEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.zb.dex.grpc.integration.UtxEvent.oneofGroups_);
};
goog.inherits(proto.zb.dex.grpc.integration.UtxEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.UtxEvent.displayName = 'proto.zb.dex.grpc.integration.UtxEvent';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.zb.dex.grpc.integration.UtxEvent.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.zb.dex.grpc.integration.UtxEvent.TypeCase = {
  TYPE_NOT_SET: 0,
  SWITCH: 1,
  UPDATE: 2
};

/**
 * @return {proto.zb.dex.grpc.integration.UtxEvent.TypeCase}
 */
proto.zb.dex.grpc.integration.UtxEvent.prototype.getTypeCase = function() {
  return /** @type {proto.zb.dex.grpc.integration.UtxEvent.TypeCase} */(jspb.Message.computeOneofCase(this, proto.zb.dex.grpc.integration.UtxEvent.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.UtxEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.UtxEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.UtxEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.UtxEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    pb_switch: (f = msg.getSwitch()) && proto.zb.dex.grpc.integration.UtxEvent.Switch.toObject(includeInstance, f),
    update: (f = msg.getUpdate()) && proto.zb.dex.grpc.integration.UtxEvent.Update.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.UtxEvent}
 */
proto.zb.dex.grpc.integration.UtxEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.UtxEvent;
  return proto.zb.dex.grpc.integration.UtxEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.UtxEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.UtxEvent}
 */
proto.zb.dex.grpc.integration.UtxEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zb.dex.grpc.integration.UtxEvent.Switch;
      reader.readMessage(value,proto.zb.dex.grpc.integration.UtxEvent.Switch.deserializeBinaryFromReader);
      msg.setSwitch(value);
      break;
    case 2:
      var value = new proto.zb.dex.grpc.integration.UtxEvent.Update;
      reader.readMessage(value,proto.zb.dex.grpc.integration.UtxEvent.Update.deserializeBinaryFromReader);
      msg.setUpdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.UtxEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.UtxEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.UtxEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.UtxEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSwitch();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.zb.dex.grpc.integration.UtxEvent.Switch.serializeBinaryToWriter
    );
  }
  f = message.getUpdate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.zb.dex.grpc.integration.UtxEvent.Update.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.UtxEvent.Switch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zb.dex.grpc.integration.UtxEvent.Switch.repeatedFields_, null);
};
goog.inherits(proto.zb.dex.grpc.integration.UtxEvent.Switch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.UtxEvent.Switch.displayName = 'proto.zb.dex.grpc.integration.UtxEvent.Switch';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zb.dex.grpc.integration.UtxEvent.Switch.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.UtxEvent.Switch.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.UtxEvent.Switch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.UtxEvent.Switch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.UtxEvent.Switch.toObject = function(includeInstance, msg) {
  var f, obj = {
    transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(),
    proto.zb.dex.grpc.integration.UtxTransaction.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.UtxEvent.Switch}
 */
proto.zb.dex.grpc.integration.UtxEvent.Switch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.UtxEvent.Switch;
  return proto.zb.dex.grpc.integration.UtxEvent.Switch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.UtxEvent.Switch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.UtxEvent.Switch}
 */
proto.zb.dex.grpc.integration.UtxEvent.Switch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zb.dex.grpc.integration.UtxTransaction;
      reader.readMessage(value,proto.zb.dex.grpc.integration.UtxTransaction.deserializeBinaryFromReader);
      msg.addTransactions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.UtxEvent.Switch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.UtxEvent.Switch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.UtxEvent.Switch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.UtxEvent.Switch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.zb.dex.grpc.integration.UtxTransaction.serializeBinaryToWriter
    );
  }
};


/**
 * repeated UtxTransaction transactions = 1;
 * @return {!Array<!proto.zb.dex.grpc.integration.UtxTransaction>}
 */
proto.zb.dex.grpc.integration.UtxEvent.Switch.prototype.getTransactionsList = function() {
  return /** @type{!Array<!proto.zb.dex.grpc.integration.UtxTransaction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zb.dex.grpc.integration.UtxTransaction, 1));
};


/** @param {!Array<!proto.zb.dex.grpc.integration.UtxTransaction>} value */
proto.zb.dex.grpc.integration.UtxEvent.Switch.prototype.setTransactionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.zb.dex.grpc.integration.UtxTransaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zb.dex.grpc.integration.UtxTransaction}
 */
proto.zb.dex.grpc.integration.UtxEvent.Switch.prototype.addTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.zb.dex.grpc.integration.UtxTransaction, opt_index);
};


proto.zb.dex.grpc.integration.UtxEvent.Switch.prototype.clearTransactionsList = function() {
  this.setTransactionsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.UtxEvent.Update = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zb.dex.grpc.integration.UtxEvent.Update.repeatedFields_, null);
};
goog.inherits(proto.zb.dex.grpc.integration.UtxEvent.Update, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.UtxEvent.Update.displayName = 'proto.zb.dex.grpc.integration.UtxEvent.Update';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.UtxEvent.Update.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.UtxEvent.Update} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.toObject = function(includeInstance, msg) {
  var f, obj = {
    addedList: jspb.Message.toObjectList(msg.getAddedList(),
    proto.zb.dex.grpc.integration.UtxEvent.Update.Added.toObject, includeInstance),
    removedList: jspb.Message.toObjectList(msg.getRemovedList(),
    proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.UtxEvent.Update}
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.UtxEvent.Update;
  return proto.zb.dex.grpc.integration.UtxEvent.Update.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.UtxEvent.Update} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.UtxEvent.Update}
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zb.dex.grpc.integration.UtxEvent.Update.Added;
      reader.readMessage(value,proto.zb.dex.grpc.integration.UtxEvent.Update.Added.deserializeBinaryFromReader);
      msg.addAdded(value);
      break;
    case 2:
      var value = new proto.zb.dex.grpc.integration.UtxEvent.Update.Removed;
      reader.readMessage(value,proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.deserializeBinaryFromReader);
      msg.addRemoved(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.UtxEvent.Update.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.UtxEvent.Update} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.zb.dex.grpc.integration.UtxEvent.Update.Added.serializeBinaryToWriter
    );
  }
  f = message.getRemovedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.Added = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zb.dex.grpc.integration.UtxEvent.Update.Added, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.UtxEvent.Update.Added.displayName = 'proto.zb.dex.grpc.integration.UtxEvent.Update.Added';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.Added.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.UtxEvent.Update.Added.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.UtxEvent.Update.Added} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.Added.toObject = function(includeInstance, msg) {
  var f, obj = {
    transaction: (f = msg.getTransaction()) && proto.zb.dex.grpc.integration.UtxTransaction.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.UtxEvent.Update.Added}
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.Added.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.UtxEvent.Update.Added;
  return proto.zb.dex.grpc.integration.UtxEvent.Update.Added.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.UtxEvent.Update.Added} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.UtxEvent.Update.Added}
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.Added.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zb.dex.grpc.integration.UtxTransaction;
      reader.readMessage(value,proto.zb.dex.grpc.integration.UtxTransaction.deserializeBinaryFromReader);
      msg.setTransaction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.Added.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.UtxEvent.Update.Added.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.UtxEvent.Update.Added} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.Added.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.zb.dex.grpc.integration.UtxTransaction.serializeBinaryToWriter
    );
  }
};


/**
 * optional UtxTransaction transaction = 1;
 * @return {?proto.zb.dex.grpc.integration.UtxTransaction}
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.Added.prototype.getTransaction = function() {
  return /** @type{?proto.zb.dex.grpc.integration.UtxTransaction} */ (
    jspb.Message.getWrapperField(this, proto.zb.dex.grpc.integration.UtxTransaction, 1));
};


/** @param {?proto.zb.dex.grpc.integration.UtxTransaction|undefined} value */
proto.zb.dex.grpc.integration.UtxEvent.Update.Added.prototype.setTransaction = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.zb.dex.grpc.integration.UtxEvent.Update.Added.prototype.clearTransaction = function() {
  this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.Added.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.Removed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zb.dex.grpc.integration.UtxEvent.Update.Removed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.displayName = 'proto.zb.dex.grpc.integration.UtxEvent.Update.Removed';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.UtxEvent.Update.Removed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.toObject = function(includeInstance, msg) {
  var f, obj = {
    transaction: (f = msg.getTransaction()) && proto.zb.dex.grpc.integration.UtxTransaction.toObject(includeInstance, f),
    reason: (f = msg.getReason()) && proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.Reason.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.UtxEvent.Update.Removed}
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.UtxEvent.Update.Removed;
  return proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.UtxEvent.Update.Removed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.UtxEvent.Update.Removed}
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.zb.dex.grpc.integration.UtxTransaction;
      reader.readMessage(value,proto.zb.dex.grpc.integration.UtxTransaction.deserializeBinaryFromReader);
      msg.setTransaction(value);
      break;
    case 2:
      var value = new proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.Reason;
      reader.readMessage(value,proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.Reason.deserializeBinaryFromReader);
      msg.setReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.UtxEvent.Update.Removed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.zb.dex.grpc.integration.UtxTransaction.serializeBinaryToWriter
    );
  }
  f = message.getReason();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.Reason.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.Reason = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.Reason, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.Reason.displayName = 'proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.Reason';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.Reason.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.Reason.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.Reason} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.Reason.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.Reason}
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.Reason.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.Reason;
  return proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.Reason.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.Reason} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.Reason}
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.Reason.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.Reason.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.Reason.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.Reason} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.Reason.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.Reason.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.Reason.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.Reason.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.Reason.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional UtxTransaction transaction = 1;
 * @return {?proto.zb.dex.grpc.integration.UtxTransaction}
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.prototype.getTransaction = function() {
  return /** @type{?proto.zb.dex.grpc.integration.UtxTransaction} */ (
    jspb.Message.getWrapperField(this, proto.zb.dex.grpc.integration.UtxTransaction, 1));
};


/** @param {?proto.zb.dex.grpc.integration.UtxTransaction|undefined} value */
proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.prototype.setTransaction = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.prototype.clearTransaction = function() {
  this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reason reason = 2;
 * @return {?proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.Reason}
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.prototype.getReason = function() {
  return /** @type{?proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.Reason} */ (
    jspb.Message.getWrapperField(this, proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.Reason, 2));
};


/** @param {?proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.Reason|undefined} value */
proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.prototype.setReason = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.prototype.clearReason = function() {
  this.setReason(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.Removed.prototype.hasReason = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Added added = 1;
 * @return {!Array<!proto.zb.dex.grpc.integration.UtxEvent.Update.Added>}
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.prototype.getAddedList = function() {
  return /** @type{!Array<!proto.zb.dex.grpc.integration.UtxEvent.Update.Added>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zb.dex.grpc.integration.UtxEvent.Update.Added, 1));
};


/** @param {!Array<!proto.zb.dex.grpc.integration.UtxEvent.Update.Added>} value */
proto.zb.dex.grpc.integration.UtxEvent.Update.prototype.setAddedList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.zb.dex.grpc.integration.UtxEvent.Update.Added=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zb.dex.grpc.integration.UtxEvent.Update.Added}
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.prototype.addAdded = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.zb.dex.grpc.integration.UtxEvent.Update.Added, opt_index);
};


proto.zb.dex.grpc.integration.UtxEvent.Update.prototype.clearAddedList = function() {
  this.setAddedList([]);
};


/**
 * repeated Removed removed = 2;
 * @return {!Array<!proto.zb.dex.grpc.integration.UtxEvent.Update.Removed>}
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.prototype.getRemovedList = function() {
  return /** @type{!Array<!proto.zb.dex.grpc.integration.UtxEvent.Update.Removed>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zb.dex.grpc.integration.UtxEvent.Update.Removed, 2));
};


/** @param {!Array<!proto.zb.dex.grpc.integration.UtxEvent.Update.Removed>} value */
proto.zb.dex.grpc.integration.UtxEvent.Update.prototype.setRemovedList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zb.dex.grpc.integration.UtxEvent.Update.Removed=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zb.dex.grpc.integration.UtxEvent.Update.Removed}
 */
proto.zb.dex.grpc.integration.UtxEvent.Update.prototype.addRemoved = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zb.dex.grpc.integration.UtxEvent.Update.Removed, opt_index);
};


proto.zb.dex.grpc.integration.UtxEvent.Update.prototype.clearRemovedList = function() {
  this.setRemovedList([]);
};


/**
 * optional Switch switch = 1;
 * @return {?proto.zb.dex.grpc.integration.UtxEvent.Switch}
 */
proto.zb.dex.grpc.integration.UtxEvent.prototype.getSwitch = function() {
  return /** @type{?proto.zb.dex.grpc.integration.UtxEvent.Switch} */ (
    jspb.Message.getWrapperField(this, proto.zb.dex.grpc.integration.UtxEvent.Switch, 1));
};


/** @param {?proto.zb.dex.grpc.integration.UtxEvent.Switch|undefined} value */
proto.zb.dex.grpc.integration.UtxEvent.prototype.setSwitch = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.zb.dex.grpc.integration.UtxEvent.oneofGroups_[0], value);
};


proto.zb.dex.grpc.integration.UtxEvent.prototype.clearSwitch = function() {
  this.setSwitch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.zb.dex.grpc.integration.UtxEvent.prototype.hasSwitch = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Update update = 2;
 * @return {?proto.zb.dex.grpc.integration.UtxEvent.Update}
 */
proto.zb.dex.grpc.integration.UtxEvent.prototype.getUpdate = function() {
  return /** @type{?proto.zb.dex.grpc.integration.UtxEvent.Update} */ (
    jspb.Message.getWrapperField(this, proto.zb.dex.grpc.integration.UtxEvent.Update, 2));
};


/** @param {?proto.zb.dex.grpc.integration.UtxEvent.Update|undefined} value */
proto.zb.dex.grpc.integration.UtxEvent.prototype.setUpdate = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.zb.dex.grpc.integration.UtxEvent.oneofGroups_[0], value);
};


proto.zb.dex.grpc.integration.UtxEvent.prototype.clearUpdate = function() {
  this.setUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.zb.dex.grpc.integration.UtxEvent.prototype.hasUpdate = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.UtxTransaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zb.dex.grpc.integration.UtxTransaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.UtxTransaction.displayName = 'proto.zb.dex.grpc.integration.UtxTransaction';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.UtxTransaction.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.UtxTransaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.UtxTransaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.UtxTransaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64(),
    transaction: (f = msg.getTransaction()) && transaction_pb.SignedTransaction.toObject(includeInstance, f),
    diff: (f = msg.getDiff()) && proto.zb.dex.grpc.integration.TransactionDiff.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.UtxTransaction}
 */
proto.zb.dex.grpc.integration.UtxTransaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.UtxTransaction;
  return proto.zb.dex.grpc.integration.UtxTransaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.UtxTransaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.UtxTransaction}
 */
proto.zb.dex.grpc.integration.UtxTransaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setId(value);
      break;
    case 2:
      var value = new transaction_pb.SignedTransaction;
      reader.readMessage(value,transaction_pb.SignedTransaction.deserializeBinaryFromReader);
      msg.setTransaction(value);
      break;
    case 3:
      var value = new proto.zb.dex.grpc.integration.TransactionDiff;
      reader.readMessage(value,proto.zb.dex.grpc.integration.TransactionDiff.deserializeBinaryFromReader);
      msg.setDiff(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.UtxTransaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.UtxTransaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.UtxTransaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.UtxTransaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getTransaction();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      transaction_pb.SignedTransaction.serializeBinaryToWriter
    );
  }
  f = message.getDiff();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.zb.dex.grpc.integration.TransactionDiff.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes id = 1;
 * @return {string}
 */
proto.zb.dex.grpc.integration.UtxTransaction.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes id = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.zb.dex.grpc.integration.UtxTransaction.prototype.getId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getId()));
};


/**
 * optional bytes id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getId()`
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.UtxTransaction.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/** @param {!(string|Uint8Array)} value */
proto.zb.dex.grpc.integration.UtxTransaction.prototype.setId = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional zb.SignedTransaction transaction = 2;
 * @return {?proto.zb.SignedTransaction}
 */
proto.zb.dex.grpc.integration.UtxTransaction.prototype.getTransaction = function() {
  return /** @type{?proto.zb.SignedTransaction} */ (
    jspb.Message.getWrapperField(this, transaction_pb.SignedTransaction, 2));
};


/** @param {?proto.zb.SignedTransaction|undefined} value */
proto.zb.dex.grpc.integration.UtxTransaction.prototype.setTransaction = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.zb.dex.grpc.integration.UtxTransaction.prototype.clearTransaction = function() {
  this.setTransaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.zb.dex.grpc.integration.UtxTransaction.prototype.hasTransaction = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TransactionDiff diff = 3;
 * @return {?proto.zb.dex.grpc.integration.TransactionDiff}
 */
proto.zb.dex.grpc.integration.UtxTransaction.prototype.getDiff = function() {
  return /** @type{?proto.zb.dex.grpc.integration.TransactionDiff} */ (
    jspb.Message.getWrapperField(this, proto.zb.dex.grpc.integration.TransactionDiff, 3));
};


/** @param {?proto.zb.dex.grpc.integration.TransactionDiff|undefined} value */
proto.zb.dex.grpc.integration.UtxTransaction.prototype.setDiff = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.zb.dex.grpc.integration.UtxTransaction.prototype.clearDiff = function() {
  this.setDiff(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.zb.dex.grpc.integration.UtxTransaction.prototype.hasDiff = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.TransactionDiff = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.zb.dex.grpc.integration.TransactionDiff.repeatedFields_, null);
};
goog.inherits(proto.zb.dex.grpc.integration.TransactionDiff, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.TransactionDiff.displayName = 'proto.zb.dex.grpc.integration.TransactionDiff';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.zb.dex.grpc.integration.TransactionDiff.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.TransactionDiff.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.TransactionDiff.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.TransactionDiff} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.TransactionDiff.toObject = function(includeInstance, msg) {
  var f, obj = {
    stateUpdate: (f = msg.getStateUpdate()) && events_pb.StateUpdate.toObject(includeInstance, f),
    orderFillsList: jspb.Message.toObjectList(msg.getOrderFillsList(),
    proto.zb.dex.grpc.integration.TransactionDiff.OrderFill.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.TransactionDiff}
 */
proto.zb.dex.grpc.integration.TransactionDiff.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.TransactionDiff;
  return proto.zb.dex.grpc.integration.TransactionDiff.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.TransactionDiff} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.TransactionDiff}
 */
proto.zb.dex.grpc.integration.TransactionDiff.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new events_pb.StateUpdate;
      reader.readMessage(value,events_pb.StateUpdate.deserializeBinaryFromReader);
      msg.setStateUpdate(value);
      break;
    case 2:
      var value = new proto.zb.dex.grpc.integration.TransactionDiff.OrderFill;
      reader.readMessage(value,proto.zb.dex.grpc.integration.TransactionDiff.OrderFill.deserializeBinaryFromReader);
      msg.addOrderFills(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.TransactionDiff.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.TransactionDiff.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.TransactionDiff} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.TransactionDiff.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStateUpdate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      events_pb.StateUpdate.serializeBinaryToWriter
    );
  }
  f = message.getOrderFillsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.zb.dex.grpc.integration.TransactionDiff.OrderFill.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.zb.dex.grpc.integration.TransactionDiff.OrderFill = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.zb.dex.grpc.integration.TransactionDiff.OrderFill, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.zb.dex.grpc.integration.TransactionDiff.OrderFill.displayName = 'proto.zb.dex.grpc.integration.TransactionDiff.OrderFill';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.zb.dex.grpc.integration.TransactionDiff.OrderFill.prototype.toObject = function(opt_includeInstance) {
  return proto.zb.dex.grpc.integration.TransactionDiff.OrderFill.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.zb.dex.grpc.integration.TransactionDiff.OrderFill} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.TransactionDiff.OrderFill.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderId: msg.getOrderId_asB64(),
    volume: jspb.Message.getFieldWithDefault(msg, 2, 0),
    fee: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.zb.dex.grpc.integration.TransactionDiff.OrderFill}
 */
proto.zb.dex.grpc.integration.TransactionDiff.OrderFill.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.zb.dex.grpc.integration.TransactionDiff.OrderFill;
  return proto.zb.dex.grpc.integration.TransactionDiff.OrderFill.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.zb.dex.grpc.integration.TransactionDiff.OrderFill} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.zb.dex.grpc.integration.TransactionDiff.OrderFill}
 */
proto.zb.dex.grpc.integration.TransactionDiff.OrderFill.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOrderId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVolume(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFee(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.TransactionDiff.OrderFill.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.zb.dex.grpc.integration.TransactionDiff.OrderFill.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.zb.dex.grpc.integration.TransactionDiff.OrderFill} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.zb.dex.grpc.integration.TransactionDiff.OrderFill.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getFee();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional bytes order_id = 1;
 * @return {string}
 */
proto.zb.dex.grpc.integration.TransactionDiff.OrderFill.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes order_id = 1;
 * This is a type-conversion wrapper around `getOrderId()`
 * @return {string}
 */
proto.zb.dex.grpc.integration.TransactionDiff.OrderFill.prototype.getOrderId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOrderId()));
};


/**
 * optional bytes order_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOrderId()`
 * @return {!Uint8Array}
 */
proto.zb.dex.grpc.integration.TransactionDiff.OrderFill.prototype.getOrderId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOrderId()));
};


/** @param {!(string|Uint8Array)} value */
proto.zb.dex.grpc.integration.TransactionDiff.OrderFill.prototype.setOrderId = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int64 volume = 2;
 * @return {number}
 */
proto.zb.dex.grpc.integration.TransactionDiff.OrderFill.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.zb.dex.grpc.integration.TransactionDiff.OrderFill.prototype.setVolume = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 fee = 3;
 * @return {number}
 */
proto.zb.dex.grpc.integration.TransactionDiff.OrderFill.prototype.getFee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.zb.dex.grpc.integration.TransactionDiff.OrderFill.prototype.setFee = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional zb.events.StateUpdate state_update = 1;
 * @return {?proto.zb.events.StateUpdate}
 */
proto.zb.dex.grpc.integration.TransactionDiff.prototype.getStateUpdate = function() {
  return /** @type{?proto.zb.events.StateUpdate} */ (
    jspb.Message.getWrapperField(this, events_pb.StateUpdate, 1));
};


/** @param {?proto.zb.events.StateUpdate|undefined} value */
proto.zb.dex.grpc.integration.TransactionDiff.prototype.setStateUpdate = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.zb.dex.grpc.integration.TransactionDiff.prototype.clearStateUpdate = function() {
  this.setStateUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.zb.dex.grpc.integration.TransactionDiff.prototype.hasStateUpdate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated OrderFill order_fills = 2;
 * @return {!Array<!proto.zb.dex.grpc.integration.TransactionDiff.OrderFill>}
 */
proto.zb.dex.grpc.integration.TransactionDiff.prototype.getOrderFillsList = function() {
  return /** @type{!Array<!proto.zb.dex.grpc.integration.TransactionDiff.OrderFill>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.zb.dex.grpc.integration.TransactionDiff.OrderFill, 2));
};


/** @param {!Array<!proto.zb.dex.grpc.integration.TransactionDiff.OrderFill>} value */
proto.zb.dex.grpc.integration.TransactionDiff.prototype.setOrderFillsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.zb.dex.grpc.integration.TransactionDiff.OrderFill=} opt_value
 * @param {number=} opt_index
 * @return {!proto.zb.dex.grpc.integration.TransactionDiff.OrderFill}
 */
proto.zb.dex.grpc.integration.TransactionDiff.prototype.addOrderFills = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.zb.dex.grpc.integration.TransactionDiff.OrderFill, opt_index);
};


proto.zb.dex.grpc.integration.TransactionDiff.prototype.clearOrderFillsList = function() {
  this.setOrderFillsList([]);
};


goog.object.extend(exports, proto.zb.dex.grpc.integration);
