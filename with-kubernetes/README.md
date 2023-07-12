# With Kubernetes

This examples shows how to package a Clea app and deploy it on a Kubernetes environment.

## Local development with Skaffold

The project has a [Skaffold](https://skaffold.dev/) configuration that provides an easy workflow for building, pushing and deploying your application on a local kubernetes cluster.

- [Install Skaffold](https://skaffold.dev/docs/install/).
- [Install kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/).
- [Install minikube](https://minikube.sigs.k8s.io/docs/start/).
- Start a minikube cluster, this may take several minutes:
  ```
  minikube start --profile clea-app
  skaffold config set --global local-cluster true
  eval $(minikube -p clea-app docker-env)
  ```
- Begin using Skaffold for continuous development:
  ```
  skaffold dev
  ```
  Skaffold will now automatically build and deploy your application when your code changes.
- Now both the app and the backend should be running on the minikube cluster. You can run
  ```
  minikube tunnel -p clea-app
  ```
  to expose the services from minikube to your host. Then open your browser and you should be able to see both the app at [http://localhost:5000/app.js](http://localhost:5000/app.js) and the backend at [http://localhost:5001/](http://localhost:5001/).

Cleaning up resources:
- By stopping skaffold, it will clean up all deployed artifacts and end dev mode:
  ```
  Ctrl+C
  ```
- You can also stop and delete the minikube cluster:
  ```
  minikube stop --profile clea-app
  minikube delete --profile clea-app
  ```

## Deployment on a production kubernetes cluster

TODO