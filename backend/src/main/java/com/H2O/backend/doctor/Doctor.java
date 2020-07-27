package com.H2O.backend.doctor;

import com.H2O.backend.hospital.Hospital;
import com.H2O.backend.reservation.Reservation;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;


@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@Table(name="doctor")
public class Doctor {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="doctor_no") private Long no;
    @Column(name = "doctor_name") private String doctor_name;
    @Column(name = "hospital_name") private String hospital_name;
    @Column(name = "position", nullable = false) private String position;
    @Column(name = "detail_data", nullable = false) private String detail_data;
    @Column(name = "specialized", nullable = false) private String specialized;
    @Column(name = "medicalSubject", nullable = false) private String medicalSubject;
    @Column(name = "age", nullable = false) private int age;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="hospital_no")
    private Hospital hospital;

    @OneToMany(mappedBy = "doctor")
    private List<Reservation> reservations;
}