package com.H2O.backend.board;

import static com.H2O.backend.board.QBoard.board;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

import java.util.List;

interface IBoardRepository {//I , 커스텀 쿼리를 짜서 컨트롤러로 보낸다.

    List<Board> findOneByWord(String cateWord);


}

@Repository
public class BoardRepositoryImpl extends QuerydslRepositorySupport implements IBoardRepository {

    private final JPAQueryFactory jpaQueryFactory;

    public BoardRepositoryImpl(JPAQueryFactory jpaQueryFactory) {
        super(Board.class);
        this.jpaQueryFactory = jpaQueryFactory;
    }


    @Override
    public List<Board> findOneByWord(String cateWord) {
        return jpaQueryFactory
                .select(Projections.fields(Board.class, board.title, board.content))
                .from(board)
                .where(board.title.contains("안녕"))
                .orderBy(board.boardNo.desc())
                .limit(5)
                .fetch();
    }



}
