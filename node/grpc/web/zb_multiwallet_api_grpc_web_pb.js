/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.pb = require('./zb_multiwallet_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pb.APIClient =
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
proto.pb.APIPromiseClient =
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
 *   !proto.pb.Empty,
 *   !proto.pb.Empty>}
 */
const methodDescriptor_API_Stop = new grpc.web.MethodDescriptor(
  '/pb.API/Stop',
  grpc.web.MethodType.UNARY,
  proto.pb.Empty,
  proto.pb.Empty,
  /**
   * @param {!proto.pb.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.Empty,
 *   !proto.pb.Empty>}
 */
const methodInfo_API_Stop = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.Empty,
  /**
   * @param {!proto.pb.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.APIClient.prototype.stop =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.API/Stop',
      request,
      metadata || {},
      methodDescriptor_API_Stop,
      callback);
};


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Empty>}
 *     Promise that resolves to the response
 */
proto.pb.APIPromiseClient.prototype.stop =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.API/Stop',
      request,
      metadata || {},
      methodDescriptor_API_Stop);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.KeySelection,
 *   !proto.pb.Address>}
 */
const methodDescriptor_API_CurrentAddress = new grpc.web.MethodDescriptor(
  '/pb.API/CurrentAddress',
  grpc.web.MethodType.UNARY,
  proto.pb.KeySelection,
  proto.pb.Address,
  /**
   * @param {!proto.pb.KeySelection} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Address.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.KeySelection,
 *   !proto.pb.Address>}
 */
const methodInfo_API_CurrentAddress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.Address,
  /**
   * @param {!proto.pb.KeySelection} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Address.deserializeBinary
);


/**
 * @param {!proto.pb.KeySelection} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Address)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Address>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.APIClient.prototype.currentAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.API/CurrentAddress',
      request,
      metadata || {},
      methodDescriptor_API_CurrentAddress,
      callback);
};


/**
 * @param {!proto.pb.KeySelection} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Address>}
 *     Promise that resolves to the response
 */
proto.pb.APIPromiseClient.prototype.currentAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.API/CurrentAddress',
      request,
      metadata || {},
      methodDescriptor_API_CurrentAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.KeySelection,
 *   !proto.pb.Address>}
 */
const methodDescriptor_API_NewAddress = new grpc.web.MethodDescriptor(
  '/pb.API/NewAddress',
  grpc.web.MethodType.UNARY,
  proto.pb.KeySelection,
  proto.pb.Address,
  /**
   * @param {!proto.pb.KeySelection} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Address.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.KeySelection,
 *   !proto.pb.Address>}
 */
const methodInfo_API_NewAddress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.Address,
  /**
   * @param {!proto.pb.KeySelection} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Address.deserializeBinary
);


/**
 * @param {!proto.pb.KeySelection} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Address)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Address>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.APIClient.prototype.newAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.API/NewAddress',
      request,
      metadata || {},
      methodDescriptor_API_NewAddress,
      callback);
};


/**
 * @param {!proto.pb.KeySelection} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Address>}
 *     Promise that resolves to the response
 */
proto.pb.APIPromiseClient.prototype.newAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.API/NewAddress',
      request,
      metadata || {},
      methodDescriptor_API_NewAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.CoinSelection,
 *   !proto.pb.Height>}
 */
const methodDescriptor_API_ChainTip = new grpc.web.MethodDescriptor(
  '/pb.API/ChainTip',
  grpc.web.MethodType.UNARY,
  proto.pb.CoinSelection,
  proto.pb.Height,
  /**
   * @param {!proto.pb.CoinSelection} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Height.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.CoinSelection,
 *   !proto.pb.Height>}
 */
const methodInfo_API_ChainTip = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.Height,
  /**
   * @param {!proto.pb.CoinSelection} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Height.deserializeBinary
);


/**
 * @param {!proto.pb.CoinSelection} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Height)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Height>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.APIClient.prototype.chainTip =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.API/ChainTip',
      request,
      metadata || {},
      methodDescriptor_API_ChainTip,
      callback);
};


/**
 * @param {!proto.pb.CoinSelection} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Height>}
 *     Promise that resolves to the response
 */
proto.pb.APIPromiseClient.prototype.chainTip =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.API/ChainTip',
      request,
      metadata || {},
      methodDescriptor_API_ChainTip);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.CoinSelection,
 *   !proto.pb.Balances>}
 */
