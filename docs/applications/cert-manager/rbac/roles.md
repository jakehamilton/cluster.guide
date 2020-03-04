---
id: roles
title: Roles
---

Cert-Manager requires several services with different permissions in the cluster.
These services manage certificates in the cluster, watching for new certificate
requests and processing them. Create the following roles in your cluster.

:::info
Create this file as `cert-manager/roles/cert-manager-cainjector-leaderelection.yaml`
:::

```yaml
---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: Role
metadata:
  name: cert-manager-cainjector:leaderelection
  labels:
    app: cainjector
    app.kubernetes.io/name: cainjector
    app.kubernetes.io/instance: cert-manager
rules:
  - apiGroups: [""]
    resources: ["configmaps"]
    verbs: ["get", "create", "update", "patch"]
```

:::info
Create this file as `cert-manager/roles/cert-manager-leaderelection.yaml`
:::

```yaml
---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: Role
metadata:
  name: cert-manager:leaderelection
  namespace: kube-system
  labels:
    app: cert-manager
    app.kubernetes.io/name: cert-manager
    app.kubernetes.io/instance: cert-manager
rules:
  - apiGroups: [""]
    resources: ["configmaps"]
    verbs: ["get", "create", "update", "patch"]
```
