---
id: mutating-webhook
title: Mutating Webhook Configurations
---

Cert-Manager uses [`MutatingWebhook` and `ValidatingWebhook`](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/#webhook-configuration).
Create the following configurations in your cluster.

:::info
Create this file as `cert-manager/mutating-webhook-configurations/cert-manager.yaml`
:::

```yaml
---
apiVersion: admissionregistration.k8s.io/v1beta1
kind: MutatingWebhookConfiguration
metadata:
  name: cert-manager-webhook
  labels:
    app: webhook
    app.kubernetes.io/name: webhook
    app.kubernetes.io/instance: cert-manager
  annotations:
    cert-manager.io/inject-ca-from-secret: "cert-manager/cert-manager-webhook-tls"
webhooks:
  - name: webhook.cert-manager.io
    rules:
      - apiGroups:
          - "cert-manager.io"
          - "acme.cert-manager.io"
        apiVersions:
          - v1alpha2
        operations:
          - CREATE
          - UPDATE
        resources:
          - "*/*"
    failurePolicy: Fail
    sideEffects: None
    clientConfig:
      service:
        name: cert-manager-webhook
        namespace: "cert-manager"
        path: /mutate
```
