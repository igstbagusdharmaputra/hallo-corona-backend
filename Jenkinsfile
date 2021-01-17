pipeline {
  environment {
     dockerRegistry = "dharmatkj/nodejs-app"
     dockerRegistryCredential = 'dockerhub'
     dockerImage = ''
  }
  agent any
  tools {nodejs "node" }
  stages {
    stage('Cloning Git') {
      steps {
	      git credentialsId: 'github', url: 'https://github.com/igstbagusdharmaputra/Docker-NodeJS-Part-3'
      }
    }
    stage('Build') {
       steps {
         sh 'npm install'
       }
    }
    stage('Test') {
      steps {
        sh 'npm test'
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
         sh 'docker rmi -f $(docker images -f "dangling=true" -q)'
       }
     }
     stage('Deploy App') {
        steps{
          sshagent(credentials: ['frontend']){
            //  sh 'git config user.email "dharmatkjone@gmail.com"'
            //  sh 'git config user.name "igstbagusdharmaputra"'
             sh """ ssh -t -t devops@192.168.1.9 -o StrictHostKeyChecking=no << EOF 
                cd /home/devops/app-3/
                docker-compose down
                git pull origin master
                docker rmi dharmatkj/nodejs-app:latest
                docker-compose up -d
                exit
                EOF"""
            //  sh 'ssh -t -t devops@192.168.1.10 -o StrictHostKeyChecking=no "cd /home/devops/app-3 && git pull origin master && docker-compose down && docker rmi dharmatkj/nodejs-app:latest && docker-compose up -d"'
          }
        }
     }
  }
}
