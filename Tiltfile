load('ext://restart_process', 'docker_build_with_restart')
allow_k8s_contexts('jtp-iks/c4hu550w0cncl134ndf0')

k8s_yaml('kubernetes-manifests/dev.yaml')

docker_build_with_restart('got-relationships', '.',entrypoint='/entrypoint.sh',dockerfile='Dockerfile.dev',
 ignore=['kubernetes-manifests/prod.yaml','kubernetes-manifests/prod-rr.yaml'],
 live_update=[
     sync('./app', '/var/www/html'),
 ]
)

k8s_resource('got-relationships-deployment', port_forwards=['8081'])

disable_snapshots()

settings = read_json('tilt_option.json', default={})
default_registry(settings.get('default_registry', 'docker.io'))