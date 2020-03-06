---
id: digitalocean
title: Digital Ocean
---

## Create A New Cluster

To create the cluster, navigate to [https://cloud.digitalocean.com](https://cloud.digitalocean.com)
and select the `Create` dropdown, then choose `Clusters`.


![Select the "Create" dropdown](/img/getting-started/digitalocean-step-1.png)

![Select "Clusters"](/img/getting-started/digitalocean-step-2.png)

Now, select a datacenter where you would like your traffic served from and add a new node pool.
It can be a good idea to name your node pool something meaningful (eg. the size of the nodes).

![Create a node pool and name the cluster](/img/getting-started/digitalocean-step-3.png)

Finally, select "Download Config File" and follow the given instructions to download it. Move this
file to `~/.kube/config` (renaming the file to `config`). You may need to create the `.kube` directory
if it does not exist.

```shell
mkdir ~/.kube

mv ~/Downloads/my-config-file.yaml ~/.kube/config
```

Now you can try running `kubectl`.

```shell
kubectl get nodes
```

You should see an output similar to the following.

```
NAME          STATUS   ROLES    AGE   VERSION
light-xyz1    Ready    <none>   16d   v1.16.6
light-xyz2    Ready    <none>   16d   v1.16.6
light-xyz3    Ready    <none>   16d   v1.16.6
light-xyz4    Ready    <none>   16d   v1.16.6
```

From here, you can move on to deploying things to your cluster.
