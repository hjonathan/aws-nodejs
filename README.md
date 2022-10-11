# INFORMACIÓN GENERAL
GITHUB Repositorio donde se encuentra el proyecto git@github.com:hjonathan/aws-nodejs.git
# SERVERLESS 
- Se utilizó serverless, para desplegar
   Lambda Functions     
   API Gateways      
   Creación de colecciones en DynamoDB


# INSTALACIÓN Y CONFIGURACIÓN AWS-CLI1. 

## 1. Tener instalado aws-cli previamente, para más información :https://docs.aws.amazon.com/es_es/cli/latest/userguide/getting-started-install.html#getting-started-install-instructions

## 2. Configurar en AWS-CLI : Access key y Secret access key.- En consola ejecuta    >>aws configure

## 3. Llena los datos con las llaves provistas o crea unas nuevas 
AWS Access Key ID [None]: AKIAROI2OMOSJVX5BLHQAWS 
Secret Access Key [None]: E9ibARxtmzOxSXq97WqOqSqG+tg2VVa8/IR5XImUDefault 
region name [None]: us-west-2
Default output format [None]: 

para más información 
https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html

# INSTALACIÓN SERVERLESS
## 1. En consola ejecuta
 >>npm install -g serverless

para más informacion : https://www.serverless.com/framework/docs/getting-started


# INSTALACION PRUEBA TÉCNICA
## 1. Descargar repositorio de proyecto en una carpeta local  >>git clone git@github.com:hjonathan/aws-nodejs.git
## 2. Ingresar en carpeta de proyecto  >>cd aws-nodejs
## 3.  Ejecutar npm  >>npm install
## 4.  Para pruebas locales ejecutar   >>serverless offline
## 5.  Para pruebas en AWS  >>serverless deploy --verbose


# LIVE DEMO AWS
Nota importante:
Se creó un LAYER relacionado a los lambda functions para poder importar la libreria zod, el comprimido se encuentra en: https://drive.google.com/file/d/1HWzhhxtrr3TkCmd8FHIg6jamtYv5E_8h/view?usp=sharing


## 1. Para pruebas reales se desplegaron los endpoints y lambda functions

Endpoints:
  POST - https://19njwt5xjh.execute-api.us-west-2.amazonaws.com/tokens
  GET - https://19njwt5xjh.execute-api.us-west-2.amazonaws.com/token/{token}
Functions:
  tokens: node-aws-lambda-crud-dev-tokens 
  getToken: node-aws-lambda-crud-dev-getToken


## 2. Crear token POST - https://19njwt5xjh.execute-api.us-west-2.amazonaws.com/tokens Puede usar postman o algun cliente para este proposito- Cargar datos de prueba
- No olvidar el Bearer Token 



## 3. Obtener token GET - https://19njwt5xjh.execute-api.us-west-2.amazonaws.com/token/{token}

 
