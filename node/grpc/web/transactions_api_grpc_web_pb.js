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


var recipient_pb = require('./recipient_pb.js')

var transaction_pb = require('./transaction_pb.js')

var invoke_script_result_pb = require('./invoke_script_result_pb.js')
const proto = {};
proto.zb = {};
proto.zb.node = {};
proto.zb.node.grpc = require('./transactions_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.zb.node.grpc.TransactionsApiClient =
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
proto.zb.node.grpc.TransactionsApiPromiseClient =
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
 *   !proto.zb.node.grpc.TransactionsRequest,
 *   !proto.zb.node.grpc.TransactionResponse>}
 */
const methodDescriptor_TransactionsApi_GetTransactions = new grpc.web.MethodDescriptor(
  '/zb.node.grpc.TransactionsApi/GetTransactions',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.zb.node.grpc.TransactionsRequest,
  proto.zb.node.grpc.TransactionResponse,
  /**
   * @param {!proto.zb.node.grpc.TransactionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.node.grpc.TransactionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zb.node.grpc.TransactionsRequest,
 *   !proto.zb.node.grpc.TransactionResponse>}
 */
const methodInfo_TransactionsApi_GetTransactions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.node.grpc.TransactionResponse,
  /**
   * @param {!proto.zb.node.grpc.TransactionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.node.grpc.TransactionResponse.deserializeBinary
);


/**
 * @param {!proto.zb.node.grpc.TransactionsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zb.node.grpc.TransactionResponse>}
 *     The XHR Node Readable Stream
 */
proto.zb.node.grpc.TransactionsApiClient.prototype.getTransactions =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zb.node.grpc.TransactionsApi/GetTransactions',
      request,
      metadata || {},
      methodDescriptor_TransactionsApi_GetTransactions);
};


/**
 * @param {!proto.zb.node.grpc.TransactionsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zb.node.grpc.TransactionResponse>}
 *     The XHR Node Readable Stream
 */
proto.zb.node.grpc.TransactionsApiPromiseClient.prototype.getTransactions =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zb.node.grpc.TransactionsApi/GetTransactions',
      request,
      metadata || {},
      methodDescriptor_TransactionsApi_GetTransactions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zb.node.grpc.TransactionsRequest,
 *   !proto.zb.node.grpc.InvokeScriptResultResponse>}
 */
const methodDescriptor_TransactionsApi_GetStateChanges = new grpc.web.MethodDescriptor(
  '/zb.node.grpc.TransactionsApi/GetStateChanges',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.zb.node.grpc.TransactionsRequest,
  proto.zb.node.grpc.InvokeScriptResultResponse,
  /**
   * @param {!proto.zb.node.grpc.TransactionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.node.grpc.InvokeScriptResultResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zb.node.grpc.TransactionsRequest,
 *   !proto.zb.node.grpc.InvokeScriptResultResponse>}
 */
const methodInfo_TransactionsApi_GetStateChanges = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.node.grpc.InvokeScriptResultResponse,
  /**
   * @param {!proto.zb.node.grpc.TransactionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.node.grpc.InvokeScriptResultResponse.deserializeBinary
);


/**
 * @param {!proto.zb.node.grpc.TransactionsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zb.node.grpc.InvokeScriptResultResponse>}
 *     The XHR Node Readable Stream
 */
proto.zb.node.grpc.TransactionsApiClient.prototype.getStateChanges =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zb.node.grpc.TransactionsApi/GetStateChanges',
      request,
      metadata || {},
      methodDescriptor_TransactionsApi_GetStateChanges);
};


/**
 * @param {!proto.zb.node.grpc.TransactionsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zb.node.grpc.InvokeScriptResultResponse>}
 *     The XHR Node Readable Stream
 */
proto.zb.node.grpc.TransactionsApiPromiseClient.prototype.getStateChanges =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zb.node.grpc.TransactionsApi/GetStateChanges',
      request,
      metadata || {},
      methodDescriptor_TransactionsApi_GetStateChanges);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zb.node.grpc.TransactionsByIdRequest,
 *   !proto.zb.node.grpc.TransactionStatus>}
 */
const methodDescriptor_TransactionsApi_GetStatuses = new grpc.web.MethodDescriptor(
  '/zb.node.grpc.TransactionsApi/GetStatuses',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.zb.node.grpc.TransactionsByIdRequest,
  proto.zb.node.grpc.TransactionStatus,
  /**
   * @param {!proto.zb.node.grpc.TransactionsByIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.node.grpc.TransactionStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zb.node.grpc.TransactionsByIdRequest,
 *   !proto.zb.node.grpc.TransactionStatus>}
 */
const methodInfo_TransactionsApi_GetStatuses = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.node.grpc.TransactionStatus,
  /**
   * @param {!proto.zb.node.grpc.TransactionsByIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.node.grpc.TransactionStatus.deserializeBinary
);


/**
 * @param {!proto.zb.node.grpc.TransactionsByIdRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zb.node.grpc.TransactionStatus>}
 *     The XHR Node Readable Stream
 */
proto.zb.node.grpc.TransactionsApiClient.prototype.getStatuses =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zb.node.grpc.TransactionsApi/GetStatuses',
      request,
      metadata || {},
      methodDescriptor_TransactionsApi_GetStatuses);
};


