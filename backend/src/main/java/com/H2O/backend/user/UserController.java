package com.H2O.backend.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired User user;
    @Autowired UserRepository userRepository;
    @Autowired UserService userService;

    @PostMapping("/signUp")
    public ResponseEntity<User> signup(@RequestBody User user) {
        Optional<User> signUp = userService.signUp(user);

        if ((signUp.isPresent())) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.badRequest().build();
        }


    }

    @GetMapping("/idCheck/{userId}")
    public ResponseEntity<User> idCheck(@PathVariable String userId) {
        Optional<User> idCheckResult = userService.findUserByUserId(userId);
        if(idCheckResult.isPresent()) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user) {
        System.out.println(">>>>"+user.toString());
        Optional<User> findUser = userService.findUserByUserId(user.getUserId());
        if(findUser.isPresent()) {
            User requestLoginUser = findUser.get();
            if(user.getPassword().equals(requestLoginUser.getPassword())) {
                return ResponseEntity.ok(requestLoginUser);
            } else {
                return ResponseEntity.badRequest().build();
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/findId")
    public ResponseEntity<User> findId(@RequestParam String name, @RequestParam String phone) {
        System.out.println(name);
        System.out.println(phone);
        Optional<User> findId = userService.findId(name,phone);

        if(findId.isPresent()) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

}
