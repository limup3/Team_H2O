package com.H2O.backend.user;

import com.H2O.backend.reservation.Reservation;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@ToString
@Component
@NoArgsConstructor
@Table(name = "user", uniqueConstraints = {@UniqueConstraint(columnNames = {"user_id"})})
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_no") private Long userNo;
    @Column(name = "user_id", nullable = false) private String userId;
    @Column(name = "name", nullable = false) private String name;
    @Column(name = "password", nullable = false) private String password;
    @Column(name = "phone", nullable = false) private String phone;
    @Column(name = "admin_check", nullable = false, columnDefinition = "boolean default 0") private Integer adminCheck;
    @Column(name = "email", nullable = false) private String email;
    @Column(name = "history") private String history;

    @JsonIgnore
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Reservation> reservation;


}
