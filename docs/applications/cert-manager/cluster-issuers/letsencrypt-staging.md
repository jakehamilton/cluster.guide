---
id: letsencrypt-staging
title: Let's Encrypt (Staging)
---

Cert-Manager requires a certificate issuer to create certificates.
Create the following issuer.

:::note
Using this issuer is a good idea when iterating since it avoids the
rate limit of the production API.
:::

:::info
Create this file as `cert-manager/cluster-issuers/letsencrypt-staging.yaml`
:::

:::warning
Don't forget to edit this file and include your email.
:::

```yaml
---
apiVersion: cert-manager.io/v1alpha2
kind: ClusterIssuer
metadata:
  name: letsencrypt-staging
spec:
  acme:
    server: https://acme-staging-v02.api.letsencrypt.org/directory
    email: you@example.com
    privateKeySecretRef:
      name: letsencrypt-staging
    solvers:
      - http01:
          ingress:
            class: traefik
```
