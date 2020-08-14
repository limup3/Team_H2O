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
    @Column(name = "hospital_type", nullable = false) private String hospitalType;
    @Column(name = "medical_people", nullable = false) private int medicalPeople;
    @Column(name = "hospital_room", nullable = false) private int hospitalRoom;
    @Column(name = "hospital_bed", nullable = false) private int hospitalBed;
    @Column(name = "hospital_area", nullable = false) private String hospitalArea;
    @Column(name = "type_detail", nullable = false) private String typeDetail;

    public Hospital(){}

    @Builder
    public Hospital(
            String businessStatus,
            String tel,
            String addr,
            String hospitalName,
            String latitude,
            String longitude,
            String hospitalType,
            int medicalPeople,
            int hospitalRoom,
            int hospitalBed,
            String hospitalArea,
            String typeDetail){
        this.businessStatus = businessStatus;
        this.tel = tel;
        this.addr = addr;
        this.hospitalName = hospitalName;
        this.latitude = latitude;
        this.longitude = longitude;
        this.hospitalType = hospitalType;
        this.medicalPeople = medicalPeople;
        this.hospitalRoom = hospitalRoom;
        this.hospitalBed = hospitalBed;
        this.hospitalArea = hospitalArea;
        this.typeDetail = typeDetail;
    }

    @OneToMany(mappedBy = "hospital", cascade = CascadeType.ALL)
    private List<Doctor> doctor;

    @OneToMany(mappedBy = "hospital")
    private List<Board> board;
}