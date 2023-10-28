pipeline {
    agent any

    stages {
        stage('SCM') {
            steps {
                checkout scm
            }
        }
        stage('Test') {
          steps {
            echo 'Application Testing'
          }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarScanner') {
                    sh "${env.SCANNER_HOME}/bin/sonar-scanner"
                    }
                }
            }
    }
}
