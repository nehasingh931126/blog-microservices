# blog-microservices
A mini microservice application

## Packages installed in POST
npm install express cors axios nodemon

## Notes On Async Communication
Query Service has Zero dependencies on Other Services
Query Service will be extrmelty fast
Data Duplication : Affordable
Harder to understand : Yes


One of the Big reason to use the Microservice is possibility of increasing the overall reliability of our system

## BUZZ WORDS
Event bus or Event Broker


## Event Bus
Many different implementation RabbitMQ, Kafka, NATS
Receives events, publishes them to listeners
Many Different subtle features that makes async communication way easier or way harder
We are going to build our own event bus using Express js It will not implement the vast majority of Features a normal bus has



