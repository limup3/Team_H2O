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
    public void signup(@RequestBody String id, String name, String email, String phone, String password) {
        System.out.println("들어옴");
        System.out.println("id : "+id);
        System.out.println("name : "+name);
        System.out.println("password : "+password);
        user.setUserId(id);
        user.setName(name);
        user.setEmail(email);
        user.setPhone(phone);
        user.setPassword(password);
        userRepository.save(user);

    }

    @PostMapping(value = "/login")
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

}
