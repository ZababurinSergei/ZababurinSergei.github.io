/**
 * @fileoverview gRPC-Web generated client stub for zb.dex.grpc.integration
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var amount_pb = require('./amount_pb.js')

var order_pb = require('./order_pb.js')

var transaction_pb = require('./transaction_pb.js')

var events_pb = require('./events_pb.js')

var transactions_api_pb = require('./transactions_api_pb.js')
const proto = {};
proto.zb = {};
proto.zb.dex = {};
proto.zb.dex.grpc = {};
proto.zb.dex.grpc.integration = require('./zb_blockchain_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zb.node.grpc.TransactionsByIdRequest,
 *   !proto.zb.dex.grpc.integration.TransactionsStatusesResponse>}
 */
const methodDescriptor_ZbBlockchainApi_GetStatuses = new grpc.web.MethodDescriptor(
  '/zb.dex.grpc.integration.ZbBlockchainApi/GetStatuses',
  grpc.web.MethodType.UNARY,
  transactions_api_pb.TransactionsByIdRequest,
  proto.zb.dex.grpc.integration.TransactionsStatusesResponse,
  /**
   * @param {!proto.zb.node.grpc.TransactionsByIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.dex.grpc.integration.TransactionsStatusesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zb.node.grpc.TransactionsByIdRequest,
 *   !proto.zb.dex.grpc.integration.TransactionsStatusesResponse>}
 */
const methodInfo_ZbBlockchainApi_GetStatuses = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.dex.grpc.integration.TransactionsStatusesResponse,
  /**
   * @param {!proto.zb.node.grpc.TransactionsByIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.dex.grpc.integration.TransactionsStatusesResponse.deserializeBinary
);


/**
 * @param {!proto.zb.node.grpc.TransactionsByIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zb.dex.grpc.integration.TransactionsStatusesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zb.dex.grpc.integration.TransactionsStatusesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiClient.prototype.getStatuses =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zb.dex.grpc.integration.ZbBlockchainApi/GetStatuses',
      request,
      metadata || {},
      methodDescriptor_ZbBlockchainApi_GetStatuses,
      callback);
};


/**
 * @param {!proto.zb.node.grpc.TransactionsByIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zb.dex.grpc.integration.TransactionsStatusesResponse>}
 *     Promise that resolves to the response
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiPromiseClient.prototype.getStatuses =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zb.dex.grpc.integration.ZbBlockchainApi/GetStatuses',
      request,
      metadata || {},
      methodDescriptor_ZbBlockchainApi_GetStatuses);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zb.dex.grpc.integration.BroadcastRequest,
 *   !proto.zb.dex.grpc.integration.BroadcastResponse>}
 */
const methodDescriptor_ZbBlockchainApi_Broadcast = new grpc.web.MethodDescriptor(
  '/zb.dex.grpc.integration.ZbBlockchainApi/Broadcast',
  grpc.web.MethodType.UNARY,
  proto.zb.dex.grpc.integration.BroadcastRequest,
  proto.zb.dex.grpc.integration.BroadcastResponse,
  /**
   * @param {!proto.zb.dex.grpc.integration.BroadcastRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.dex.grpc.integration.BroadcastResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zb.dex.grpc.integration.BroadcastRequest,
 *   !proto.zb.dex.grpc.integration.BroadcastResponse>}
 */
const methodInfo_ZbBlockchainApi_Broadcast = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.dex.grpc.integration.BroadcastResponse,
  /**
   * @param {!proto.zb.dex.grpc.integration.BroadcastRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.dex.grpc.integration.BroadcastResponse.deserializeBinary
);


/**
 * @param {!proto.zb.dex.grpc.integration.BroadcastRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zb.dex.grpc.integration.BroadcastResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zb.dex.grpc.integration.BroadcastResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiClient.prototype.broadcast =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zb.dex.grpc.integration.ZbBlockchainApi/Broadcast',
      request,
      metadata || {},
      methodDescriptor_ZbBlockchainApi_Broadcast,
      callback);
};


/**
 * @param {!proto.zb.dex.grpc.integration.BroadcastRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zb.dex.grpc.integration.BroadcastResponse>}
 *     Promise that resolves to the response
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiPromiseClient.prototype.broadcast =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zb.dex.grpc.integration.ZbBlockchainApi/Broadcast',
      request,
      metadata || {},
      methodDescriptor_ZbBlockchainApi_Broadcast);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zb.dex.grpc.integration.CheckedBroadcastRequest,
 *   !proto.zb.dex.grpc.integration.CheckedBroadcastResponse>}
 */
const methodDescriptor_ZbBlockchainApi_CheckedBroadcast = new grpc.web.MethodDescriptor(
  '/zb.dex.grpc.integration.ZbBlockchainApi/CheckedBroadcast',
  grpc.web.MethodType.UNARY,
  proto.zb.dex.grpc.integration.CheckedBroadcastRequest,
  proto.zb.dex.grpc.integration.CheckedBroadcastResponse,
  /**
   * @param {!proto.zb.dex.grpc.integration.CheckedBroadcastRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.dex.grpc.integration.CheckedBroadcastResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zb.dex.grpc.integration.CheckedBroadcastRequest,
 *   !proto.zb.dex.grpc.integration.CheckedBroadcastResponse>}
 */
const methodInfo_ZbBlockchainApi_CheckedBroadcast = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.dex.grpc.integration.CheckedBroadcastResponse,
  /**
   * @param {!proto.zb.dex.grpc.integration.CheckedBroadcastRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.dex.grpc.integration.CheckedBroadcastResponse.deserializeBinary
);


/**
 * @param {!proto.zb.dex.grpc.integration.CheckedBroadcastRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zb.dex.grpc.integration.CheckedBroadcastResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zb.dex.grpc.integration.CheckedBroadcastResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiClient.prototype.checkedBroadcast =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zb.dex.grpc.integration.ZbBlockchainApi/CheckedBroadcast',
      request,
      metadata || {},
      methodDescriptor_ZbBlockchainApi_CheckedBroadcast,
      callback);
};


/**
 * @param {!proto.zb.dex.grpc.integration.CheckedBroadcastRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zb.dex.grpc.integration.CheckedBroadcastResponse>}
 *     Promise that resolves to the response
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiPromiseClient.prototype.checkedBroadcast =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zb.dex.grpc.integration.ZbBlockchainApi/CheckedBroadcast',
      request,
      metadata || {},
      methodDescriptor_ZbBlockchainApi_CheckedBroadcast);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zb.dex.grpc.integration.IsFeatureActivatedRequest,
 *   !proto.zb.dex.grpc.integration.IsFeatureActivatedResponse>}
 */
const methodDescriptor_ZbBlockchainApi_IsFeatureActivated = new grpc.web.MethodDescriptor(
  '/zb.dex.grpc.integration.ZbBlockchainApi/IsFeatureActivated',
  grpc.web.MethodType.UNARY,
  proto.zb.dex.grpc.integration.IsFeatureActivatedRequest,
  proto.zb.dex.grpc.integration.IsFeatureActivatedResponse,
  /**
   * @param {!proto.zb.dex.grpc.integration.IsFeatureActivatedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.dex.grpc.integration.IsFeatureActivatedResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zb.dex.grpc.integration.IsFeatureActivatedRequest,
 *   !proto.zb.dex.grpc.integration.IsFeatureActivatedResponse>}
 */
const methodInfo_ZbBlockchainApi_IsFeatureActivated = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.dex.grpc.integration.IsFeatureActivatedResponse,
  /**
   * @param {!proto.zb.dex.grpc.integration.IsFeatureActivatedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.dex.grpc.integration.IsFeatureActivatedResponse.deserializeBinary
);


/**
 * @param {!proto.zb.dex.grpc.integration.IsFeatureActivatedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zb.dex.grpc.integration.IsFeatureActivatedResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zb.dex.grpc.integration.IsFeatureActivatedResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiClient.prototype.isFeatureActivated =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zb.dex.grpc.integration.ZbBlockchainApi/IsFeatureActivated',
      request,
      metadata || {},
      methodDescriptor_ZbBlockchainApi_IsFeatureActivated,
      callback);
};


/**
 * @param {!proto.zb.dex.grpc.integration.IsFeatureActivatedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zb.dex.grpc.integration.IsFeatureActivatedResponse>}
 *     Promise that resolves to the response
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiPromiseClient.prototype.isFeatureActivated =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zb.dex.grpc.integration.ZbBlockchainApi/IsFeatureActivated',
      request,
      metadata || {},
      methodDescriptor_ZbBlockchainApi_IsFeatureActivated);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zb.dex.grpc.integration.AssetIdRequest,
 *   !proto.zb.dex.grpc.integration.AssetDescriptionResponse>}
 */
const methodDescriptor_ZbBlockchainApi_AssetDescription = new grpc.web.MethodDescriptor(
  '/zb.dex.grpc.integration.ZbBlockchainApi/AssetDescription',
  grpc.web.MethodType.UNARY,
  proto.zb.dex.grpc.integration.AssetIdRequest,
  proto.zb.dex.grpc.integration.AssetDescriptionResponse,
  /**
   * @param {!proto.zb.dex.grpc.integration.AssetIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.dex.grpc.integration.AssetDescriptionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zb.dex.grpc.integration.AssetIdRequest,
 *   !proto.zb.dex.grpc.integration.AssetDescriptionResponse>}
 */
const methodInfo_ZbBlockchainApi_AssetDescription = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.dex.grpc.integration.AssetDescriptionResponse,
  /**
   * @param {!proto.zb.dex.grpc.integration.AssetIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.dex.grpc.integration.AssetDescriptionResponse.deserializeBinary
);


/**
 * @param {!proto.zb.dex.grpc.integration.AssetIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zb.dex.grpc.integration.AssetDescriptionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zb.dex.grpc.integration.AssetDescriptionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiClient.prototype.assetDescription =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zb.dex.grpc.integration.ZbBlockchainApi/AssetDescription',
      request,
      metadata || {},
      methodDescriptor_ZbBlockchainApi_AssetDescription,
      callback);
};


/**
 * @param {!proto.zb.dex.grpc.integration.AssetIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zb.dex.grpc.integration.AssetDescriptionResponse>}
 *     Promise that resolves to the response
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiPromiseClient.prototype.assetDescription =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zb.dex.grpc.integration.ZbBlockchainApi/AssetDescription',
      request,
      metadata || {},
      methodDescriptor_ZbBlockchainApi_AssetDescription);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zb.dex.grpc.integration.AssetIdRequest,
 *   !proto.zb.dex.grpc.integration.HasScriptResponse>}
 */
const methodDescriptor_ZbBlockchainApi_HasAssetScript = new grpc.web.MethodDescriptor(
  '/zb.dex.grpc.integration.ZbBlockchainApi/HasAssetScript',
  grpc.web.MethodType.UNARY,
  proto.zb.dex.grpc.integration.AssetIdRequest,
  proto.zb.dex.grpc.integration.HasScriptResponse,
  /**
   * @param {!proto.zb.dex.grpc.integration.AssetIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.dex.grpc.integration.HasScriptResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zb.dex.grpc.integration.AssetIdRequest,
 *   !proto.zb.dex.grpc.integration.HasScriptResponse>}
 */
const methodInfo_ZbBlockchainApi_HasAssetScript = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.dex.grpc.integration.HasScriptResponse,
  /**
   * @param {!proto.zb.dex.grpc.integration.AssetIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.dex.grpc.integration.HasScriptResponse.deserializeBinary
);


/**
 * @param {!proto.zb.dex.grpc.integration.AssetIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zb.dex.grpc.integration.HasScriptResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zb.dex.grpc.integration.HasScriptResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiClient.prototype.hasAssetScript =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zb.dex.grpc.integration.ZbBlockchainApi/HasAssetScript',
      request,
      metadata || {},
      methodDescriptor_ZbBlockchainApi_HasAssetScript,
      callback);
};


/**
 * @param {!proto.zb.dex.grpc.integration.AssetIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zb.dex.grpc.integration.HasScriptResponse>}
 *     Promise that resolves to the response
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiPromiseClient.prototype.hasAssetScript =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zb.dex.grpc.integration.ZbBlockchainApi/HasAssetScript',
      request,
      metadata || {},
      methodDescriptor_ZbBlockchainApi_HasAssetScript);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zb.dex.grpc.integration.RunAssetScriptRequest,
 *   !proto.zb.dex.grpc.integration.RunScriptResponse>}
 */
const methodDescriptor_ZbBlockchainApi_RunAssetScript = new grpc.web.MethodDescriptor(
  '/zb.dex.grpc.integration.ZbBlockchainApi/RunAssetScript',
  grpc.web.MethodType.UNARY,
  proto.zb.dex.grpc.integration.RunAssetScriptRequest,
  proto.zb.dex.grpc.integration.RunScriptResponse,
  /**
   * @param {!proto.zb.dex.grpc.integration.RunAssetScriptRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.dex.grpc.integration.RunScriptResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zb.dex.grpc.integration.RunAssetScriptRequest,
 *   !proto.zb.dex.grpc.integration.RunScriptResponse>}
 */
const methodInfo_ZbBlockchainApi_RunAssetScript = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.dex.grpc.integration.RunScriptResponse,
  /**
   * @param {!proto.zb.dex.grpc.integration.RunAssetScriptRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.dex.grpc.integration.RunScriptResponse.deserializeBinary
);


/**
 * @param {!proto.zb.dex.grpc.integration.RunAssetScriptRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zb.dex.grpc.integration.RunScriptResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zb.dex.grpc.integration.RunScriptResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiClient.prototype.runAssetScript =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zb.dex.grpc.integration.ZbBlockchainApi/RunAssetScript',
      request,
      metadata || {},
      methodDescriptor_ZbBlockchainApi_RunAssetScript,
      callback);
};


/**
 * @param {!proto.zb.dex.grpc.integration.RunAssetScriptRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zb.dex.grpc.integration.RunScriptResponse>}
 *     Promise that resolves to the response
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiPromiseClient.prototype.runAssetScript =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zb.dex.grpc.integration.ZbBlockchainApi/RunAssetScript',
      request,
      metadata || {},
      methodDescriptor_ZbBlockchainApi_RunAssetScript);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zb.dex.grpc.integration.HasAddressScriptRequest,
 *   !proto.zb.dex.grpc.integration.HasScriptResponse>}
 */
const methodDescriptor_ZbBlockchainApi_HasAddressScript = new grpc.web.MethodDescriptor(
  '/zb.dex.grpc.integration.ZbBlockchainApi/HasAddressScript',
  grpc.web.MethodType.UNARY,
  proto.zb.dex.grpc.integration.HasAddressScriptRequest,
  proto.zb.dex.grpc.integration.HasScriptResponse,
  /**
   * @param {!proto.zb.dex.grpc.integration.HasAddressScriptRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.dex.grpc.integration.HasScriptResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zb.dex.grpc.integration.HasAddressScriptRequest,
 *   !proto.zb.dex.grpc.integration.HasScriptResponse>}
 */
const methodInfo_ZbBlockchainApi_HasAddressScript = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.dex.grpc.integration.HasScriptResponse,
  /**
   * @param {!proto.zb.dex.grpc.integration.HasAddressScriptRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.dex.grpc.integration.HasScriptResponse.deserializeBinary
);


/**
 * @param {!proto.zb.dex.grpc.integration.HasAddressScriptRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zb.dex.grpc.integration.HasScriptResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zb.dex.grpc.integration.HasScriptResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiClient.prototype.hasAddressScript =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zb.dex.grpc.integration.ZbBlockchainApi/HasAddressScript',
      request,
      metadata || {},
      methodDescriptor_ZbBlockchainApi_HasAddressScript,
      callback);
};


/**
 * @param {!proto.zb.dex.grpc.integration.HasAddressScriptRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zb.dex.grpc.integration.HasScriptResponse>}
 *     Promise that resolves to the response
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiPromiseClient.prototype.hasAddressScript =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zb.dex.grpc.integration.ZbBlockchainApi/HasAddressScript',
      request,
      metadata || {},
      methodDescriptor_ZbBlockchainApi_HasAddressScript);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zb.dex.grpc.integration.RunAddressScriptRequest,
 *   !proto.zb.dex.grpc.integration.RunScriptResponse>}
 */
const methodDescriptor_ZbBlockchainApi_RunAddressScript = new grpc.web.MethodDescriptor(
  '/zb.dex.grpc.integration.ZbBlockchainApi/RunAddressScript',
  grpc.web.MethodType.UNARY,
  proto.zb.dex.grpc.integration.RunAddressScriptRequest,
  proto.zb.dex.grpc.integration.RunScriptResponse,
  /**
   * @param {!proto.zb.dex.grpc.integration.RunAddressScriptRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.dex.grpc.integration.RunScriptResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zb.dex.grpc.integration.RunAddressScriptRequest,
 *   !proto.zb.dex.grpc.integration.RunScriptResponse>}
 */
const methodInfo_ZbBlockchainApi_RunAddressScript = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.dex.grpc.integration.RunScriptResponse,
  /**
   * @param {!proto.zb.dex.grpc.integration.RunAddressScriptRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.dex.grpc.integration.RunScriptResponse.deserializeBinary
);


/**
 * @param {!proto.zb.dex.grpc.integration.RunAddressScriptRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zb.dex.grpc.integration.RunScriptResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zb.dex.grpc.integration.RunScriptResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiClient.prototype.runAddressScript =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zb.dex.grpc.integration.ZbBlockchainApi/RunAddressScript',
      request,
      metadata || {},
      methodDescriptor_ZbBlockchainApi_RunAddressScript,
      callback);
};


/**
 * @param {!proto.zb.dex.grpc.integration.RunAddressScriptRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zb.dex.grpc.integration.RunScriptResponse>}
 *     Promise that resolves to the response
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiPromiseClient.prototype.runAddressScript =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zb.dex.grpc.integration.ZbBlockchainApi/RunAddressScript',
      request,
      metadata || {},
      methodDescriptor_ZbBlockchainApi_RunAddressScript);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zb.dex.grpc.integration.ForgedOrderRequest,
 *   !proto.zb.dex.grpc.integration.ForgedOrderResponse>}
 */
const methodDescriptor_ZbBlockchainApi_ForgedOrder = new grpc.web.MethodDescriptor(
  '/zb.dex.grpc.integration.ZbBlockchainApi/ForgedOrder',
  grpc.web.MethodType.UNARY,
  proto.zb.dex.grpc.integration.ForgedOrderRequest,
  proto.zb.dex.grpc.integration.ForgedOrderResponse,
  /**
   * @param {!proto.zb.dex.grpc.integration.ForgedOrderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.dex.grpc.integration.ForgedOrderResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zb.dex.grpc.integration.ForgedOrderRequest,
 *   !proto.zb.dex.grpc.integration.ForgedOrderResponse>}
 */
const methodInfo_ZbBlockchainApi_ForgedOrder = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.dex.grpc.integration.ForgedOrderResponse,
  /**
   * @param {!proto.zb.dex.grpc.integration.ForgedOrderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.dex.grpc.integration.ForgedOrderResponse.deserializeBinary
);


/**
 * @param {!proto.zb.dex.grpc.integration.ForgedOrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zb.dex.grpc.integration.ForgedOrderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zb.dex.grpc.integration.ForgedOrderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiClient.prototype.forgedOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zb.dex.grpc.integration.ZbBlockchainApi/ForgedOrder',
      request,
      metadata || {},
      methodDescriptor_ZbBlockchainApi_ForgedOrder,
      callback);
};


/**
 * @param {!proto.zb.dex.grpc.integration.ForgedOrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zb.dex.grpc.integration.ForgedOrderResponse>}
 *     Promise that resolves to the response
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiPromiseClient.prototype.forgedOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zb.dex.grpc.integration.ZbBlockchainApi/ForgedOrder',
      request,
      metadata || {},
      methodDescriptor_ZbBlockchainApi_ForgedOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.zb.dex.grpc.integration.UtxEvent>}
 */
const methodDescriptor_ZbBlockchainApi_GetUtxEvents = new grpc.web.MethodDescriptor(
  '/zb.dex.grpc.integration.ZbBlockchainApi/GetUtxEvents',
  grpc.web.MethodType.SERVER_STREAMING,
  google_protobuf_empty_pb.Empty,
  proto.zb.dex.grpc.integration.UtxEvent,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.dex.grpc.integration.UtxEvent.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.zb.dex.grpc.integration.UtxEvent>}
 */
const methodInfo_ZbBlockchainApi_GetUtxEvents = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.dex.grpc.integration.UtxEvent,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.dex.grpc.integration.UtxEvent.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zb.dex.grpc.integration.UtxEvent>}
 *     The XHR Node Readable Stream
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiClient.prototype.getUtxEvents =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zb.dex.grpc.integration.ZbBlockchainApi/GetUtxEvents',
      request,
      metadata || {},
      methodDescriptor_ZbBlockchainApi_GetUtxEvents);
};


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zb.dex.grpc.integration.UtxEvent>}
 *     The XHR Node Readable Stream
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiPromiseClient.prototype.getUtxEvents =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zb.dex.grpc.integration.ZbBlockchainApi/GetUtxEvents',
      request,
      metadata || {},
      methodDescriptor_ZbBlockchainApi_GetUtxEvents);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.zb.dex.grpc.integration.CurrentBlockInfoResponse>}
 */
const methodDescriptor_ZbBlockchainApi_GetCurrentBlockInfo = new grpc.web.MethodDescriptor(
  '/zb.dex.grpc.integration.ZbBlockchainApi/GetCurrentBlockInfo',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.zb.dex.grpc.integration.CurrentBlockInfoResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.dex.grpc.integration.CurrentBlockInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.zb.dex.grpc.integration.CurrentBlockInfoResponse>}
 */
const methodInfo_ZbBlockchainApi_GetCurrentBlockInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.dex.grpc.integration.CurrentBlockInfoResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.dex.grpc.integration.CurrentBlockInfoResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zb.dex.grpc.integration.CurrentBlockInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zb.dex.grpc.integration.CurrentBlockInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiClient.prototype.getCurrentBlockInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zb.dex.grpc.integration.ZbBlockchainApi/GetCurrentBlockInfo',
      request,
      metadata || {},
      methodDescriptor_ZbBlockchainApi_GetCurrentBlockInfo,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zb.dex.grpc.integration.CurrentBlockInfoResponse>}
 *     Promise that resolves to the response
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiPromiseClient.prototype.getCurrentBlockInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zb.dex.grpc.integration.ZbBlockchainApi/GetCurrentBlockInfo',
      request,
      metadata || {},
      methodDescriptor_ZbBlockchainApi_GetCurrentBlockInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zb.dex.grpc.integration.AddressRequest,
 *   !proto.zb.dex.grpc.integration.GetOutgoingLeasingResponse>}
 */
const methodDescriptor_ZbBlockchainApi_GetOutgoingLeasing = new grpc.web.MethodDescriptor(
  '/zb.dex.grpc.integration.ZbBlockchainApi/GetOutgoingLeasing',
  grpc.web.MethodType.UNARY,
  proto.zb.dex.grpc.integration.AddressRequest,
  proto.zb.dex.grpc.integration.GetOutgoingLeasingResponse,
  /**
   * @param {!proto.zb.dex.grpc.integration.AddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.dex.grpc.integration.GetOutgoingLeasingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zb.dex.grpc.integration.AddressRequest,
 *   !proto.zb.dex.grpc.integration.GetOutgoingLeasingResponse>}
 */
const methodInfo_ZbBlockchainApi_GetOutgoingLeasing = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.dex.grpc.integration.GetOutgoingLeasingResponse,
  /**
   * @param {!proto.zb.dex.grpc.integration.AddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.dex.grpc.integration.GetOutgoingLeasingResponse.deserializeBinary
);


/**
 * @param {!proto.zb.dex.grpc.integration.AddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zb.dex.grpc.integration.GetOutgoingLeasingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zb.dex.grpc.integration.GetOutgoingLeasingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiClient.prototype.getOutgoingLeasing =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zb.dex.grpc.integration.ZbBlockchainApi/GetOutgoingLeasing',
      request,
      metadata || {},
      methodDescriptor_ZbBlockchainApi_GetOutgoingLeasing,
      callback);
};


/**
 * @param {!proto.zb.dex.grpc.integration.AddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zb.dex.grpc.integration.GetOutgoingLeasingResponse>}
 *     Promise that resolves to the response
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiPromiseClient.prototype.getOutgoingLeasing =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zb.dex.grpc.integration.ZbBlockchainApi/GetOutgoingLeasing',
      request,
      metadata || {},
      methodDescriptor_ZbBlockchainApi_GetOutgoingLeasing);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest,
 *   !proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse>}
 */
const methodDescriptor_ZbBlockchainApi_GetAddressPartialRegularBalance = new grpc.web.MethodDescriptor(
  '/zb.dex.grpc.integration.ZbBlockchainApi/GetAddressPartialRegularBalance',
  grpc.web.MethodType.UNARY,
  proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest,
  proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse,
  /**
   * @param {!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest,
 *   !proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse>}
 */
const methodInfo_ZbBlockchainApi_GetAddressPartialRegularBalance = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse,
  /**
   * @param {!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse.deserializeBinary
);


/**
 * @param {!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiClient.prototype.getAddressPartialRegularBalance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zb.dex.grpc.integration.ZbBlockchainApi/GetAddressPartialRegularBalance',
      request,
      metadata || {},
      methodDescriptor_ZbBlockchainApi_GetAddressPartialRegularBalance,
      callback);
};


/**
 * @param {!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zb.dex.grpc.integration.GetAddressPartialRegularBalanceResponse>}
 *     Promise that resolves to the response
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiPromiseClient.prototype.getAddressPartialRegularBalance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zb.dex.grpc.integration.ZbBlockchainApi/GetAddressPartialRegularBalance',
      request,
      metadata || {},
      methodDescriptor_ZbBlockchainApi_GetAddressPartialRegularBalance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest,
 *   !proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse>}
 */
const methodDescriptor_ZbBlockchainApi_GetAddressFullRegularBalance = new grpc.web.MethodDescriptor(
  '/zb.dex.grpc.integration.ZbBlockchainApi/GetAddressFullRegularBalance',
  grpc.web.MethodType.UNARY,
  proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest,
  proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse,
  /**
   * @param {!proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest,
 *   !proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse>}
 */
const methodInfo_ZbBlockchainApi_GetAddressFullRegularBalance = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse,
  /**
   * @param {!proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse.deserializeBinary
);


/**
 * @param {!proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiClient.prototype.getAddressFullRegularBalance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zb.dex.grpc.integration.ZbBlockchainApi/GetAddressFullRegularBalance',
      request,
      metadata || {},
      methodDescriptor_ZbBlockchainApi_GetAddressFullRegularBalance,
      callback);
};


/**
 * @param {!proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zb.dex.grpc.integration.GetAddressFullRegularBalanceResponse>}
 *     Promise that resolves to the response
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiPromiseClient.prototype.getAddressFullRegularBalance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zb.dex.grpc.integration.ZbBlockchainApi/GetAddressFullRegularBalance',
      request,
      metadata || {},
      methodDescriptor_ZbBlockchainApi_GetAddressFullRegularBalance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zb.dex.grpc.integration.GetBalancesRequest,
 *   !proto.zb.dex.grpc.integration.GetBalancesResponse>}
 */
const methodDescriptor_ZbBlockchainApi_GetBalances = new grpc.web.MethodDescriptor(
  '/zb.dex.grpc.integration.ZbBlockchainApi/GetBalances',
  grpc.web.MethodType.UNARY,
  proto.zb.dex.grpc.integration.GetBalancesRequest,
  proto.zb.dex.grpc.integration.GetBalancesResponse,
  /**
   * @param {!proto.zb.dex.grpc.integration.GetBalancesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.dex.grpc.integration.GetBalancesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zb.dex.grpc.integration.GetBalancesRequest,
 *   !proto.zb.dex.grpc.integration.GetBalancesResponse>}
 */
const methodInfo_ZbBlockchainApi_GetBalances = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.dex.grpc.integration.GetBalancesResponse,
  /**
   * @param {!proto.zb.dex.grpc.integration.GetBalancesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.dex.grpc.integration.GetBalancesResponse.deserializeBinary
);


/**
 * @param {!proto.zb.dex.grpc.integration.GetBalancesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zb.dex.grpc.integration.GetBalancesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zb.dex.grpc.integration.GetBalancesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiClient.prototype.getBalances =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zb.dex.grpc.integration.ZbBlockchainApi/GetBalances',
      request,
      metadata || {},
      methodDescriptor_ZbBlockchainApi_GetBalances,
      callback);
};


/**
 * @param {!proto.zb.dex.grpc.integration.GetBalancesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zb.dex.grpc.integration.GetBalancesResponse>}
 *     Promise that resolves to the response
 */
proto.zb.dex.grpc.integration.ZbBlockchainApiPromiseClient.prototype.getBalances =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zb.dex.grpc.integration.ZbBlockchainApi/GetBalances',
      request,
      metadata || {},
      methodDescriptor_ZbBlockchainApi_GetBalances);
};


module.exports = proto.zb.dex.grpc.integration;

