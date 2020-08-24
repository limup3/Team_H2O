package com.H2O.backend.comment;


import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;
@Repository
interface ICommentRepository{

}


class CommentsRepositoryImpl extends QuerydslRepositorySupport implements ICommentRepository {

    private final JPAQueryFactory jpaQueryFactory;

    public CommentsRepositoryImpl(JPAQueryFactory jpaQueryFactory) {
        super(Comment.class);
        this.jpaQueryFactory = jpaQueryFactory;
    }
}
