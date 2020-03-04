---
id: letsencrypt-prod
title: Let's Encrypt (Production)
---

Cert-Manager requires a certificate issuer to create certificates.
Create the following issuer.

:::info
Create this file as `cert-manager/cluster-issuers/letsencrypt-prod.yaml`
:::

:::warning
Don't forget to edit this file and include your email.
:::

```yaml
---
apiVersion: cert-manager.io/v1alpha2
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod
spec:
  acme:
    server: https://acme-v02.api.letsencrypt.org/directory
    email: you@example.com
    privateKeySecretRef:
      name: letsencrypt-prod
    solvers:
      - http01:
          ingress:
            class: traefik
```
