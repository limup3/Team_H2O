package com.H2O.backend.doctor;


import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.Optional;

@Repository
interface IDoctorRepository{
    Optional<Doctor> findByDoctorLicense(String doctorLicense);
}

public class DoctorRepositoryImpl extends QuerydslRepositorySupport implements IDoctorRepository{
    private final JPAQueryFactory queryFactory;
    private final DataSource dataSource;

    DoctorRepositoryImpl(JPAQueryFactory queryFactory, DataSource dataSource) {
        super(Doctor.class);
        this.queryFactory = queryFactory;
        this.dataSource = dataSource;

    }

    @Override
    public Optional<Doctor> findByDoctorLicense(String doctorLicense) {
        QDoctor qDoctor = QDoctor.doctor;
        Doctor findOne = queryFactory.selectFrom(qDoctor).where(qDoctor.doctorsLicense.eq(doctorLicense)).fetchOne();
        return Optional.ofNullable(findOne);
    }
}
