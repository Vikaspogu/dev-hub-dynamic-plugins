# Dynamic Plugins for RedHat Developer Hub

## Dynamic Third Party Backend

Follow [dynamic-plugin](https://github.com/janus-idp/backstage-showcase/blob/main/showcase-docs/dynamic-plugins.md) docs to get started

### Pack & Publish

```bash

yarn install
yarn export-dynamic
NPM_CONFIG_IGNORE_SCRIPTS='true' npm pack ./dist-dynamic --json | jq -r '.[0].integrity'
```

Dynamic Plugin ConfigMap

```yaml
global:
  dynamic:
    includes:
      - dynamic-plugins.default.yaml
    plugins:
      - package: http://plugin-registry:8080/vikaspogu-dynamic-timesaver-backend-dynamic-0.0.3.tgz
        integrity: sha512-wKDRm+tyJwCdDbAGYakXGV1Q7JNjikrERaUYYHqce5mki7yP2fAWJ4rFxKXgj/t1oRg0sZDIWeMS3MtvxuR5SA==
        disabled: false
```
