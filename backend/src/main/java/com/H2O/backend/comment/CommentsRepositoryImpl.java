package com.H2O.backend.comment;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

@Repository
interface CommentsRepository extends JpaRepository<Comment, Long>, CommentsService {}

interface CommentsService {}

public class CommentsRepositoryImpl extends QuerydslRepositorySupport implements CommentsService {

    public CommentsRepositoryImpl() {
        super(Comment.class);
    }
}
