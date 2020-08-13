CREATE TABLE Doctor
(
    `Doctor_Name`     VARCHAR(5)      NOT NULL,
    `Hospital_Name`   VARCHAR(20)     NULL,
    `Position`        VARCHAR(20)     NULL,
    `Detail_Data`     VARCHAR(255)    NULL,
    `Specialized`     VARCHAR(255)    NULL,
    `MedicalSubject`  VARCHAR(20)     NULL,
    `Age`             INT             NULL,
    PRIMARY KEY (Doctor_Name)
);