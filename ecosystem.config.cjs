module.exports = {
  apps : [{
    "name": "welcomebook",
    "script": "index.mjs",
    "args": "start",
    "namespace": "work",
    "watch": false,
    "node_args": "",
    "instances" : "3",
    "exec_mode" : "cluster",
    "merge_logs": true,
    "env_production": {
      "NODE_ENV": "production"
    },
    "env_development": {
      "NODE_ENV": "development"
    }
  }]
}
