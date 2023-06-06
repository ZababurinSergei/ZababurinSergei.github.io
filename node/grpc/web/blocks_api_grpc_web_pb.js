/**
 * @fileoverview gRPC-Web generated client stub for zb.node.grpc
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var block_pb = require('./block_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')
const proto = {};
proto.zb = {};
proto.zb.node = {};
proto.zb.node.grpc = require('./blocks_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.zb.node.grpc.BlocksApiClient =
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
proto.zb.node.grpc.BlocksApiPromiseClient =
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
 *   !proto.zb.node.grpc.BlockRequest,
 *   !proto.zb.node.grpc.BlockWithHeight>}
 */
const methodDescriptor_BlocksApi_GetBlock = new grpc.web.MethodDescriptor(
  '/zb.node.grpc.BlocksApi/GetBlock',
  grpc.web.MethodType.UNARY,
  proto.zb.node.grpc.BlockRequest,
  proto.zb.node.grpc.BlockWithHeight,
  /**
   * @param {!proto.zb.node.grpc.BlockRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.node.grpc.BlockWithHeight.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zb.node.grpc.BlockRequest,
 *   !proto.zb.node.grpc.BlockWithHeight>}
 */
const methodInfo_BlocksApi_GetBlock = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.node.grpc.BlockWithHeight,
  /**
   * @param {!proto.zb.node.grpc.BlockRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.node.grpc.BlockWithHeight.deserializeBinary
);


/**
 * @param {!proto.zb.node.grpc.BlockRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zb.node.grpc.BlockWithHeight)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zb.node.grpc.BlockWithHeight>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zb.node.grpc.BlocksApiClient.prototype.getBlock =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zb.node.grpc.BlocksApi/GetBlock',
      request,
      metadata || {},
      methodDescriptor_BlocksApi_GetBlock,
      callback);
};


/**
 * @param {!proto.zb.node.grpc.BlockRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zb.node.grpc.BlockWithHeight>}
 *     Promise that resolves to the response
 */
proto.zb.node.grpc.BlocksApiPromiseClient.prototype.getBlock =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zb.node.grpc.BlocksApi/GetBlock',
      request,
      metadata || {},
      methodDescriptor_BlocksApi_GetBlock);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zb.node.grpc.BlockRangeRequest,
 *   !proto.zb.node.grpc.BlockWithHeight>}
 */
const methodDescriptor_BlocksApi_GetBlockRange = new grpc.web.MethodDescriptor(
  '/zb.node.grpc.BlocksApi/GetBlockRange',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.zb.node.grpc.BlockRangeRequest,
  proto.zb.node.grpc.BlockWithHeight,
  /**
   * @param {!proto.zb.node.grpc.BlockRangeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.node.grpc.BlockWithHeight.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zb.node.grpc.BlockRangeRequest,
 *   !proto.zb.node.grpc.BlockWithHeight>}
 */
const methodInfo_BlocksApi_GetBlockRange = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.node.grpc.BlockWithHeight,
  /**
   * @param {!proto.zb.node.grpc.BlockRangeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.node.grpc.BlockWithHeight.deserializeBinary
);


/**
 * @param {!proto.zb.node.grpc.BlockRangeRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zb.node.grpc.BlockWithHeight>}
 *     The XHR Node Readable Stream
 */
proto.zb.node.grpc.BlocksApiClient.prototype.getBlockRange =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zb.node.grpc.BlocksApi/GetBlockRange',
      request,
      metadata || {},
      methodDescriptor_BlocksApi_GetBlockRange);
};


/**
 * @param {!proto.zb.node.grpc.BlockRangeRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zb.node.grpc.BlockWithHeight>}
 *     The XHR Node Readable Stream
 */
proto.zb.node.grpc.BlocksApiPromiseClient.prototype.getBlockRange =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zb.node.grpc.BlocksApi/GetBlockRange',
      request,
      metadata || {},
      methodDescriptor_BlocksApi_GetBlockRange);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.google.protobuf.UInt32Value>}
 */
const methodDescriptor_BlocksApi_GetCurrentHeight = new grpc.web.MethodDescriptor(
  '/zb.node.grpc.BlocksApi/GetCurrentHeight',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  google_protobuf_wrappers_pb.UInt32Value,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_wrappers_pb.UInt32Value.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.google.protobuf.UInt32Value>}
 */
const methodInfo_BlocksApi_GetCurrentHeight = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_wrappers_pb.UInt32Value,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_wrappers_pb.UInt32Value.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.UInt32Value)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.UInt32Value>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zb.node.grpc.BlocksApiClient.prototype.getCurrentHeight =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zb.node.grpc.BlocksApi/GetCurrentHeight',
      request,
      metadata || {},
      methodDescriptor_BlocksApi_GetCurrentHeight,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.UInt32Value>}
 *     Promise that resolves to the response
 */
proto.zb.node.grpc.BlocksApiPromiseClient.prototype.getCurrentHeight =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zb.node.grpc.BlocksApi/GetCurrentHeight',
      request,
      metadata || {},
      methodDescriptor_BlocksApi_GetCurrentHeight);
};


module.exports = proto.zb.node.grpc;

