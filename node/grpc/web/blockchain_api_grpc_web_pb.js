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


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.zb = {};
proto.zb.node = {};
proto.zb.node.grpc = require('./blockchain_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.zb.node.grpc.BlockchainApiClient =
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
proto.zb.node.grpc.BlockchainApiPromiseClient =
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
 *   !proto.zb.node.grpc.ActivationStatusRequest,
 *   !proto.zb.node.grpc.ActivationStatusResponse>}
 */
const methodDescriptor_BlockchainApi_GetActivationStatus = new grpc.web.MethodDescriptor(
  '/zb.node.grpc.BlockchainApi/GetActivationStatus',
  grpc.web.MethodType.UNARY,
  proto.zb.node.grpc.ActivationStatusRequest,
  proto.zb.node.grpc.ActivationStatusResponse,
  /**
   * @param {!proto.zb.node.grpc.ActivationStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.node.grpc.ActivationStatusResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zb.node.grpc.ActivationStatusRequest,
 *   !proto.zb.node.grpc.ActivationStatusResponse>}
 */
const methodInfo_BlockchainApi_GetActivationStatus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.node.grpc.ActivationStatusResponse,
  /**
   * @param {!proto.zb.node.grpc.ActivationStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.node.grpc.ActivationStatusResponse.deserializeBinary
);


/**
 * @param {!proto.zb.node.grpc.ActivationStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zb.node.grpc.ActivationStatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zb.node.grpc.ActivationStatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zb.node.grpc.BlockchainApiClient.prototype.getActivationStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zb.node.grpc.BlockchainApi/GetActivationStatus',
      request,
      metadata || {},
      methodDescriptor_BlockchainApi_GetActivationStatus,
      callback);
};


/**
 * @param {!proto.zb.node.grpc.ActivationStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zb.node.grpc.ActivationStatusResponse>}
 *     Promise that resolves to the response
 */
proto.zb.node.grpc.BlockchainApiPromiseClient.prototype.getActivationStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zb.node.grpc.BlockchainApi/GetActivationStatus',
      request,
      metadata || {},
      methodDescriptor_BlockchainApi_GetActivationStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.zb.node.grpc.BaseTargetResponse>}
 */
const methodDescriptor_BlockchainApi_GetBaseTarget = new grpc.web.MethodDescriptor(
  '/zb.node.grpc.BlockchainApi/GetBaseTarget',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.zb.node.grpc.BaseTargetResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.node.grpc.BaseTargetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.zb.node.grpc.BaseTargetResponse>}
 */
const methodInfo_BlockchainApi_GetBaseTarget = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.node.grpc.BaseTargetResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.node.grpc.BaseTargetResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zb.node.grpc.BaseTargetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zb.node.grpc.BaseTargetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zb.node.grpc.BlockchainApiClient.prototype.getBaseTarget =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zb.node.grpc.BlockchainApi/GetBaseTarget',
      request,
      metadata || {},
      methodDescriptor_BlockchainApi_GetBaseTarget,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zb.node.grpc.BaseTargetResponse>}
 *     Promise that resolves to the response
 */
proto.zb.node.grpc.BlockchainApiPromiseClient.prototype.getBaseTarget =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zb.node.grpc.BlockchainApi/GetBaseTarget',
      request,
      metadata || {},
      methodDescriptor_BlockchainApi_GetBaseTarget);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.zb.node.grpc.ScoreResponse>}
 */
const methodDescriptor_BlockchainApi_GetCumulativeScore = new grpc.web.MethodDescriptor(
  '/zb.node.grpc.BlockchainApi/GetCumulativeScore',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.zb.node.grpc.ScoreResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.node.grpc.ScoreResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.zb.node.grpc.ScoreResponse>}
 */
const methodInfo_BlockchainApi_GetCumulativeScore = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.node.grpc.ScoreResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.node.grpc.ScoreResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zb.node.grpc.ScoreResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zb.node.grpc.ScoreResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zb.node.grpc.BlockchainApiClient.prototype.getCumulativeScore =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zb.node.grpc.BlockchainApi/GetCumulativeScore',
      request,
      metadata || {},
      methodDescriptor_BlockchainApi_GetCumulativeScore,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zb.node.grpc.ScoreResponse>}
 *     Promise that resolves to the response
 */
proto.zb.node.grpc.BlockchainApiPromiseClient.prototype.getCumulativeScore =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zb.node.grpc.BlockchainApi/GetCumulativeScore',
      request,
      metadata || {},
      methodDescriptor_BlockchainApi_GetCumulativeScore);
};


module.exports = proto.zb.node.grpc;

