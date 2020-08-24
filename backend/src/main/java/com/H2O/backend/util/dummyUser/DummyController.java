package com.H2O.backend.util.dummyUser;

import com.H2O.backend.user.User;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;



@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/dummy")
public class DummyController {
    @Autowired
    DummyUserService dummyUserService;

    @PostMapping("/user-generator")
    public ResponseEntity<List<User>> createRandomUser() {
        List<User> randomUserList = dummyUserService.createDummyUser();
        return ResponseEntity.ok(randomUserList);
    }
}