const methodDescriptor_API_Balance = new grpc.web.MethodDescriptor(
  '/pb.API/Balance',
  grpc.web.MethodType.UNARY,
  proto.pb.CoinSelection,
  proto.pb.Balances,
  /**
   * @param {!proto.pb.CoinSelection} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Balances.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.CoinSelection,
 *   !proto.pb.Balances>}
 */
const methodInfo_API_Balance = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.Balances,
  /**
   * @param {!proto.pb.CoinSelection} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Balances.deserializeBinary
);


/**
 * @param {!proto.pb.CoinSelection} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Balances)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Balances>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.APIClient.prototype.balance =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.API/Balance',
      request,
      metadata || {},
      methodDescriptor_API_Balance,
      callback);
};


/**
 * @param {!proto.pb.CoinSelection} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Balances>}
 *     Promise that resolves to the response
 */
proto.pb.APIPromiseClient.prototype.balance =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.API/Balance',
      request,
      metadata || {},
      methodDescriptor_API_Balance);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.CoinSelection,
 *   !proto.pb.Key>}
 */
const methodDescriptor_API_MasterPrivateKey = new grpc.web.MethodDescriptor(
  '/pb.API/MasterPrivateKey',
  grpc.web.MethodType.UNARY,
  proto.pb.CoinSelection,
  proto.pb.Key,
  /**
   * @param {!proto.pb.CoinSelection} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Key.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.CoinSelection,
 *   !proto.pb.Key>}
 */
const methodInfo_API_MasterPrivateKey = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.Key,
  /**
   * @param {!proto.pb.CoinSelection} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Key.deserializeBinary
);


/**
 * @param {!proto.pb.CoinSelection} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Key)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Key>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.APIClient.prototype.masterPrivateKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.API/MasterPrivateKey',
      request,
      metadata || {},
      methodDescriptor_API_MasterPrivateKey,
      callback);
};


/**
 * @param {!proto.pb.CoinSelection} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Key>}
 *     Promise that resolves to the response
 */
proto.pb.APIPromiseClient.prototype.masterPrivateKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.API/MasterPrivateKey',
      request,
      metadata || {},
      methodDescriptor_API_MasterPrivateKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.CoinSelection,
 *   !proto.pb.Key>}
 */
const methodDescriptor_API_MasterPublicKey = new grpc.web.MethodDescriptor(
  '/pb.API/MasterPublicKey',
  grpc.web.MethodType.UNARY,
  proto.pb.CoinSelection,
  proto.pb.Key,
  /**
   * @param {!proto.pb.CoinSelection} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Key.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.CoinSelection,
 *   !proto.pb.Key>}
 */
const methodInfo_API_MasterPublicKey = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.Key,
  /**
   * @param {!proto.pb.CoinSelection} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Key.deserializeBinary
);


/**
 * @param {!proto.pb.CoinSelection} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Key)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Key>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.APIClient.prototype.masterPublicKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.API/MasterPublicKey',
      request,
      metadata || {},
      methodDescriptor_API_MasterPublicKey,
      callback);
};


/**
 * @param {!proto.pb.CoinSelection} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Key>}
 *     Promise that resolves to the response
 */
proto.pb.APIPromiseClient.prototype.masterPublicKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.API/MasterPublicKey',
      request,
      metadata || {},
      methodDescriptor_API_MasterPublicKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.Address,
 *   !proto.pb.BoolResponse>}
 */
