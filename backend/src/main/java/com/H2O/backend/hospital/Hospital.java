package com.H2O.backend.hospital;

import com.H2O.backend.board.Board;
import com.H2O.backend.doctor.Doctor;
import lombok.*;

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
    @Column(name = "hospital_no") private Long hospitalNo;
    @Column(name = "business_status") private String businessStatus;
    @Column(name = "tel", nullable = false) private String tel;
    @Column(name = "addr", nullable = false) private String addr;
    @Column(name = "hospital_name", nullable = false) private String hospitalName;
    @Column(name = "latitude", nullable = false) private String latitude;
    @Column(name = "longitude", nullable = false) private String longitude;
    @Column(name = "medical_people", nullable = false) private int medicalPeople;
    @Column(name = "medical_room", nullable = false) private int medicalRoom;
    @Column(name = "medical_bed", nullable = false) private int medicalBed;
    @Column(name = "hospital_area", nullable = false) private String hospitalArea;
    @Column(name = "type_detail", nullable = false) private String typeDetail;

    @Builder
    public Hospital(String businessStatus,
                  String tel,
                  String addr,
                  String hospitalName,
                  String latitude,
                  String longitude,
                  int medicalPeople,
                  int medicalRoom,
                  int medicalBed,
                  String hospitalArea,
                  String typeDetail){
        this.businessStatus = businessStatus;
        this.tel = tel;
        this.addr = addr;
        this.hospitalName = hospitalName;
        this.latitude = latitude;
        this.longitude = longitude;
        this.medicalPeople = medicalPeople;
        this.medicalRoom = medicalRoom;
        this.medicalBed = medicalBed;
        this.hospitalArea = hospitalArea;
        this.typeDetail = typeDetail;
    }

    @OneToMany(mappedBy = "hospital", cascade = CascadeType.ALL)
    private List<Doctor> doctor;

    @OneToMany(mappedBy = "hospital")
    private List<Board> board;
}