---
id: cluster-roles
title: Cluster Roles
---

Cert-Manager requires several services with different permissions in the cluster.
These services manage certificates in the cluster, watching for new certificate
requests and processing them. Create the following roles in your cluster.

:::info
Create this file as `cert-manager/cluster-roles/cert-manager-cainjector.yaml`
:::

```yaml
---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRole
metadata:
  name: cert-manager-cainjector
  labels:
    app: cainjector
    app.kubernetes.io/name: cainjector
    app.kubernetes.io/instance: cert-manager
rules:
  - apiGroups: ["cert-manager.io"]
    resources: ["certificates"]
    verbs: ["get", "list", "watch"]
  - apiGroups: [""]
    resources: ["secrets"]
    verbs: ["get", "list", "watch"]
  - apiGroups: [""]
    resources: ["events"]
    verbs: ["get", "create", "update", "patch"]
  - apiGroups: ["admissionregistration.k8s.io"]
    resources:
      ["validatingwebhookconfigurations", "mutatingwebhookconfigurations"]
    verbs: ["get", "list", "watch", "update"]
  - apiGroups: ["apiregistration.k8s.io"]
    resources: ["apiservices"]
    verbs: ["get", "list", "watch", "update"]
  - apiGroups: ["apiextensions.k8s.io"]
    resources: ["customresourcedefinitions"]
    verbs: ["get", "list", "watch", "update"]
```

:::info
Create this file as `cert-manager/cluster-roles/cert-manager-controller-certificates.yaml`
:::

```yaml
---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRole
metadata:
  name: cert-manager-controller-certificates
  labels:
    app: cert-manager
    app.kubernetes.io/name: cert-manager
    app.kubernetes.io/instance: cert-manager
rules:
  - apiGroups: ["cert-manager.io"]
    resources:
      [
        "certificates",
        "certificates/status",
        "certificaterequests",
        "certificaterequests/status",
      ]
    verbs: ["update"]
  - apiGroups: ["cert-manager.io"]
    resources:
      ["certificates", "certificaterequests", "clusterissuers", "issuers"]
    verbs: ["get", "list", "watch"]
  - apiGroups: ["cert-manager.io"]
    resources: ["certificates/finalizers", "certificaterequests/finalizers"]
    verbs: ["update"]
  - apiGroups: ["acme.cert-manager.io"]
    resources: ["orders"]
    verbs: ["create", "delete", "get", "list", "watch"]
  - apiGroups: [""]
    resources: ["secrets"]
    verbs: ["get", "list", "watch", "create", "update", "delete"]
  - apiGroups: [""]
    resources: ["events"]
    verbs: ["create", "patch"]
```

:::info
Create this file as `cert-manager/cluster-roles/cert-manager-controller-challenges.yaml`
:::

```yaml
---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRole
metadata:
  name: cert-manager-controller-challenges
  labels:
    app: cert-manager
    app.kubernetes.io/name: cert-manager
    app.kubernetes.io/instance: cert-manager
rules:
  - apiGroups: ["acme.cert-manager.io"]
    resources: ["challenges", "challenges/status"]
    verbs: ["update"]
  - apiGroups: ["acme.cert-manager.io"]
    resources: ["challenges"]
    verbs: ["get", "list", "watch"]
  - apiGroups: ["cert-manager.io"]
    resources: ["issuers", "clusterissuers"]
    verbs: ["get", "list", "watch"]
  - apiGroups: [""]
    resources: ["secrets"]
    verbs: ["get", "list", "watch"]
  - apiGroups: [""]
    resources: ["events"]
    verbs: ["create", "patch"]
  - apiGroups: [""]
    resources: ["pods", "services"]
    verbs: ["get", "list", "watch", "create", "delete"]
  - apiGroups: ["extensions"]
    resources: ["ingresses"]
    verbs: ["get", "list", "watch", "create", "delete", "update"]
  - apiGroups: ["acme.cert-manager.io"]
    resources: ["challenges/finalizers"]
    verbs: ["update"]
  - apiGroups: [""]
    resources: ["secrets"]
    verbs: ["get", "list", "watch"]
```

:::info
Create this file as `cert-manager/cluster-roles/cert-manager-controller-clusterissuers.yaml`
:::

```yaml
---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRole
metadata:
  name: cert-manager-controller-clusterissuers
  labels:
    app: cert-manager
    app.kubernetes.io/name: cert-manager
    app.kubernetes.io/instance: cert-manager
rules:
  - apiGroups: ["cert-manager.io"]
    resources: ["clusterissuers", "clusterissuers/status"]
    verbs: ["update"]
  - apiGroups: ["cert-manager.io"]
    resources: ["clusterissuers"]
    verbs: ["get", "list", "watch"]
  - apiGroups: [""]
    resources: ["secrets"]
    verbs: ["get", "list", "watch", "create", "update", "delete"]
  - apiGroups: [""]
    resources: ["events"]
    verbs: ["create", "patch"]
```

