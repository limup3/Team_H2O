package com.H2O.backend.board;

import com.H2O.backend.comment.Comment;
import com.H2O.backend.hospital.Hospital;
import com.H2O.backend.user.User;
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
@Table(name = "Board")
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "board_no") private Long no;
    @Column(name = "hospital_star", nullable = false) private String HospitalStar;
    @Column(name = "Title", nullable = false) private String Title;
    @Column(name = "Content", nullable = false) private String Content;
    @Column(name = "creation_date", nullable = false) private String CreationDate;
    @Column(name = "Category", nullable = false) private String Category;

    @ManyToOne
    @JoinColumn(name = "user_id") private User user;
    @ManyToOne
    @JoinColumn(name = "hospital_no")private Hospital hospital;

    @OneToMany(mappedBy = "board", cascade = CascadeType.ALL)
    private List<Comment> comment;

}
