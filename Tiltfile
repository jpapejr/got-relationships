k8s_yaml('kubernetes-manifests/dev.yaml')

docker_build('got-relationships', '.', dockerfile='Dockerfile.dev',
 ignore=['kubernetes-manifests/prod.yaml','kubernetes-manifests/prod-rr.yaml'],
 live_update=[
     sync('./app', '/var/www/html'),
     restart_container()
 ]
)

k8s_resource('got-relationships-deployment', port_forwards=['8081'])

disable_snapshots()

include('./Tiltfile.imageRegistry')