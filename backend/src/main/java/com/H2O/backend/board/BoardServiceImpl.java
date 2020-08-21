package com.H2O.backend.board;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Component
interface BoardService {
    List<Board> findAll();
    void delete(Board board);
    Board update(Board selectBoard);
    Board findTitle(String title);
    List<Board> findOneBoard(String medCategory);
    Optional<Board> findBoardNo(Long boardNo);
    void modify(Board boardNo);
    void click(Long boardNo);

}
    @Service
    public class BoardServiceImpl implements BoardService {
        private final BoardRepository boardRepository;

        public BoardServiceImpl(BoardRepository boardRepository) {
            this.boardRepository = boardRepository;
        }

        @Override
        public List<Board> findAll() {
            return boardRepository.findAll();
        }

        @Override
        public Board update(Board selectBoard) {
            return boardRepository.save(selectBoard);
        }

        @Override
        public void delete(Board board) {
            boardRepository.delete(board);
        }

        @Override
        public List<Board> findOneBoard(String medCategory) {
            return boardRepository.findAllByMedCategory(medCategory);
        }

        public Optional<Board> findBoardNo(Long boardNo) {
            return boardRepository.findById(boardNo);
        }


        @Override  @Modifying @Transactional
        public void modify(Board boardNo) { boardRepository.modify(boardNo); }

        @Override @Modifying @Transactional
        public void click(Long boardNo) {
            boardRepository.findOneByClick(boardNo);
        }



        @Override
        public Board findTitle(String title) {
            return boardRepository.findAllByTitle(title);
        }
    }

//    public Board findOne(String searchWord){
//
//        return boardRepository.findOneByWord(searchWord);
//    }

