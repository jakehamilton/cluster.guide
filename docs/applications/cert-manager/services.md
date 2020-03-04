---
id: services
title: Services
---

For Cert-Manager to receive traffic, we must configure services.
Create the following deployments in your cluster.

:::info
Create this file as `cert-manager/services/cert-manager.yaml`
:::

```yaml
---
apiVersion: v1
kind: Service
metadata:
  name: cert-manager
  labels:
    app: cert-manager
    app.kubernetes.io/name: cert-manager
    app.kubernetes.io/instance: cert-manager
spec:
  type: ClusterIP
  ports:
    - protocol: TCP
      port: 9402
      targetPort: 9402
  selector:
    app.kubernetes.io/name: cert-manager
    app.kubernetes.io/instance: cert-manager
```

:::info
Create this file as `cert-manager/services/cert-manager-webhook.yaml`
:::

```yaml
---
apiVersion: v1
kind: Service
metadata:
  name: cert-manager-webhook
  labels:
    app: webhook
    app.kubernetes.io/name: webhook
    app.kubernetes.io/instance: cert-manager
spec:
  type: ClusterIP
  ports:
    - name: https
      port: 443
      targetPort: 10250
  selector:
    app: webhook
    app.kubernetes.io/name: webhook
    app.kubernetes.io/instance: cert-manager
```