/**
 * @param {!proto.zb.node.grpc.TransactionsByIdRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zb.node.grpc.TransactionStatus>}
 *     The XHR Node Readable Stream
 */
proto.zb.node.grpc.TransactionsApiPromiseClient.prototype.getStatuses =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zb.node.grpc.TransactionsApi/GetStatuses',
      request,
      metadata || {},
      methodDescriptor_TransactionsApi_GetStatuses);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zb.node.grpc.TransactionsRequest,
 *   !proto.zb.node.grpc.TransactionResponse>}
 */
const methodDescriptor_TransactionsApi_GetUnconfirmed = new grpc.web.MethodDescriptor(
  '/zb.node.grpc.TransactionsApi/GetUnconfirmed',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.zb.node.grpc.TransactionsRequest,
  proto.zb.node.grpc.TransactionResponse,
  /**
   * @param {!proto.zb.node.grpc.TransactionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.node.grpc.TransactionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zb.node.grpc.TransactionsRequest,
 *   !proto.zb.node.grpc.TransactionResponse>}
 */
const methodInfo_TransactionsApi_GetUnconfirmed = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zb.node.grpc.TransactionResponse,
  /**
   * @param {!proto.zb.node.grpc.TransactionsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zb.node.grpc.TransactionResponse.deserializeBinary
);


/**
 * @param {!proto.zb.node.grpc.TransactionsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zb.node.grpc.TransactionResponse>}
 *     The XHR Node Readable Stream
 */
proto.zb.node.grpc.TransactionsApiClient.prototype.getUnconfirmed =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zb.node.grpc.TransactionsApi/GetUnconfirmed',
      request,
      metadata || {},
      methodDescriptor_TransactionsApi_GetUnconfirmed);
};


/**
 * @param {!proto.zb.node.grpc.TransactionsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zb.node.grpc.TransactionResponse>}
 *     The XHR Node Readable Stream
 */
proto.zb.node.grpc.TransactionsApiPromiseClient.prototype.getUnconfirmed =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zb.node.grpc.TransactionsApi/GetUnconfirmed',
      request,
      metadata || {},
      methodDescriptor_TransactionsApi_GetUnconfirmed);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zb.node.grpc.SignRequest,
 *   !proto.zb.SignedTransaction>}
 */
const methodDescriptor_TransactionsApi_Sign = new grpc.web.MethodDescriptor(
  '/zb.node.grpc.TransactionsApi/Sign',
  grpc.web.MethodType.UNARY,
  proto.zb.node.grpc.SignRequest,
  transaction_pb.SignedTransaction,
  /**
   * @param {!proto.zb.node.grpc.SignRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  transaction_pb.SignedTransaction.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zb.node.grpc.SignRequest,
 *   !proto.zb.SignedTransaction>}
 */
const methodInfo_TransactionsApi_Sign = new grpc.web.AbstractClientBase.MethodInfo(
  transaction_pb.SignedTransaction,
  /**
   * @param {!proto.zb.node.grpc.SignRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  transaction_pb.SignedTransaction.deserializeBinary
);


/**
 * @param {!proto.zb.node.grpc.SignRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zb.SignedTransaction)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zb.SignedTransaction>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zb.node.grpc.TransactionsApiClient.prototype.sign =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zb.node.grpc.TransactionsApi/Sign',
      request,
      metadata || {},
      methodDescriptor_TransactionsApi_Sign,
      callback);
};


/**
 * @param {!proto.zb.node.grpc.SignRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zb.SignedTransaction>}
 *     Promise that resolves to the response
 */
proto.zb.node.grpc.TransactionsApiPromiseClient.prototype.sign =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zb.node.grpc.TransactionsApi/Sign',
      request,
      metadata || {},
      methodDescriptor_TransactionsApi_Sign);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zb.SignedTransaction,
 *   !proto.zb.SignedTransaction>}
 */
const methodDescriptor_TransactionsApi_Broadcast = new grpc.web.MethodDescriptor(
  '/zb.node.grpc.TransactionsApi/Broadcast',
  grpc.web.MethodType.UNARY,
  transaction_pb.SignedTransaction,
  transaction_pb.SignedTransaction,
  /**
   * @param {!proto.zb.SignedTransaction} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  transaction_pb.SignedTransaction.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zb.SignedTransaction,
 *   !proto.zb.SignedTransaction>}
 */
const methodInfo_TransactionsApi_Broadcast = new grpc.web.AbstractClientBase.MethodInfo(
  transaction_pb.SignedTransaction,
  /**
   * @param {!proto.zb.SignedTransaction} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  transaction_pb.SignedTransaction.deserializeBinary
);


/**
 * @param {!proto.zb.SignedTransaction} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zb.SignedTransaction)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zb.SignedTransaction>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zb.node.grpc.TransactionsApiClient.prototype.broadcast =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zb.node.grpc.TransactionsApi/Broadcast',
      request,
      metadata || {},
      methodDescriptor_TransactionsApi_Broadcast,
      callback);
};


/**
 * @param {!proto.zb.SignedTransaction} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zb.SignedTransaction>}
 *     Promise that resolves to the response
 */
proto.zb.node.grpc.TransactionsApiPromiseClient.prototype.broadcast =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zb.node.grpc.TransactionsApi/Broadcast',
      request,
      metadata || {},
      methodDescriptor_TransactionsApi_Broadcast);
};


module.exports = proto.zb.node.grpc;

