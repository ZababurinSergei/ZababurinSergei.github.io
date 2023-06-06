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


var amount_pb = require('./amount_pb.js')

var transaction_pb = require('./transaction_pb.js')

var recipient_pb = require('./recipient_pb.js')

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')
const proto = {};
proto.zb = {};
proto.zb.node = {};
proto.zb.node.grpc = require('./accounts_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.zb.node.grpc.AccountsApiClient =
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
proto.zb.node.grpc.AccountsApiPromiseClient =
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
 *   !proto.zb.node.grpc.BalancesRequest,
 *   !proto.zb.node.grpc.BalanceResponse>}
 */
const methodDescriptor_AccountsApi_GetBalances = new grpc.web.MethodDescriptor(
  '/zb.node.grpc.AccountsApi/GetBalances',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.zb.node.grpc.BalancesRequest,
  proto.zb.node.grpc.BalanceResponse,
  /**
   * @param {!proto.zb.node.grpc.BalancesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.node.grpc.BalanceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zb.node.grpc.BalancesRequest,
 *   !proto.zb.node.grpc.BalanceResponse>}
 */
const methodInfo_AccountsApi_GetBalances = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.node.grpc.BalanceResponse,
  /**
   * @param {!proto.zb.node.grpc.BalancesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.node.grpc.BalanceResponse.deserializeBinary
);


/**
 * @param {!proto.zb.node.grpc.BalancesRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zb.node.grpc.BalanceResponse>}
 *     The XHR Node Readable Stream
 */
proto.zb.node.grpc.AccountsApiClient.prototype.getBalances =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zb.node.grpc.AccountsApi/GetBalances',
      request,
      metadata || {},
      methodDescriptor_AccountsApi_GetBalances);
};


/**
 * @param {!proto.zb.node.grpc.BalancesRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zb.node.grpc.BalanceResponse>}
 *     The XHR Node Readable Stream
 */
proto.zb.node.grpc.AccountsApiPromiseClient.prototype.getBalances =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zb.node.grpc.AccountsApi/GetBalances',
      request,
      metadata || {},
      methodDescriptor_AccountsApi_GetBalances);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zb.node.grpc.AccountRequest,
 *   !proto.zb.node.grpc.ScriptData>}
 */
const methodDescriptor_AccountsApi_GetScript = new grpc.web.MethodDescriptor(
  '/zb.node.grpc.AccountsApi/GetScript',
  grpc.web.MethodType.UNARY,
  proto.zb.node.grpc.AccountRequest,
  proto.zb.node.grpc.ScriptData,
  /**
   * @param {!proto.zb.node.grpc.AccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.node.grpc.ScriptData.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zb.node.grpc.AccountRequest,
 *   !proto.zb.node.grpc.ScriptData>}
 */
const methodInfo_AccountsApi_GetScript = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.node.grpc.ScriptData,
  /**
   * @param {!proto.zb.node.grpc.AccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.node.grpc.ScriptData.deserializeBinary
);


/**
 * @param {!proto.zb.node.grpc.AccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zb.node.grpc.ScriptData)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zb.node.grpc.ScriptData>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zb.node.grpc.AccountsApiClient.prototype.getScript =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zb.node.grpc.AccountsApi/GetScript',
      request,
      metadata || {},
      methodDescriptor_AccountsApi_GetScript,
      callback);
};


/**
 * @param {!proto.zb.node.grpc.AccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zb.node.grpc.ScriptData>}
 *     Promise that resolves to the response
 */
proto.zb.node.grpc.AccountsApiPromiseClient.prototype.getScript =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zb.node.grpc.AccountsApi/GetScript',
      request,
      metadata || {},
      methodDescriptor_AccountsApi_GetScript);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zb.node.grpc.AccountRequest,
 *   !proto.zb.node.grpc.LeaseResponse>}
 */
