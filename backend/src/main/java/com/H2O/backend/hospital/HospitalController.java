package com.H2O.backend.hospital;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@AllArgsConstructor
@RequestMapping("/hospitals")
public class HospitalController {
    private HospitalService hospitalService;

    @GetMapping("/csv")
    public void csvRead(){ hospitalService.readCsv(); }

}
