pipeline {
  agent any
  triggers {
    githubPush()
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install') {
      steps {
        bat 'npm install'
        bat 'npx playwright install'
      }
    }

    stage('Test') {
      steps {
        bat 'npm test'
      }
    }

    stage('Parallel Build') {
      parallel {
        stage('chromium') {
          steps {
            bat 'npx playwright test --project=chromium'
          }
        }
        stage('firefox') {
          steps {
            bat 'npx playwright test --project=firefox'
          }
        }
      }
    }

    stage('Publish HTML Report') {
      steps {
        publishHTML(target: [
          allowMissing: true,
          keepAll: true,
          alwaysLinkToLastBuild: true,
          reportDir: 'playwright-report',
          reportFiles: 'index.html',
          reportName: 'Playwright Test Report'
        ])
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
    }
  }
}
