package com.H2O.backend.hospital;

import com.H2O.backend.util.etc.Box;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@AllArgsConstructor
@RequestMapping("/hospital")
public class HospitalController {
    private final HospitalService hospitalService;
    private final HospitalRepository repository;

    @Autowired
    Box box;

    @GetMapping("/csv")
    public void csvRead(){ hospitalService.readCsv(); }

    @GetMapping("/data")
    public Map<?,?> hospitalData(){
        System.out.println("들어옴");
        Iterable<Hospital> data = repository.findAll();
        box.put("list", data);
        System.out.println(box.get());
        return box.get();


    }

}
