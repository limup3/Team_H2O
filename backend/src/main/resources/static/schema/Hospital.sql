CREATE TABLE Hospital
(
    `Hospital_No`      INT             NOT NULL    AUTO_INCREMENT,
    `Business_Status`  VARCHAR(10)     NULL,
    `Tel`              VARCHAR(20)     NULL,
    `Addr`             VARCHAR(255)    NULL,
    `Hospital_Name`    VARCHAR(50)     NULL,
    `Latitude`         VARCHAR(20)     NULL,
    `Longitude`        VARCHAR(20)     NULL,
    `Hospital_Type`    VARCHAR(20)     NULL,
    `Medical_People`   INT             NULL,
    `Hospital_Room`    INT             NULL,
    `Hospital_Bed`     INT             NULL,
    `Hospital_Area`    VARCHAR(20)     NULL,
    `Type_Detail`      VARCHAR(255)    NULL,
    PRIMARY KEY (Hospital_No)
)default character set utf8 collate UTF8_GENERAL_CI;