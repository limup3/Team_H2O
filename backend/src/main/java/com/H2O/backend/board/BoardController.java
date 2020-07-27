package com.H2O.backend.board;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3306)
@RestController
@RequestMapping("/board")
public class BoardController {

}