---
id: cert-manager
title: Cert-Manager
---

[Cert-Manager](https://cert-manager.io/) automatically manages X.509 certificates and integrates
easily with services like Let's Encrypt to create a simple, automated ssl cert management system.

:::note
All files will be based in your cluster project directory (eg. `~/work/cluster`).
:::

:::warning
Each directory that houses configs must have its own `kustomization.yaml` file that includes them.
:::

:::note
A reference implementation can be found at
[https://git.intergalactic.dev/jake/intergalactic/src/branch/master/cluster/cert-manager](https://git.intergalactic.dev/jake/intergalactic/src/branch/master/cluster/cert-manager).
:::
