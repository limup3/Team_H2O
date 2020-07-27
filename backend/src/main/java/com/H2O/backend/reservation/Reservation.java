package com.H2O.backend.reservation;

import com.H2O.backend.ambulance.Ambulance;
import com.H2O.backend.doctor.Doctor;
import com.H2O.backend.user.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity @Getter
@Setter
@ToString
@NoArgsConstructor
@Table(name = "reservation", uniqueConstraints = {@UniqueConstraint(columnNames = {"reservation_no"})})

public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "reservation_no") private Long no;
    @Column(name = "reservation_id") private Long id;
    @Column(name = "gubun",nullable = false ) private String gubun;
    @Column(name = "date",nullable = false ) private String date;
    @Column(name = "time",nullable = false ) private String time;
    @Column(name = "prescription",nullable = false ) private String prescription;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="doctor_no")
    private Doctor doctor;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="ambulance_no")
    private Ambulance ambulance;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_no")
    private User user;
}
