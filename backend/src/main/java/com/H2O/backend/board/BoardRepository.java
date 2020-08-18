package com.H2O.backend.board;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
interface BoardRepository extends JpaRepository<Board, Long>, IBoardRepository {//findAll , save 내장

public List<Board> findAllByMedCategory(String medCategory);

public Board findAllByTitle(String title);


public Board deleteAllByBoardNo(String boardNo);

@Modifying(clearAutomatically = true, flushAutomatically = true)
@Query(value="update board set content = :content where boardNo = :boardNo",nativeQuery=true)
public void update(@Param("content") String content, @Param("boardNo") String boardNo);


}