const methodDescriptor_AccountsApi_GetActiveLeases = new grpc.web.MethodDescriptor(
  '/zb.node.grpc.AccountsApi/GetActiveLeases',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.zb.node.grpc.AccountRequest,
  proto.zb.node.grpc.LeaseResponse,
  /**
   * @param {!proto.zb.node.grpc.AccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.node.grpc.LeaseResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zb.node.grpc.AccountRequest,
 *   !proto.zb.node.grpc.LeaseResponse>}
 */
const methodInfo_AccountsApi_GetActiveLeases = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.node.grpc.LeaseResponse,
  /**
   * @param {!proto.zb.node.grpc.AccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.node.grpc.LeaseResponse.deserializeBinary
);


/**
 * @param {!proto.zb.node.grpc.AccountRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zb.node.grpc.LeaseResponse>}
 *     The XHR Node Readable Stream
 */
proto.zb.node.grpc.AccountsApiClient.prototype.getActiveLeases =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zb.node.grpc.AccountsApi/GetActiveLeases',
      request,
      metadata || {},
      methodDescriptor_AccountsApi_GetActiveLeases);
};


/**
 * @param {!proto.zb.node.grpc.AccountRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zb.node.grpc.LeaseResponse>}
 *     The XHR Node Readable Stream
 */
proto.zb.node.grpc.AccountsApiPromiseClient.prototype.getActiveLeases =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zb.node.grpc.AccountsApi/GetActiveLeases',
      request,
      metadata || {},
      methodDescriptor_AccountsApi_GetActiveLeases);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zb.node.grpc.DataRequest,
 *   !proto.zb.node.grpc.DataEntryResponse>}
 */
const methodDescriptor_AccountsApi_GetDataEntries = new grpc.web.MethodDescriptor(
  '/zb.node.grpc.AccountsApi/GetDataEntries',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.zb.node.grpc.DataRequest,
  proto.zb.node.grpc.DataEntryResponse,
  /**
   * @param {!proto.zb.node.grpc.DataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.node.grpc.DataEntryResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zb.node.grpc.DataRequest,
 *   !proto.zb.node.grpc.DataEntryResponse>}
 */
const methodInfo_AccountsApi_GetDataEntries = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.node.grpc.DataEntryResponse,
  /**
   * @param {!proto.zb.node.grpc.DataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.node.grpc.DataEntryResponse.deserializeBinary
);


/**
 * @param {!proto.zb.node.grpc.DataRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zb.node.grpc.DataEntryResponse>}
 *     The XHR Node Readable Stream
 */
proto.zb.node.grpc.AccountsApiClient.prototype.getDataEntries =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zb.node.grpc.AccountsApi/GetDataEntries',
      request,
      metadata || {},
      methodDescriptor_AccountsApi_GetDataEntries);
};


/**
 * @param {!proto.zb.node.grpc.DataRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zb.node.grpc.DataEntryResponse>}
 *     The XHR Node Readable Stream
 */
proto.zb.node.grpc.AccountsApiPromiseClient.prototype.getDataEntries =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zb.node.grpc.AccountsApi/GetDataEntries',
      request,
      metadata || {},
      methodDescriptor_AccountsApi_GetDataEntries);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.StringValue,
 *   !proto.google.protobuf.BytesValue>}
 */
const methodDescriptor_AccountsApi_ResolveAlias = new grpc.web.MethodDescriptor(
  '/zb.node.grpc.AccountsApi/ResolveAlias',
  grpc.web.MethodType.UNARY,
  google_protobuf_wrappers_pb.StringValue,
  google_protobuf_wrappers_pb.BytesValue,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_wrappers_pb.BytesValue.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.StringValue,
 *   !proto.google.protobuf.BytesValue>}
 */
const methodInfo_AccountsApi_ResolveAlias = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_wrappers_pb.BytesValue,
  /**
   * @param {!proto.google.protobuf.StringValue} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_wrappers_pb.BytesValue.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.BytesValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.BytesValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zb.node.grpc.AccountsApiClient.prototype.resolveAlias =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zb.node.grpc.AccountsApi/ResolveAlias',
      request,
      metadata || {},
      methodDescriptor_AccountsApi_ResolveAlias,
      callback);
};


/**
 * @param {!proto.google.protobuf.StringValue} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.BytesValue>}
 *     Promise that resolves to the response
 */
proto.zb.node.grpc.AccountsApiPromiseClient.prototype.resolveAlias =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zb.node.grpc.AccountsApi/ResolveAlias',
      request,
      metadata || {},
      methodDescriptor_AccountsApi_ResolveAlias);
};


module.exports = proto.zb.node.grpc;

