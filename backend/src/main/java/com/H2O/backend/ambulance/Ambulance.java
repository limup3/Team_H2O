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
@Table(name = "Ambulance")
public class Ambulance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ambulance_no") private Long no;
    @Column(name = "ambulance_name", nullable = false) private String AmbulanceName;
    @Column(name = "Addr", nullable = false) private String Addr;
    @Column(name = "Tel", nullable = false) private String Tel;
    @Column(name = "HomePage", nullable = false) private String HomePage;
    @Column(name = "Count", nullable = false) private int Count;

    @JsonIgnore
    @OneToMany(mappedBy = "ambulance")
    private List<Reservation> reservations;
}