const methodDescriptor_API_HasKey = new grpc.web.MethodDescriptor(
  '/pb.API/HasKey',
  grpc.web.MethodType.UNARY,
  proto.pb.Address,
  proto.pb.BoolResponse,
  /**
   * @param {!proto.pb.Address} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.BoolResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.Address,
 *   !proto.pb.BoolResponse>}
 */
const methodInfo_API_HasKey = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.BoolResponse,
  /**
   * @param {!proto.pb.Address} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.BoolResponse.deserializeBinary
);


/**
 * @param {!proto.pb.Address} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.BoolResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.BoolResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.APIClient.prototype.hasKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.API/HasKey',
      request,
      metadata || {},
      methodDescriptor_API_HasKey,
      callback);
};


/**
 * @param {!proto.pb.Address} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.BoolResponse>}
 *     Promise that resolves to the response
 */
proto.pb.APIPromiseClient.prototype.hasKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.API/HasKey',
      request,
      metadata || {},
      methodDescriptor_API_HasKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.Empty,
 *   !proto.pb.NetParams>}
 */
const methodDescriptor_API_Params = new grpc.web.MethodDescriptor(
  '/pb.API/Params',
  grpc.web.MethodType.UNARY,
  proto.pb.Empty,
  proto.pb.NetParams,
  /**
   * @param {!proto.pb.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.NetParams.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.Empty,
 *   !proto.pb.NetParams>}
 */
const methodInfo_API_Params = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.NetParams,
  /**
   * @param {!proto.pb.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.NetParams.deserializeBinary
);


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.NetParams)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.NetParams>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.APIClient.prototype.params =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.API/Params',
      request,
      metadata || {},
      methodDescriptor_API_Params,
      callback);
};


/**
 * @param {!proto.pb.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.NetParams>}
 *     Promise that resolves to the response
 */
proto.pb.APIPromiseClient.prototype.params =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.API/Params',
      request,
      metadata || {},
      methodDescriptor_API_Params);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.CoinSelection,
 *   !proto.pb.TransactionList>}
 */
const methodDescriptor_API_Transactions = new grpc.web.MethodDescriptor(
  '/pb.API/Transactions',
  grpc.web.MethodType.UNARY,
  proto.pb.CoinSelection,
  proto.pb.TransactionList,
  /**
   * @param {!proto.pb.CoinSelection} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.TransactionList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.CoinSelection,
 *   !proto.pb.TransactionList>}
 */
const methodInfo_API_Transactions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.TransactionList,
  /**
   * @param {!proto.pb.CoinSelection} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.TransactionList.deserializeBinary
);


/**
 * @param {!proto.pb.CoinSelection} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.TransactionList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.TransactionList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.APIClient.prototype.transactions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.API/Transactions',
      request,
      metadata || {},
      methodDescriptor_API_Transactions,
      callback);
};


/**
 * @param {!proto.pb.CoinSelection} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.TransactionList>}
 *     Promise that resolves to the response
 */
proto.pb.APIPromiseClient.prototype.transactions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.API/Transactions',
      request,
      metadata || {},
      methodDescriptor_API_Transactions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.Txid,
 *   !proto.pb.Tx>}
 */
const methodDescriptor_API_GetTransaction = new grpc.web.MethodDescriptor(
  '/pb.API/GetTransaction',
  grpc.web.MethodType.UNARY,
  proto.pb.Txid,
  proto.pb.Tx,
  /**
   * @param {!proto.pb.Txid} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Tx.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.Txid,
 *   !proto.pb.Tx>}
 */
const methodInfo_API_GetTransaction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.Tx,
  /**
   * @param {!proto.pb.Txid} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Tx.deserializeBinary
);


/**
 * @param {!proto.pb.Txid} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Tx)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Tx>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.APIClient.prototype.getTransaction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.API/GetTransaction',
      request,
      metadata || {},
      methodDescriptor_API_GetTransaction,
      callback);
};


/**
 * @param {!proto.pb.Txid} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Tx>}
 *     Promise that resolves to the response
 */
proto.pb.APIPromiseClient.prototype.getTransaction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.API/GetTransaction',
      request,
      metadata || {},
      methodDescriptor_API_GetTransaction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.FeeLevelSelection,
 *   !proto.pb.FeePerByte>}
 */
