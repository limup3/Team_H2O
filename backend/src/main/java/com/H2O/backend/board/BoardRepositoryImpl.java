package com.H2O.backend.board;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

@Repository
interface BoardRepository extends JpaRepository<Board,Long>, BoardService {}

interface BoardService{}

public class BoardRepositoryImpl extends QuerydslRepositorySupport implements BoardService {
    public BoardRepositoryImpl(){super(Board.class);}
}
