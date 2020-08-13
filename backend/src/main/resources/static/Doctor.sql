CREATE TABLE Doctor
(
    `Doctor_Name`     VARCHAR(5)      NOT NULL,
    `doctors_License` VARCHAR(5)      NOT NULL,
    `Hospital_Name`   VARCHAR(20)     NULL,
    `Position`        VARCHAR(20)     NULL,
    `Detail_Data`     VARCHAR(255)    NULL,
    `Specialized`     VARCHAR(255)    NULL,
    `Medical_Subject`  VARCHAR(20)     NULL,
    `Birthday`        VARCHAR(20)     NULL,
    PRIMARY KEY (doctors_License)
);