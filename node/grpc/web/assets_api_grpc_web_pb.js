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


var transaction_pb = require('./transaction_pb.js')

var accounts_api_pb = require('./accounts_api_pb.js')
const proto = {};
proto.zb = {};
proto.zb.node = {};
proto.zb.node.grpc = require('./assets_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.zb.node.grpc.AssetsApiClient =
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
proto.zb.node.grpc.AssetsApiPromiseClient =
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
 *   !proto.zb.node.grpc.AssetRequest,
 *   !proto.zb.node.grpc.AssetInfoResponse>}
 */
const methodDescriptor_AssetsApi_GetInfo = new grpc.web.MethodDescriptor(
  '/zb.node.grpc.AssetsApi/GetInfo',
  grpc.web.MethodType.UNARY,
  proto.zb.node.grpc.AssetRequest,
  proto.zb.node.grpc.AssetInfoResponse,
  /**
   * @param {!proto.zb.node.grpc.AssetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.node.grpc.AssetInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zb.node.grpc.AssetRequest,
 *   !proto.zb.node.grpc.AssetInfoResponse>}
 */
const methodInfo_AssetsApi_GetInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.node.grpc.AssetInfoResponse,
  /**
   * @param {!proto.zb.node.grpc.AssetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.node.grpc.AssetInfoResponse.deserializeBinary
);


/**
 * @param {!proto.zb.node.grpc.AssetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zb.node.grpc.AssetInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zb.node.grpc.AssetInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zb.node.grpc.AssetsApiClient.prototype.getInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zb.node.grpc.AssetsApi/GetInfo',
      request,
      metadata || {},
      methodDescriptor_AssetsApi_GetInfo,
      callback);
};


/**
 * @param {!proto.zb.node.grpc.AssetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zb.node.grpc.AssetInfoResponse>}
 *     Promise that resolves to the response
 */
proto.zb.node.grpc.AssetsApiPromiseClient.prototype.getInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zb.node.grpc.AssetsApi/GetInfo',
      request,
      metadata || {},
      methodDescriptor_AssetsApi_GetInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zb.node.grpc.NFTRequest,
 *   !proto.zb.node.grpc.NFTResponse>}
 */
const methodDescriptor_AssetsApi_GetNFTList = new grpc.web.MethodDescriptor(
  '/zb.node.grpc.AssetsApi/GetNFTList',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.zb.node.grpc.NFTRequest,
  proto.zb.node.grpc.NFTResponse,
  /**
   * @param {!proto.zb.node.grpc.NFTRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.node.grpc.NFTResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zb.node.grpc.NFTRequest,
 *   !proto.zb.node.grpc.NFTResponse>}
 */
const methodInfo_AssetsApi_GetNFTList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.node.grpc.NFTResponse,
  /**
   * @param {!proto.zb.node.grpc.NFTRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.node.grpc.NFTResponse.deserializeBinary
);


/**
 * @param {!proto.zb.node.grpc.NFTRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zb.node.grpc.NFTResponse>}
 *     The XHR Node Readable Stream
 */
proto.zb.node.grpc.AssetsApiClient.prototype.getNFTList =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zb.node.grpc.AssetsApi/GetNFTList',
      request,
      metadata || {},
      methodDescriptor_AssetsApi_GetNFTList);
};


/**
 * @param {!proto.zb.node.grpc.NFTRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zb.node.grpc.NFTResponse>}
 *     The XHR Node Readable Stream
 */
proto.zb.node.grpc.AssetsApiPromiseClient.prototype.getNFTList =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zb.node.grpc.AssetsApi/GetNFTList',
      request,
      metadata || {},
      methodDescriptor_AssetsApi_GetNFTList);
};


module.exports = proto.zb.node.grpc;