const methodDescriptor_API_GetFeePerByte = new grpc.web.MethodDescriptor(
  '/pb.API/GetFeePerByte',
  grpc.web.MethodType.UNARY,
  proto.pb.FeeLevelSelection,
  proto.pb.FeePerByte,
  /**
   * @param {!proto.pb.FeeLevelSelection} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.FeePerByte.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.FeeLevelSelection,
 *   !proto.pb.FeePerByte>}
 */
const methodInfo_API_GetFeePerByte = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.FeePerByte,
  /**
   * @param {!proto.pb.FeeLevelSelection} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.FeePerByte.deserializeBinary
);


/**
 * @param {!proto.pb.FeeLevelSelection} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.FeePerByte)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.FeePerByte>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.APIClient.prototype.getFeePerByte =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.API/GetFeePerByte',
      request,
      metadata || {},
      methodDescriptor_API_GetFeePerByte,
      callback);
};


/**
 * @param {!proto.pb.FeeLevelSelection} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.FeePerByte>}
 *     Promise that resolves to the response
 */
proto.pb.APIPromiseClient.prototype.getFeePerByte =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.API/GetFeePerByte',
      request,
      metadata || {},
      methodDescriptor_API_GetFeePerByte);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.SpendInfo,
 *   !proto.pb.Txid>}
 */
const methodDescriptor_API_Spend = new grpc.web.MethodDescriptor(
  '/pb.API/Spend',
  grpc.web.MethodType.UNARY,
  proto.pb.SpendInfo,
  proto.pb.Txid,
  /**
   * @param {!proto.pb.SpendInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Txid.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.SpendInfo,
 *   !proto.pb.Txid>}
 */
const methodInfo_API_Spend = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.Txid,
  /**
   * @param {!proto.pb.SpendInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Txid.deserializeBinary
);


/**
 * @param {!proto.pb.SpendInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Txid)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Txid>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.APIClient.prototype.spend =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.API/Spend',
      request,
      metadata || {},
      methodDescriptor_API_Spend,
      callback);
};


/**
 * @param {!proto.pb.SpendInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Txid>}
 *     Promise that resolves to the response
 */
proto.pb.APIPromiseClient.prototype.spend =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.API/Spend',
      request,
      metadata || {},
      methodDescriptor_API_Spend);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.Txid,
 *   !proto.pb.Txid>}
 */
const methodDescriptor_API_BumpFee = new grpc.web.MethodDescriptor(
  '/pb.API/BumpFee',
  grpc.web.MethodType.UNARY,
  proto.pb.Txid,
  proto.pb.Txid,
  /**
   * @param {!proto.pb.Txid} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Txid.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.Txid,
 *   !proto.pb.Txid>}
 */
const methodInfo_API_BumpFee = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.Txid,
  /**
   * @param {!proto.pb.Txid} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Txid.deserializeBinary
);


/**
 * @param {!proto.pb.Txid} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Txid)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Txid>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.APIClient.prototype.bumpFee =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.API/BumpFee',
      request,
      metadata || {},
      methodDescriptor_API_BumpFee,
      callback);
};


/**
 * @param {!proto.pb.Txid} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Txid>}
 *     Promise that resolves to the response
 */
proto.pb.APIPromiseClient.prototype.bumpFee =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.API/BumpFee',
      request,
      metadata || {},
      methodDescriptor_API_BumpFee);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.Address,
 *   !proto.pb.Empty>}
 */
