---
id: faq
title: Frequently Asked Questions
---

## Why aren't you using Helm?

Helm was used to get started on each individual application! However,
they were modified for readability and ease of maintenance. This approach
is intended to help you have more control and build a greater understanding
of your infrastructure. As well, managing YAML files alone makes the GitOps
paradigm work!

## Why aren't you using Kustomize with base/patches?

We could provide a central repository for users to pull bases from. However,
we do not want to become yet another package manager. Instead, this guide is
intended to help you build a deeper understanding of all the pieces we cover.
