package com.H2O.backend.doctor;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/doctor")
public class DoctorController {
    private final Doctor doctor;
    private final DoctorRepository doctorRepository;
    private final DoctorService doctorService;

    public DoctorController(Doctor doctor, DoctorRepository doctorRepository, DoctorService doctorService) {
        this.doctor = doctor;
        this.doctorRepository = doctorRepository;
        this.doctorService = doctorService;
    }

    // 의사 추가
    @PostMapping("/doctorAdd")
    public ResponseEntity<Doctor> doctorAdd(@RequestBody Doctor doctor){
        Optional<Doctor> doctorAdd = doctorService.doctorAdd(doctor);
        if((doctorAdd.isPresent())){
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    // 의사 정보 변경
    @PatchMapping("/modify/{doctorsLicense}")
    public ResponseEntity<Doctor> modify(@PathVariable String doctorsLicense, @RequestBody Doctor doctor){
        Optional<Doctor> modifyDoctor = doctorService.findDoctorByDoctorsLicense(doctor.getDoctorsLicense());

        if(modifyDoctor.isPresent()){
            modifyDoctor.ifPresent(selectDoctor ->{
                selectDoctor.setDoctorName(doctor.getDoctorName());
                selectDoctor.setPosition(doctor.getPosition());
                selectDoctor.setDetailData(doctor.getDetailData());
                selectDoctor.setSpecialized(doctor.getSpecialized());
                selectDoctor.setMedicalSubject(doctor.getMedicalSubject());
                selectDoctor.setBirthday(doctor.getBirthday());
                doctorRepository.save(selectDoctor);
            });
            return ResponseEntity.ok(modifyDoctor.get());
        } else {
            System.out.println("의사 정보 업데이트 실패");
            return ResponseEntity.notFound().build();
        }
    }

    //의사 라이센스 중복 검사
    @GetMapping("/licenseCheck/{doctorsLicense}")
    public ResponseEntity<Doctor> licenseCheck(@PathVariable String doctorsLicense){
        Optional<Doctor> licenseCheckResult = doctorService.findDoctorByDoctorsLicense(doctorsLicense);
        if(licenseCheckResult.isPresent()){
            return ResponseEntity.ok().build();
        }else{
            return ResponseEntity.notFound().build();
        }
    }

}