const methodDescriptor_API_AddWatchedScript = new grpc.web.MethodDescriptor(
  '/pb.API/AddWatchedScript',
  grpc.web.MethodType.UNARY,
  proto.pb.Address,
  proto.pb.Empty,
  /**
   * @param {!proto.pb.Address} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.Address,
 *   !proto.pb.Empty>}
 */
const methodInfo_API_AddWatchedScript = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.Empty,
  /**
   * @param {!proto.pb.Address} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pb.Address} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.APIClient.prototype.addWatchedScript =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.API/AddWatchedScript',
      request,
      metadata || {},
      methodDescriptor_API_AddWatchedScript,
      callback);
};


/**
 * @param {!proto.pb.Address} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Empty>}
 *     Promise that resolves to the response
 */
proto.pb.APIPromiseClient.prototype.addWatchedScript =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.API/AddWatchedScript',
      request,
      metadata || {},
      methodDescriptor_API_AddWatchedScript);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.Txid,
 *   !proto.pb.Confirmations>}
 */
const methodDescriptor_API_GetConfirmations = new grpc.web.MethodDescriptor(
  '/pb.API/GetConfirmations',
  grpc.web.MethodType.UNARY,
  proto.pb.Txid,
  proto.pb.Confirmations,
  /**
   * @param {!proto.pb.Txid} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Confirmations.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.Txid,
 *   !proto.pb.Confirmations>}
 */
const methodInfo_API_GetConfirmations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.Confirmations,
  /**
   * @param {!proto.pb.Txid} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Confirmations.deserializeBinary
);


/**
 * @param {!proto.pb.Txid} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Confirmations)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Confirmations>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.APIClient.prototype.getConfirmations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.API/GetConfirmations',
      request,
      metadata || {},
      methodDescriptor_API_GetConfirmations,
      callback);
};


/**
 * @param {!proto.pb.Txid} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Confirmations>}
 *     Promise that resolves to the response
 */
proto.pb.APIPromiseClient.prototype.getConfirmations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.API/GetConfirmations',
      request,
      metadata || {},
      methodDescriptor_API_GetConfirmations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.SweepInfo,
 *   !proto.pb.Txid>}
 */
const methodDescriptor_API_SweepAddress = new grpc.web.MethodDescriptor(
  '/pb.API/SweepAddress',
  grpc.web.MethodType.UNARY,
  proto.pb.SweepInfo,
  proto.pb.Txid,
  /**
   * @param {!proto.pb.SweepInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Txid.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.SweepInfo,
 *   !proto.pb.Txid>}
 */
const methodInfo_API_SweepAddress = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.Txid,
  /**
   * @param {!proto.pb.SweepInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Txid.deserializeBinary
);


/**
 * @param {!proto.pb.SweepInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Txid)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Txid>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.APIClient.prototype.sweepAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.API/SweepAddress',
      request,
      metadata || {},
      methodDescriptor_API_SweepAddress,
      callback);
};


/**
 * @param {!proto.pb.SweepInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Txid>}
 *     Promise that resolves to the response
 */
proto.pb.APIPromiseClient.prototype.sweepAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.API/SweepAddress',
      request,
      metadata || {},
      methodDescriptor_API_SweepAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.CreateMultisigInfo,
 *   !proto.pb.SignatureList>}
 */
const methodDescriptor_API_CreateMultisigSignature = new grpc.web.MethodDescriptor(
  '/pb.API/CreateMultisigSignature',
  grpc.web.MethodType.UNARY,
  proto.pb.CreateMultisigInfo,
  proto.pb.SignatureList,
  /**
   * @param {!proto.pb.CreateMultisigInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.SignatureList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.CreateMultisigInfo,
 *   !proto.pb.SignatureList>}
 */
const methodInfo_API_CreateMultisigSignature = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.SignatureList,
  /**
   * @param {!proto.pb.CreateMultisigInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.SignatureList.deserializeBinary
);


/**
 * @param {!proto.pb.CreateMultisigInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.SignatureList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.SignatureList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.APIClient.prototype.createMultisigSignature =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.API/CreateMultisigSignature',
      request,
      metadata || {},
      methodDescriptor_API_CreateMultisigSignature,
      callback);
};


/**
 * @param {!proto.pb.CreateMultisigInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.SignatureList>}
 *     Promise that resolves to the response
 */
proto.pb.APIPromiseClient.prototype.createMultisigSignature =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.API/CreateMultisigSignature',
      request,
      metadata || {},
      methodDescriptor_API_CreateMultisigSignature);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.MultisignInfo,
 *   !proto.pb.RawTx>}
 */
