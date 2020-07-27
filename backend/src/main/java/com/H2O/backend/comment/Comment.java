package com.H2O.backend.comment;

import com.H2O.backend.board.Board;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;


@Entity @Getter
@Setter
@ToString
@NoArgsConstructor
@Table(name = "Comment")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_id") private Long id;
    @Column(name = "comment_no", nullable = false) private String commentsNo;
    @Column(name = "Content", nullable = false) private String Content;
    @Column(name = "creation_date", nullable = false) private String creation_date;
    @Column(name = "comment_reply", nullable = false) private String comments_reply;
    @Column(name = "sequence_no", nullable = false) private String sequence_no;

    @ManyToOne
    @JoinColumn(name = "board_no") private Board board;

}
