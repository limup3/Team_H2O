CREATE TABLE Hospital
(
    `Hospital_Name`  VARCHAR(20)     NOT NULL,
    `Logo`           VARCHAR(255)    NULL,
    `Addr`           VARCHAR(255)    NULL,
    `HospitalType`   VARCHAR(10)     NULL,
    `MedicalPerson`  VARCHAR(5)      NULL,
    `Tel`            VARCHAR(15)     NULL,
    `Latitude`       VARCHAR(45)     NULL,
    `Longitude`      VARCHAR(45)     NULL,
    PRIMARY KEY (Hospital_Name)
);