const methodDescriptor_API_Multisign = new grpc.web.MethodDescriptor(
  '/pb.API/Multisign',
  grpc.web.MethodType.UNARY,
  proto.pb.MultisignInfo,
  proto.pb.RawTx,
  /**
   * @param {!proto.pb.MultisignInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.RawTx.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.MultisignInfo,
 *   !proto.pb.RawTx>}
 */
const methodInfo_API_Multisign = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.RawTx,
  /**
   * @param {!proto.pb.MultisignInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.RawTx.deserializeBinary
);


/**
 * @param {!proto.pb.MultisignInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.RawTx)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.RawTx>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.APIClient.prototype.multisign =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.API/Multisign',
      request,
      metadata || {},
      methodDescriptor_API_Multisign,
      callback);
};


/**
 * @param {!proto.pb.MultisignInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.RawTx>}
 *     Promise that resolves to the response
 */
proto.pb.APIPromiseClient.prototype.multisign =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.API/Multisign',
      request,
      metadata || {},
      methodDescriptor_API_Multisign);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.EstimateFeeData,
 *   !proto.pb.Fee>}
 */
const methodDescriptor_API_EstimateFee = new grpc.web.MethodDescriptor(
  '/pb.API/EstimateFee',
  grpc.web.MethodType.UNARY,
  proto.pb.EstimateFeeData,
  proto.pb.Fee,
  /**
   * @param {!proto.pb.EstimateFeeData} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Fee.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.EstimateFeeData,
 *   !proto.pb.Fee>}
 */
const methodInfo_API_EstimateFee = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.Fee,
  /**
   * @param {!proto.pb.EstimateFeeData} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Fee.deserializeBinary
);


/**
 * @param {!proto.pb.EstimateFeeData} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Fee)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Fee>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.APIClient.prototype.estimateFee =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.API/EstimateFee',
      request,
      metadata || {},
      methodDescriptor_API_EstimateFee,
      callback);
};


/**
 * @param {!proto.pb.EstimateFeeData} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Fee>}
 *     Promise that resolves to the response
 */
proto.pb.APIPromiseClient.prototype.estimateFee =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.API/EstimateFee',
      request,
      metadata || {},
      methodDescriptor_API_EstimateFee);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.Address,
 *   !proto.pb.Key>}
 */
const methodDescriptor_API_GetKey = new grpc.web.MethodDescriptor(
  '/pb.API/GetKey',
  grpc.web.MethodType.UNARY,
  proto.pb.Address,
  proto.pb.Key,
  /**
   * @param {!proto.pb.Address} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Key.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.Address,
 *   !proto.pb.Key>}
 */
const methodInfo_API_GetKey = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.Key,
  /**
   * @param {!proto.pb.Address} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Key.deserializeBinary
);


/**
 * @param {!proto.pb.Address} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Key)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Key>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.APIClient.prototype.getKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.API/GetKey',
      request,
      metadata || {},
      methodDescriptor_API_GetKey,
      callback);
};


/**
 * @param {!proto.pb.Address} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Key>}
 *     Promise that resolves to the response
 */
proto.pb.APIPromiseClient.prototype.getKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.API/GetKey',
      request,
      metadata || {},
      methodDescriptor_API_GetKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.CoinSelection,
 *   !proto.pb.Keys>}
 */
const methodDescriptor_API_ListKeys = new grpc.web.MethodDescriptor(
  '/pb.API/ListKeys',
  grpc.web.MethodType.UNARY,
  proto.pb.CoinSelection,
  proto.pb.Keys,
  /**
   * @param {!proto.pb.CoinSelection} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Keys.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.CoinSelection,
 *   !proto.pb.Keys>}
 */
const methodInfo_API_ListKeys = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.Keys,
  /**
   * @param {!proto.pb.CoinSelection} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Keys.deserializeBinary
);


/**
 * @param {!proto.pb.CoinSelection} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Keys)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Keys>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.APIClient.prototype.listKeys =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.API/ListKeys',
      request,
      metadata || {},
      methodDescriptor_API_ListKeys,
      callback);
};


/**
 * @param {!proto.pb.CoinSelection} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Keys>}
 *     Promise that resolves to the response
 */
proto.pb.APIPromiseClient.prototype.listKeys =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.API/ListKeys',
      request,
      metadata || {},
      methodDescriptor_API_ListKeys);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.CoinSelection,
 *   !proto.pb.Addresses>}
 */
