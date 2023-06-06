SRC = helloWorld.proto zb_multiwallet_api.proto transaction.proto recipient.proto order.proto invoke_script_result.proto events.proto database.proto block.proto api.proto amount.proto accounts_api.proto assets_api.proto blockchain_api.proto blockchain_updates.proto blocks_api.proto transactions_api.proto zb_blockchain_api.proto

ROOT_DIR = /home/zb/cLion/system/grpc
PROTOBUF_PATH =
PROTOC = protoc
PROTOS_PATH = /
JS_IMPORT_STYLE = import_style=commonjs
OUT_DIR = ./web
GRPC_WEB_PLUGIN_PATH = /home/zb/cLion/system/node_modules/protoc-gen-grpc-web/bin/protoc-gen-grpc-web
all: clean dir type service

dir:
	mkdir -p $(OUT_DIR)

type:
	for i in $(SRC); do \
		$(PROTOC) -I=$(ROOT_DIR)/$(PROTOBUF_PATH) --js_out=$(JS_IMPORT_STYLE):$(OUT_DIR) $(ROOT_DIR)/$$i ;\
	done

service:
	for i in $(SRC); do \
		$(PROTOC) -I=. --plugin=protoc-gen-grpc-web=$(GRPC_WEB_PLUGIN_PATH) --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$(OUT_DIR) ./$$i ;\
	done

clean:
	rm -rf $(OUT_DIR)



