/**
 * @fileoverview gRPC-Web generated client stub for zb.events.grpc
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var events_pb = require('./events_pb.js')
const proto = {};
proto.zb = {};
proto.zb.events = {};
proto.zb.events.grpc = require('./blockchain_updates_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.zb.events.grpc.BlockchainUpdatesApiClient =
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
proto.zb.events.grpc.BlockchainUpdatesApiPromiseClient =
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
 *   !proto.zb.events.grpc.GetBlockUpdateRequest,
 *   !proto.zb.events.grpc.GetBlockUpdateResponse>}
 */
const methodDescriptor_BlockchainUpdatesApi_GetBlockUpdate = new grpc.web.MethodDescriptor(
  '/zb.events.grpc.BlockchainUpdatesApi/GetBlockUpdate',
  grpc.web.MethodType.UNARY,
  proto.zb.events.grpc.GetBlockUpdateRequest,
  proto.zb.events.grpc.GetBlockUpdateResponse,
  /**
   * @param {!proto.zb.events.grpc.GetBlockUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.events.grpc.GetBlockUpdateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zb.events.grpc.GetBlockUpdateRequest,
 *   !proto.zb.events.grpc.GetBlockUpdateResponse>}
 */
const methodInfo_BlockchainUpdatesApi_GetBlockUpdate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.events.grpc.GetBlockUpdateResponse,
  /**
   * @param {!proto.zb.events.grpc.GetBlockUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.events.grpc.GetBlockUpdateResponse.deserializeBinary
);


/**
 * @param {!proto.zb.events.grpc.GetBlockUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zb.events.grpc.GetBlockUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zb.events.grpc.GetBlockUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zb.events.grpc.BlockchainUpdatesApiClient.prototype.getBlockUpdate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zb.events.grpc.BlockchainUpdatesApi/GetBlockUpdate',
      request,
      metadata || {},
      methodDescriptor_BlockchainUpdatesApi_GetBlockUpdate,
      callback);
};


/**
 * @param {!proto.zb.events.grpc.GetBlockUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zb.events.grpc.GetBlockUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.zb.events.grpc.BlockchainUpdatesApiPromiseClient.prototype.getBlockUpdate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zb.events.grpc.BlockchainUpdatesApi/GetBlockUpdate',
      request,
      metadata || {},
      methodDescriptor_BlockchainUpdatesApi_GetBlockUpdate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zb.events.grpc.GetBlockUpdatesRangeRequest,
 *   !proto.zb.events.grpc.GetBlockUpdatesRangeResponse>}
 */
const methodDescriptor_BlockchainUpdatesApi_GetBlockUpdatesRange = new grpc.web.MethodDescriptor(
  '/zb.events.grpc.BlockchainUpdatesApi/GetBlockUpdatesRange',
  grpc.web.MethodType.UNARY,
  proto.zb.events.grpc.GetBlockUpdatesRangeRequest,
  proto.zb.events.grpc.GetBlockUpdatesRangeResponse,
  /**
   * @param {!proto.zb.events.grpc.GetBlockUpdatesRangeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.events.grpc.GetBlockUpdatesRangeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zb.events.grpc.GetBlockUpdatesRangeRequest,
 *   !proto.zb.events.grpc.GetBlockUpdatesRangeResponse>}
 */
const methodInfo_BlockchainUpdatesApi_GetBlockUpdatesRange = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.events.grpc.GetBlockUpdatesRangeResponse,
  /**
   * @param {!proto.zb.events.grpc.GetBlockUpdatesRangeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.events.grpc.GetBlockUpdatesRangeResponse.deserializeBinary
);


/**
 * @param {!proto.zb.events.grpc.GetBlockUpdatesRangeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zb.events.grpc.GetBlockUpdatesRangeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zb.events.grpc.GetBlockUpdatesRangeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zb.events.grpc.BlockchainUpdatesApiClient.prototype.getBlockUpdatesRange =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zb.events.grpc.BlockchainUpdatesApi/GetBlockUpdatesRange',
      request,
      metadata || {},
      methodDescriptor_BlockchainUpdatesApi_GetBlockUpdatesRange,
      callback);
};


/**
 * @param {!proto.zb.events.grpc.GetBlockUpdatesRangeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zb.events.grpc.GetBlockUpdatesRangeResponse>}
 *     Promise that resolves to the response
 */
proto.zb.events.grpc.BlockchainUpdatesApiPromiseClient.prototype.getBlockUpdatesRange =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zb.events.grpc.BlockchainUpdatesApi/GetBlockUpdatesRange',
      request,
      metadata || {},
      methodDescriptor_BlockchainUpdatesApi_GetBlockUpdatesRange);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zb.events.grpc.SubscribeRequest,
 *   !proto.zb.events.grpc.SubscribeEvent>}
 */
const methodDescriptor_BlockchainUpdatesApi_Subscribe = new grpc.web.MethodDescriptor(
  '/zb.events.grpc.BlockchainUpdatesApi/Subscribe',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.zb.events.grpc.SubscribeRequest,
  proto.zb.events.grpc.SubscribeEvent,
  /**
   * @param {!proto.zb.events.grpc.SubscribeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.events.grpc.SubscribeEvent.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zb.events.grpc.SubscribeRequest,
 *   !proto.zb.events.grpc.SubscribeEvent>}
 */
const methodInfo_BlockchainUpdatesApi_Subscribe = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.events.grpc.SubscribeEvent,
  /**
   * @param {!proto.zb.events.grpc.SubscribeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.events.grpc.SubscribeEvent.deserializeBinary
);


/**
 * @param {!proto.zb.events.grpc.SubscribeRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zb.events.grpc.SubscribeEvent>}
 *     The XHR Node Readable Stream
 */
proto.zb.events.grpc.BlockchainUpdatesApiClient.prototype.subscribe =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zb.events.grpc.BlockchainUpdatesApi/Subscribe',
      request,
      metadata || {},
      methodDescriptor_BlockchainUpdatesApi_Subscribe);
};


/**
 * @param {!proto.zb.events.grpc.SubscribeRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zb.events.grpc.SubscribeEvent>}
 *     The XHR Node Readable Stream
 */
proto.zb.events.grpc.BlockchainUpdatesApiPromiseClient.prototype.subscribe =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zb.events.grpc.BlockchainUpdatesApi/Subscribe',
      request,
      metadata || {},
      methodDescriptor_BlockchainUpdatesApi_Subscribe);
};


module.exports = proto.zb.events.grpc;

