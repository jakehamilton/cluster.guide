---
id: getting-started
title: Before You Begin
---

## Required Tools

These tools are required for interacting with Kubernetes and our configuration files.

* [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
* [kustomize](https://github.com/kubernetes-sigs/kustomize)
* [kubeseal](https://github.com/bitnami-labs/sealed-secrets)

## Recommended Tools

These tools are recommended to have since they can make it easier to get things done.
They are not required.

* [kubectx + kubens](https://github.com/ahmetb/kubectx)

## Project Creation

Once you have your tools, it is a good idea to create a new git repository for storing
your configurations. This guide will use `~/work/cluster` as the directory storing
our project, but you may store them anywhere.

```shell
# Create a new directory for the project
mkdir -p ~/work/cluster

# Enter the directory
cd ~/work/cluster

# Initialize a new git repository
git init
```

## Cluster Creation

The next step is to create a Kubernetes cluster. Guides are currently available for the
following providers:

* [Digital Ocean](./getting-started/digitalocean.md)
