---
id: namespaces
title: Namespaces
---

# Cert-Manager

Cert-Manager resources will be placed in their own namespace.

:::info
Create this file as `cert-manager/namespaces/cert-manager.yaml`
:::

```yaml
---
apiVersion: v1
kind: Namespace
metadata:
  name: cert-manager
  labels:
    app.kubernetes.io/part-of: cert-manager
```
