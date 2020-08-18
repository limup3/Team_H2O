package com.H2O.backend.board;

import com.H2O.backend.hospital.Hospital;
import com.H2O.backend.user.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.annotation.Nullable;
import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@ToString(exclude = {"hospital"})
@NoArgsConstructor
@Table(name = "board")
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "board_no") private Long boardNo;
    @Column(name = "hospital_star", nullable = true) private String hospitalStar;
    @Column(name = "title", nullable = false) private String title;
    @Column(name = "content", nullable = false) private String content;
    @Column(name = "creation_date")
    private LocalDate creationDate = LocalDate.now();
    @Column(name = "category", nullable = false) private String category;
    @Column(name = "med_Category", nullable = false) private String medCategory;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_no")
    private User user;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "hospital_no")
    private Hospital hospital;

/*    @JsonManagedReference
    @OneToMany(mappedBy = "board", cascade = CascadeType.ALL)
    private List<Comment> comment;*/

    @Builder
    public Board(String hospitalStar, String title, String content,String medCategory,
                 LocalDate creationDate, String category){
        this.hospitalStar=hospitalStar;
        this.title=title;
        this.content=content;
        this.creationDate=creationDate;
        this.category=category;
        this.medCategory=medCategory;
    }
}
