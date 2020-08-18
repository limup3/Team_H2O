package com.H2O.backend.hospital;

import com.H2O.backend.util.etc.Box;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@AllArgsConstructor
@RequestMapping("/hospital")
public class HospitalController {
    private final Hospital hospital;
    private final HospitalRepository hospitalRepository;
    private final HospitalService hospitalService;

    @Autowired
    Box box;

    //csv파일 데이터베이스에 저장
    @GetMapping("/csv")
    public void csvRead(){ hospitalService.readCsv(); }

    //맵에 병원 띄우기
    @GetMapping("/data")
    public Map<?,?> hospitalData(){
        System.out.println("들어옴");
        Iterable<Hospital> data = hospitalRepository.findAll();
        box.put("list", data);
        System.out.println(box.get());
        return box.get();

    }

    // 병원 추가
    @PostMapping("/hospitalAdd")
    public ResponseEntity<Hospital> hospitalAdd(@RequestBody Hospital hospital){
        Optional<Hospital> hospitalAdd = hospitalService.hospitalAdd(hospital);
        System.out.println("병원 추가 확인");
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
        System.out.println(hospitalList);
        return ResponseEntity.ok(hospitalList);
    }

    // 병원 로고 이미지 삽입
    @PostMapping("/logoUpload")
    public ResponseEntity<Hospital> hospitalLogo(){
        return null;
    }



}