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
@Table(name = "comment")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_no") private Long commentNo;
    @Column(name = "content", nullable = false) private String content;
    @Column(name = "creation_date", nullable = false) private String creationDate;
    @Column(name = "comment_reply", nullable = false) private String commentsReply;
    @Column(name = "sequence_no", nullable = false) private String sequenceNo;

    @ManyToOne
    @JoinColumn(name = "board_no") private Board board;

}
