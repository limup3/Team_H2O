package com.H2O.backend.board;

import com.H2O.backend.util.boardEnum.Messenger;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3306)
@RestController
@RequestMapping("/board")
public class BoardController {

    private final BoardRepository boardRepository;
    private final BoardService boardService;


    public BoardController(BoardRepository boardRepository, BoardService boardService){
        this.boardRepository = boardRepository;
        this.boardService = boardService;
    }


    @PostMapping("/update")
    public ResponseEntity<List<Board>> getAllBoardList(@RequestBody Board board){
        Board Bdata = new Board();
        Bdata.setTitle(board.getTitle());
        System.out.println(board.getTitle());

        Bdata.setContent(board.getContent());
        System.out.println(board.getContent());

        Bdata.setCreationDate(board.getCreationDate());
        System.out.println(board.getCreationDate());

        Bdata.setMedCategory(board.getMedCategory());
        System.out.println(board.getMedCategory());

        Bdata.setCategory(board.getCategory());
        System.out.println(board.getCategory());

        boardRepository.save(Bdata);
        List<Board> boardList = boardService.findAll();
        return ResponseEntity.ok(boardList);
    }

    @GetMapping("/list")
    public ResponseEntity<List<Board>> getAllBoardList() {
        List<Board> boardList = boardService.findAll();
        System.out.println(boardList.toString());
        return ResponseEntity.ok(boardList);
    }


    @GetMapping("/list/medCategory/{title}")
    public Board getFindTitle(@PathVariable String title){
        System.out.println(title);
        Board findTitle = boardService.findTitle(title);
        System.out.println(findTitle);
        return findTitle;
    }

    @GetMapping("/list/getOne/{boardNo}")
    public Optional<Board> getOneBoardNo(@PathVariable String boardNo){
        return boardService.findBoardNo(Long.parseLong(boardNo));
    }

//    @DeleteMapping("/list/delete/{title}")
//    public Messenger getDeleteBoard(@PathVariable String title){
//        System.out.println(title);
//        boardService.delete(title);
//        return Messenger.SUCCEESS;
//    }

    @DeleteMapping("/list/delete/{boardNo}")
    public Messenger getDeleteBoard(@PathVariable String boardNo){
        Optional<Board> result = boardService.findBoardNo(Long.parseLong(boardNo));
        Board deleteResult = result.get();
        boardService.delete(deleteResult);
        return Messenger.SUCCEESS;
    }


    @GetMapping("/list/{medCategory}")
    public List<Board> getMedCateBoard(@PathVariable String medCategory){
        System.out.println(medCategory);
        List<Board> findOne = boardService.findOneBoard(medCategory);
        System.out.println(findOne);
        return findOne;
    }

    @PostMapping("/modify")
    public Messenger getModifyBoard(@RequestBody Board board){
//        boardService.update(board);
        return Messenger.SUCCEESS;
    }
//    @GetMapping("/search")
//    public BoardRepository(@Repository)

}