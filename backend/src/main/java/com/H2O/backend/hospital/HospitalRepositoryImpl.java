package com.H2O.backend.hospital;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
interface HospitalRepository extends JpaRepository<Hospital, Long>, HospitalService {}

interface HospitalService {
    public List<Object> findAllOrderByJoinDate();
}

public class HospitalRepositoryImpl{
    @Autowired
    HospitalService hospitalService;

    public List<Object> findAllOrderByJoinDate() {
        return null;
    }
}
