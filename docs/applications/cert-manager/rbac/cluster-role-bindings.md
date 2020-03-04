---
id: cluster-role-bindings
title: Cluster Role Bindings
---

Cert-Manager requires several services with different permissions in the cluster.
These services manage certificates in the cluster, watching for new certificate
requests and processing them. Create the following role bindings in your cluster.

:::info
Create this file as `cert-manager/cluster-role-bindings/cert-manager-cainjector.yaml`
:::

```yaml
---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRoleBinding
metadata:
  name: cert-manager-cainjector
  labels:
    app: cainjector
    app.kubernetes.io/name: cainjector
    app.kubernetes.io/instance: cert-manager
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cert-manager-cainjector
subjects:
  - name: cert-manager-cainjector
    namespace: "cert-manager"
    kind: ServiceAccount
```

:::info
Create this file as `cert-manager/cluster-role-bindings/cert-manager-controller-certificates.yaml`
:::

```yaml
---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRoleBinding
metadata:
  name: cert-manager-controller-certificates
  labels:
    app: cert-manager
    app.kubernetes.io/name: cert-manager
    app.kubernetes.io/instance: cert-manager
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cert-manager-controller-certificates
subjects:
  - name: cert-manager
    namespace: "cert-manager"
    kind: ServiceAccount
```

:::info
Create this file as `~/work/cluster/cert-manager/cluster-role-bindings/cert-manager-controller-challenges.yaml`
:::

```yaml
---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRoleBinding
metadata:
  name: cert-manager-controller-challenges
  labels:
    app: cert-manager
    app.kubernetes.io/name: cert-manager
    app.kubernetes.io/instance: cert-manager
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cert-manager-controller-challenges
subjects:
  - name: cert-manager
    namespace: "cert-manager"
    kind: ServiceAccount
```

:::info
Create this file as `~/work/cluster/cert-manager/cluster-role-bindings/cert-manager-controller-clusterissuers.yaml`
:::

```yaml
---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRoleBinding
metadata:
  name: cert-manager-controller-clusterissuers
  labels:
    app: cert-manager
    app.kubernetes.io/name: cert-manager
    app.kubernetes.io/instance: cert-manager
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cert-manager-controller-clusterissuers
subjects:
  - name: cert-manager
    namespace: "cert-manager"
    kind: ServiceAccount
```

:::info
Create this file as `~/work/cluster/cert-manager/cluster-role-bindings/cert-manager-ingress-shim.yaml`
:::

```yaml
---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRoleBinding
metadata:
  name: cert-manager-controller-ingress-shim
  labels:
    app: cert-manager
    app.kubernetes.io/name: cert-manager
    app.kubernetes.io/instance: cert-manager
    app.kubernetes.io/managed-by: Tiller
    helm.sh/chart: cert-manager-v0.12.0
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cert-manager-controller-ingress-shim
subjects:
  - name: cert-manager
    namespace: "cert-manager"
    kind: ServiceAccount
```

:::info
Create this file as `~/work/cluster/cert-manager/cluster-role-bindings/cert-manager-controller-issuers.yaml`
:::

```yaml
---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRoleBinding
metadata:
  name: cert-manager-controller-issuers
  labels:
    app: cert-manager
    app.kubernetes.io/name: cert-manager
    app.kubernetes.io/instance: cert-manager
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cert-manager-controller-issuers
subjects:
  - name: cert-manager
    namespace: "cert-manager"
    kind: ServiceAccount
```

:::info
Create this file as `~/work/cluster/cert-manager/cluster-role-bindings/cert-manager-controller-orders.yaml`
:::

```yaml
---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRoleBinding
metadata:
  name: cert-manager-controller-orders
  labels:
    app: cert-manager
    app.kubernetes.io/name: cert-manager
    app.kubernetes.io/instance: cert-manager
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cert-manager-controller-orders
subjects:
  - name: cert-manager
    namespace: "cert-manager"
    kind: ServiceAccount
```

:::info
Create this file as `~/work/cluster/cert-manager/cluster-role-bindings/cert-manager-webhook-auth-delegator.yaml`
:::

```yaml
---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRoleBinding
metadata:
  name: cert-manager-webhook:auth-delegator
  labels:
    app: webhook
    app.kubernetes.io/name: webhook
    app.kubernetes.io/instance: cert-manager
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: system:auth-delegator
subjects:
  - apiGroup: ""
    kind: ServiceAccount
    name: cert-manager-webhook
    namespace: cert-manager
``` 
