package com.H2O.backend.doctor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
interface MemberRepository extends JpaRepository<Doctor, Long>, DoctorService {}

interface DoctorService {
//    public List<Object> findAllOrderByJoinDate();
}

public class DoctorRepositoryImpl{
    @Autowired
    DoctorService doctorService;

//    public List<Object> findAllOrderByJoinDate() {
//        return null;
//    }
}
