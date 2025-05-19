FROM bellsoft/liberica-openjdk-alpine:17.0.12-cds

WORKDIR /backend

COPY target/ad-backend-0.0.1-SNAPSHOT.jar /backend/backend.jar

CMD ["java", "-jar", "backend.jar"]