package com.H2O.backend.hospital;

import com.H2O.backend.board.Board;
import com.H2O.backend.doctor.Doctor;
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
@Table(name="hospital")
public class Hospital {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="hospital_no") private Long hospitalNo;
    @Column(name="hospital_name") private String hospitalName;
    @Column(name = "logo", nullable = false) private String logo;
    @Column(name = "addr", nullable = false) private String addr;
    @Column(name = "hospital_type", nullable = false) private String hospitalType;
    @Column(name = "medical_person", nullable = false) private String medicalPerson;
    @Column(name = "tel", nullable = false) private String tel;
    @Column(name = "latitude", nullable = false) private String latitude;
    @Column(name = "longitude", nullable = false) private String longitude;

    @Builder
    public Hospital(String hospitalName,
                  String logo,
                  String addr,
                  String hospitalType,
                  String medicalPerson,
                  String tel,
                  String latitude,
                  String longitude){
        this.hospitalName = hospitalName;
        this.logo= logo;
        this.addr = addr;
        this.hospitalType = hospitalType;
        this.medicalPerson = medicalPerson;
        this.tel = tel;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    @OneToMany(mappedBy = "hospital", cascade = CascadeType.ALL)
    private List<Doctor> doctor;

    @OneToMany(mappedBy = "hospital")
    private List<Board> board;
}