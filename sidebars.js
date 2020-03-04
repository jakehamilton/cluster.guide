/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  docs: {
    'Getting Started': [
      'getting-started',
      {
        type: 'category',
        label: 'Cluster Creation',
        items: ['getting-started/digitalocean']
      }
    ],
    'Applications': [
      {
        type: 'category',
        label: 'Cert-Manager',
        items: [
          'applications/cert-manager',
          'applications/cert-manager/namespaces',
          'applications/cert-manager/service-accounts',
          {
            type: 'category',
            label: 'Role-Based Access Control',
            items: [
              'applications/cert-manager/rbac/roles',
              'applications/cert-manager/rbac/role-bindings',
              'applications/cert-manager/rbac/cluster-roles',
              'applications/cert-manager/rbac/cluster-role-bindings'
            ]
          },
          {
            type: 'category',
            label: 'Custom Resource Definitions',
            items: [
              'applications/cert-manager/crds/certificate',
              'applications/cert-manager/crds/certificate-request',
              'applications/cert-manager/crds/issuer',
              'applications/cert-manager/crds/cluster-issuer',
              'applications/cert-manager/crds/challenge',
              'applications/cert-manager/crds/order'
            ]
          },
          'applications/cert-manager/deployments',
          'applications/cert-manager/services',
          'applications/cert-manager/mutating-webhook',
          'applications/cert-manager/validating-webhook',
          {
            type: 'category',
            label: 'Cluster Issuers',
            items: [
              'applications/cert-manager/cluster-issuers/letsencrypt-staging',
              'applications/cert-manager/cluster-issuers/letsencrypt-prod'
            ]
          },
        ]
      },
      // 'applications/traefik'
    ]
  }
};
