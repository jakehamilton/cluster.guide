---
id: service-accounts
title: Service Accounts
---

Cert-Manager requires several services with different permissions in the cluster.
These services manage certificates in the cluster, watching for new certificate
requests and processing them. Create the following service accounts in your cluster.

:::info
Create this file as `cert-manager/service-accounts/cert-manager-cainjector.yaml`
:::

```yaml
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: cert-manager-cainjector
  labels:
    app: cainjector
    app.kubernetes.io/name: cainjector
    app.kubernetes.io/instance: cert-manager
```

:::info
Create this file as `cert-manager/service-accounts/cert-manager-webhook.yaml`
:::

```yaml
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: cert-manager-webhook
  labels:
    app: webhook
    app.kubernetes.io/name: webhook
    app.kubernetes.io/instance: cert-manager
```

:::info
Create this file as `cert-manager/service-accounts/cert-manager-cert-manager.yaml`
:::

```yaml
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: cert-manager
  labels:
    app: cert-manager
    app.kubernetes.io/name: cert-manager
    app.kubernetes.io/instance: cert-manager
```
