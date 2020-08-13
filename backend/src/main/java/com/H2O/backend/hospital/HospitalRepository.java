package com.H2O.backend.hospital;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
interface HospitalRepository extends JpaRepository<Hospital, Long>, IHospitalRepository {}