:::info
Create this file as `cert-manager/cluster-roles/cert-manager-controller-ingress-shim.yaml`
:::

```yaml
---
# ingress-shim controller role
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRole
metadata:
  name: cert-manager-controller-ingress-shim
  labels:
    app: cert-manager
    app.kubernetes.io/name: cert-manager
    app.kubernetes.io/instance: cert-manager
rules:
  - apiGroups: ["cert-manager.io"]
    resources: ["certificates", "certificaterequests"]
    verbs: ["create", "update", "delete"]
  - apiGroups: ["cert-manager.io"]
    resources:
      ["certificates", "certificaterequests", "issuers", "clusterissuers"]
    verbs: ["get", "list", "watch"]
  - apiGroups: ["extensions"]
    resources: ["ingresses"]
    verbs: ["get", "list", "watch"]
  - apiGroups: ["extensions"]
    resources: ["ingresses/finalizers"]
    verbs: ["update"]
  - apiGroups: [""]
    resources: ["events"]
    verbs: ["create", "patch"]
```

:::info
Create this file as `cert-manager/cluster-roles/cert-manager-controller-issuers.yaml`
:::

```yaml
---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRole
metadata:
  name: cert-manager-controller-issuers
  labels:
    app: cert-manager
    app.kubernetes.io/name: cert-manager
    app.kubernetes.io/instance: cert-manager
rules:
  - apiGroups: ["cert-manager.io"]
    resources: ["issuers", "issuers/status"]
    verbs: ["update"]
  - apiGroups: ["cert-manager.io"]
    resources: ["issuers"]
    verbs: ["get", "list", "watch"]
  - apiGroups: [""]
    resources: ["secrets"]
    verbs: ["get", "list", "watch", "create", "update", "delete"]
  - apiGroups: [""]
    resources: ["events"]
    verbs: ["create", "patch"]
```

:::info
Create this file as `cert-manager/cluster-roles/cert-manager-controller-orders.yaml`
:::

```yaml
---
# Orders controller role
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRole
metadata:
  name: cert-manager-controller-orders
  labels:
    app: cert-manager
    app.kubernetes.io/name: cert-manager
    app.kubernetes.io/instance: cert-manager
rules:
  - apiGroups: ["acme.cert-manager.io"]
    resources: ["orders", "orders/status"]
    verbs: ["update"]
  - apiGroups: ["acme.cert-manager.io"]
    resources: ["orders", "challenges"]
    verbs: ["get", "list", "watch"]
  - apiGroups: ["cert-manager.io"]
    resources: ["clusterissuers", "issuers"]
    verbs: ["get", "list", "watch"]
  - apiGroups: ["acme.cert-manager.io"]
    resources: ["challenges"]
    verbs: ["create", "delete"]
  - apiGroups: ["acme.cert-manager.io"]
    resources: ["orders/finalizers"]
    verbs: ["update"]
  - apiGroups: [""]
    resources: ["secrets"]
    verbs: ["get", "list", "watch"]
  - apiGroups: [""]
    resources: ["events"]
    verbs: ["create", "patch"]
```

:::info
Create this file as `cert-manager/cluster-roles/cert-manager-edit.yaml`
:::

```yaml
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: cert-manager-edit
  labels:
    app: cert-manager
    app.kubernetes.io/name: cert-manager
    app.kubernetes.io/instance: cert-manager
    rbac.authorization.k8s.io/aggregate-to-edit: "true"
    rbac.authorization.k8s.io/aggregate-to-admin: "true"
rules:
  - apiGroups: ["cert-manager.io"]
    resources: ["certificates", "certificaterequests", "issuers"]
    verbs: ["create", "delete", "deletecollection", "patch", "update"]
```

:::info
Create this file as `cert-manager/cluster-roles/cert-manager-view.yaml`
:::

```yaml
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: cert-manager-view
  labels:
    app: cert-manager
    app.kubernetes.io/name: cert-manager
    app.kubernetes.io/instance: cert-manager
    rbac.authorization.k8s.io/aggregate-to-view: "true"
    rbac.authorization.k8s.io/aggregate-to-edit: "true"
    rbac.authorization.k8s.io/aggregate-to-admin: "true"
rules:
  - apiGroups: ["cert-manager.io"]
    resources: ["certificates", "certificaterequests", "issuers"]
    verbs: ["get", "list", "watch"]
```

:::info
Create this file as `cert-manager/cluster-roles/cert-manager-webhook-webhook-requester.yaml`
:::

```yaml
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: cert-manager-webhook:webhook-requester
  labels:
    app: webhook
    app.kubernetes.io/name: webhook
    app.kubernetes.io/instance: cert-manager
rules:
  - apiGroups:
      - admission.cert-manager.io
    resources:
      - certificates
      - certificaterequests
      - issuers
      - clusterissuers
    verbs:
      - create
```
