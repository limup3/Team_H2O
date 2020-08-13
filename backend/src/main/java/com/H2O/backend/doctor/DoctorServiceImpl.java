package com.H2O.backend.doctor;


import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Component
interface DoctorService{
    Optional<Doctor> findDoctorByDoctorLicense(String Doctor);
    Doctor update(Doctor selectDoctor);
    void delete(Doctor selectDoctor);
    Optional<Doctor> doctorAdd(Doctor doctor);
}

@Service
public class DoctorServiceImpl implements DoctorService{
    private final DoctorRepository doctorRepository;

    public DoctorServiceImpl(DoctorRepository doctorRepository) {
        this.doctorRepository = doctorRepository;
    }

    @Override
    public Optional<Doctor> findDoctorByDoctorLicense(String doctor) {
        Optional<Doctor> licenseCheck = doctorRepository.findByDoctorLicense(doctor);
        return licenseCheck;
    }

    @Override
    public Doctor update(Doctor selectDoctor) {
        return doctorRepository.save(selectDoctor);
    }

    @Override
    public void delete(Doctor selectDoctor) {
        doctorRepository.delete(selectDoctor);
    }

    @Override
    public Optional<Doctor> doctorAdd(Doctor doctor) {
        Doctor createDoctor = new Doctor();
        createDoctor.setDoctorsLicense(doctor.getDoctorsLicense());
        createDoctor.setDoctorName(doctor.getDoctorName());
        createDoctor.setHospitalName(doctor.getHospitalName());
        createDoctor.setPosition(doctor.getPosition());
        createDoctor.setDetailData(doctor.getDetailData());
        createDoctor.setSpecialized(doctor.getSpecialized());
        createDoctor.setMedicalSubject(doctor.getMedicalSubject());
        createDoctor.setBirthday(doctor.getBirthday());

        System.out.println("------------------");
        System.out.println(createDoctor);

        Doctor doctorData = doctorRepository.save(createDoctor);

        System.out.println("22222222222222222222222222222");
        return Optional.of(doctorData);
    }
}
