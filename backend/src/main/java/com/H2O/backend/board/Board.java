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
@Table(name = "board")
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "board_no") private Long boardNo;
    @Column(name = "hospital_star", nullable = false) private String hospitalStar;
    @Column(name = "title", nullable = false) private String title;
    @Column(name = "content", nullable = false) private String content;
    @Column(name = "creation_date", nullable = false) private String creationDate;
    @Column(name = "category", nullable = false) private String category;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(mappedBy = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(mappedBy = "hospital_no")
    private Hospital hospital;

    @OneToMany(mappedBy = "board", cascade = CascadeType.ALL)
    private List<Comment> comment;

}
