package com.H2O.backend.hospital;

import org.springframework.data.jpa.repository.JpaRepository;

public interface HospitalRepository extends JpaRepository<Hospital, Long>, IHospitalRepository {

}
