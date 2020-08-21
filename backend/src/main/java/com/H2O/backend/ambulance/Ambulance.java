package com.H2O.backend.ambulance;

import com.H2O.backend.reservation.Reservation;
import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Table(name = "ambulance")
public class Ambulance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ambulance_no") private Long ambulanceNo;
    @Column(name = "ambulance_name", nullable = false) private String ambulanceName;
    @Column(name = "addr", nullable = false) private String addr;
    @Column(name = "tel", nullable = false) private String tel;
    @Column(name = "homePage", nullable = false) private String homePage;
    @Column(name = "count", nullable = false) private int count;

    @OneToMany(mappedBy = "ambulance")
    private List<Reservation> reservations;
}
