k8s_yaml('kubernetes-manifests/dev.yaml')

docker_build('got-relationships', '.', ignore=['kubernetes-manifests/prod.yaml'])

k8s_resource('got-relationships-deployment', port_forwards=['8081'])

disable_snapshots()

include('./Tiltfile.imageRegistry')