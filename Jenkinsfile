pipeline {
  environment {
     dockerRegistry = "dharmatkj/hallo-corona-be"
     dockerRegistryCredential = 'dockerhub'
     dockerImage = ''
  }
  agent any
  tools {nodejs "node" }
  stages {
    stage('Cloning Git') {
      steps {
	      git credentialsId: 'be', url: 'git@github.com:igstbagusdharmaputra/hallo-corona-backend.git'
      }
    }
    stage('Build') {
       steps {
         sh 'npm install'
       }
    }
    stage('Test') {
      steps {
        echo 'test'
      }
    }
    stage('Building image') {
       steps{
         script {
           dockerImage = docker.build dockerRegistry + ":latest"
         }
       }
     }
    stage('Upload Image') {
       steps{
         script {
           docker.withRegistry( '', dockerRegistryCredential ) {
             dockerImage.push()
           }
         }
       }
     }
     stage('Remove Unused docker image') {
       steps{
         sh "docker rmi $dockerRegistry:latest"
         #sh 'docker rmi -f $(docker images -f "dangling=true" -q)'
       }
     }
     stage('Deploy App') {
        steps{
          sshagent(credentials: ['be']){
            //  sh 'git config user.email "dharmatkjone@gmail.com"'
            //  sh 'git config user.name "igstbagusdharmaputra"'
             sh """ ssh -t -t devops@10.10.2.60 -o StrictHostKeyChecking=no << EOF 
                cd /home/devops/hallo-corona-backend
                docker-compose down
                git pull origin master
                docker rmi dharmatkj/hallo-corona-be:latest
                docker-compose up -d
                exit
                EOF"""
            //  sh 'ssh -t -t devops@192.168.1.10 -o StrictHostKeyChecking=no "cd /home/devops/app-3 && git pull origin master && docker-compose down && docker rmi dharmatkj/nodejs-app:latest && docker-compose up -d"'
          }
        }
     }
  }
}