const methodDescriptor_API_ListAddresses = new grpc.web.MethodDescriptor(
  '/pb.API/ListAddresses',
  grpc.web.MethodType.UNARY,
  proto.pb.CoinSelection,
  proto.pb.Addresses,
  /**
   * @param {!proto.pb.CoinSelection} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Addresses.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.CoinSelection,
 *   !proto.pb.Addresses>}
 */
const methodInfo_API_ListAddresses = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.Addresses,
  /**
   * @param {!proto.pb.CoinSelection} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Addresses.deserializeBinary
);


/**
 * @param {!proto.pb.CoinSelection} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pb.Addresses)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Addresses>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pb.APIClient.prototype.listAddresses =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pb.API/ListAddresses',
      request,
      metadata || {},
      methodDescriptor_API_ListAddresses,
      callback);
};


/**
 * @param {!proto.pb.CoinSelection} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pb.Addresses>}
 *     Promise that resolves to the response
 */
proto.pb.APIPromiseClient.prototype.listAddresses =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pb.API/ListAddresses',
      request,
      metadata || {},
      methodDescriptor_API_ListAddresses);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.CoinSelection,
 *   !proto.pb.Tx>}
 */
const methodDescriptor_API_WalletNotify = new grpc.web.MethodDescriptor(
  '/pb.API/WalletNotify',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.pb.CoinSelection,
  proto.pb.Tx,
  /**
   * @param {!proto.pb.CoinSelection} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Tx.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.CoinSelection,
 *   !proto.pb.Tx>}
 */
const methodInfo_API_WalletNotify = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.Tx,
  /**
   * @param {!proto.pb.CoinSelection} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Tx.deserializeBinary
);


/**
 * @param {!proto.pb.CoinSelection} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Tx>}
 *     The XHR Node Readable Stream
 */
proto.pb.APIClient.prototype.walletNotify =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pb.API/WalletNotify',
      request,
      metadata || {},
      methodDescriptor_API_WalletNotify);
};


/**
 * @param {!proto.pb.CoinSelection} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Tx>}
 *     The XHR Node Readable Stream
 */
proto.pb.APIPromiseClient.prototype.walletNotify =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pb.API/WalletNotify',
      request,
      metadata || {},
      methodDescriptor_API_WalletNotify);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pb.CoinSelection,
 *   !proto.pb.Row>}
 */
const methodDescriptor_API_DumpTables = new grpc.web.MethodDescriptor(
  '/pb.API/DumpTables',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.pb.CoinSelection,
  proto.pb.Row,
  /**
   * @param {!proto.pb.CoinSelection} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Row.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pb.CoinSelection,
 *   !proto.pb.Row>}
 */
const methodInfo_API_DumpTables = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pb.Row,
  /**
   * @param {!proto.pb.CoinSelection} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pb.Row.deserializeBinary
);


/**
 * @param {!proto.pb.CoinSelection} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Row>}
 *     The XHR Node Readable Stream
 */
proto.pb.APIClient.prototype.dumpTables =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pb.API/DumpTables',
      request,
      metadata || {},
      methodDescriptor_API_DumpTables);
};


/**
 * @param {!proto.pb.CoinSelection} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pb.Row>}
 *     The XHR Node Readable Stream
 */
proto.pb.APIPromiseClient.prototype.dumpTables =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pb.API/DumpTables',
      request,
      metadata || {},
      methodDescriptor_API_DumpTables);
};


module.exports = proto.pb;

