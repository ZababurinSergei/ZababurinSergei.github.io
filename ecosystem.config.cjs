module.exports = {
  apps : [{
    "name": "welcomebook",
    "script": "npm",
    "args": "start",
    "namespace": "work",
    "cwd": "/home/sergei/Desktop/work/Welcomebook",
    "watch": false,
    "node_args": "",
    "merge_logs": true,
    "env_production": {
      "NODE_ENV": "production"
    },
    "env_development": {
      "NODE_ENV": "development"
    }
  }]
}
