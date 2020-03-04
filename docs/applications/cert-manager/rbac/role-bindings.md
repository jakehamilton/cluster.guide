---
id: role-bindings
title: Role Bindings
---

Cert-Manager requires several services with different permissions in the cluster.
These services manage certificates in the cluster, watching for new certificate
requests and processing them. Create the following role bindings in your cluster.

:::info
Create this file as `cert-manager/role-bindings/cert-manager-cainjector-leaderelection.yaml`
:::

```yaml
---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: RoleBinding
metadata:
  name: cert-manager-cainjector:leaderelection
  labels:
    app: cainjector
    app.kubernetes.io/name: cainjector
    app.kubernetes.io/instance: cert-manager
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: cert-manager-cainjector:leaderelection
subjects:
  - apiGroup: ""
    kind: ServiceAccount
    name: cert-manager-cainjector
    namespace: cert-manager
```

:::info
Create this file as `cert-manager/role-bindings/cert-manager-leaderelection.yaml`
:::

```yaml
---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: RoleBinding
metadata:
  name: cert-manager:leaderelection
  labels:
    app: cert-manager
    app.kubernetes.io/name: cert-manager
    app.kubernetes.io/instance: cert-manager
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: cert-manager:leaderelection
subjects:
  - apiGroup: ""
    kind: ServiceAccount
    name: cert-manager
    namespace: cert-manager
```

:::info
Create this file as `cert-manager/role-bindings/cert-manager-webhook-webhook-authentication-reader.yaml`
:::

```yaml
---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: RoleBinding
metadata:
  name: cert-manager-webhook:webhook-authentication-reader
  namespace: kube-system
  labels:
    app: webhook
    app.kubernetes.io/name: webhook
    app.kubernetes.io/instance: cert-manager
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: extension-apiserver-authentication-reader
subjects:
  - apiGroup: ""
    kind: ServiceAccount
    name: cert-manager-webhook
    namespace: cert-manager
```
