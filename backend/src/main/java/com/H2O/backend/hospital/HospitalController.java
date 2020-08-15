package com.H2O.backend.hospital;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/hospitals")
public class HospitalController {
    private final Hospital hospital;
    private final HospitalRepository hospitalRepository;
    private final HospitalService hospitalService;

    public HospitalController(Hospital hospital, HospitalRepository hospitalRepository, HospitalService hospitalService) {
        this.hospital = hospital;
        this.hospitalRepository = hospitalRepository;
        this.hospitalService = hospitalService;
    }

    // 병원 추가
    @PostMapping("/hospitalAdd")
    public ResponseEntity<Hospital> hospitalAdd(@RequestBody Hospital hospital){
        Optional<Hospital> hospitalAdd = hospitalService.hospitalAdd(hospital);
        if(hospitalAdd.isPresent()){
            return ResponseEntity.ok().build();
        }else{
            return ResponseEntity.notFound().build();
        }

    }

    // 병원 라이센스 중복 검사
    @GetMapping("/BusinessLicenseCheck/{businessLicenseNumber}")
    public ResponseEntity<Hospital> businessLicenseCheck(@PathVariable String businessLicenseNumber){
        Optional<Hospital> licenseCheckResult = hospitalService.findHospitalByBusinessLicenseNumber(businessLicenseNumber);
        if(licenseCheckResult.isPresent()){
            return ResponseEntity.ok().build();
        }else{
            return ResponseEntity.notFound().build();
        }
    }

    // 병원 테이블 리스트
    @GetMapping("/hospitalList")
    public ResponseEntity<List<Hospital>> hospitalList() {
        List<Hospital> hospitalList = hospitalService.hospitalList();
        return ResponseEntity.ok(hospitalList);
    }
}
