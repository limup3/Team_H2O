package com.H2O.backend.hospital;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Component
interface HospitalService{
    Optional<Hospital> findHospitalByBusinessLicenseNumber(String businessLicenseNumber);
    Hospital update(Hospital selectHospital);
    void delete(Hospital selectHospital);
    Optional<Hospital> hospitalAdd(Hospital hospital);
    List<Hospital> hospitalList();
}

@Service
public class HospitalServieceImpl implements HospitalService{
    private final HospitalRepository hospitalRepository;

    public HospitalServieceImpl(HospitalRepository hospitalRepository) {
        this.hospitalRepository = hospitalRepository;
    }

    @Override
    public Optional<Hospital> findHospitalByBusinessLicenseNumber(String businessLicenseNumber) {
        Optional<Hospital> licenseCheck = hospitalRepository.findByBusinessLicenseNumber(businessLicenseNumber);
        return licenseCheck;
    }

    @Override
    public Hospital update(Hospital selectHospital) {
        return hospitalRepository.save(selectHospital);
    }

    @Override
    public void delete(Hospital selectHospital) {
        hospitalRepository.delete(selectHospital);
    }

    @Override
    public Optional<Hospital> hospitalAdd(Hospital hospital) {
        Hospital createHospital = new Hospital();
        createHospital.setHospitalName(hospital.getHospitalName());
        createHospital.setBusinessLicenseNumber(hospital.getBusinessLicenseNumber());
        createHospital.setLogo(hospital.getLogo());
        createHospital.setAddr(hospital.getAddr());
        createHospital.setHospitalType(hospital.getHospitalType());
        createHospital.setMedicalPerson(hospital.getMedicalPerson());
        createHospital.setTel(hospital.getTel());
        createHospital.setLatitude(hospital.getLatitude());
        createHospital.setLongitude(hospital.getLongitude());

        Hospital hospitalData = hospitalRepository.save(createHospital);
        return Optional.of(hospitalData);
    }

    @Override
    public List<Hospital> hospitalList() {
        return hospitalRepository.findAll();
    }
}
