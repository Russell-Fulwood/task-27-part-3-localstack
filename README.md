# task-27-part-3-localstack
How to deploy a React project to a LocalStack S3 instance using Docker:<br><br>


01.  $  In the same directory as docker-compose.yml and doc-task/

        docker compose up -d

02.  $  enter AWS emulation in the container with bash shell

        docker exec -it stacktest bash

03.  \#  change directory to doc-task/

        cd doc-task/

04.  \#  create S3 bucket

        awslocal s3api create-bucket --bucket doc-task

05.  \#  upload HTML index file name (required) to the bucket
 
        awslocal s3 website s3://doc-task --index-document dist/index.html

06.  \#  sync - Recursively copy new/updated files from the source directory to the destination.
        in this case upload dist/ file into the container

        awslocal  s3 sync dist s3://doc-task

07.  \#  allow access to the files in the S3 bucket using a policy configuration

        awslocal s3api put-bucket-policy --bucket doc-task --policy file://policy.json


08.     Access the bucket by the flowing link:

        http://doc-task.s3.localhost.localstack.cloud:4566/index.html


09.     if unable to access site check firewall configuration and
        DNS Rebind Protection :(
        https://docs.localstack.cloud/user-guide/tools/dns-server/#dns-rebind-protection

10.  \#  When finished exit container with bash exit command

        exit

11.  $  close the active docker container

        docker compose down
