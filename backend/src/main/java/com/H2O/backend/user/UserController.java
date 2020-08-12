package com.H2O.backend.user;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/user")
public class UserController {

    private final User user;
    private final UserRepository userRepository;
    private final UserService userService;

    public UserController(User user, UserRepository userRepository, UserService userService) {
        this.user = user;
        this.userRepository = userRepository;
        this.userService = userService;
    }

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
            return ResponseEntity.ok(findId.get());
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/findPw")
    public ResponseEntity<User> findPw(@RequestParam String userId,
                                                          @RequestParam String name, @RequestParam String phone) {
        Optional<User> findPw = userService.findPw(userId, name, phone);
        if(findPw.isPresent()) {
            return ResponseEntity.ok(findPw.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

//    @PatchMapping("/{userNo}")
//    public ResponseEntity<User> updateUser(@PathVariable String userNo, @RequestBody User user) {
//        System.out.println(userNo);
//        Optional<User> findUser = userService.findUser(Long.valueOf(userNo));
//        if(findUser.isPresent()) {
//            User selectUser = findUser.get();
//            Optional.ofNullable(user.getPassword()).ifPresent(password -> selectUser.setPassword(password));
//            Optional.ofNullable(user.getPhone()).ifPresent(phone -> selectUser.setPhone(phone));
//            Optional.ofNullable(user.getEmail()).ifPresent(email -> selectUser.setEmail(email));
//            return ResponseEntity.ok(userService.update(selectUser));
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }

//    @PatchMapping("/modify/{userId}")
//    public ResponseEntity<User> modify(@PathVariable String userId, @RequestBody User user) {
//
//        Optional<User> modifyUser = userService.findUserByUserId(userId);
//        System.out.println(userId);
//        System.out.println(user);
////        modifyUser.ifPresent(selectUser -> {
////                    selectUser.setName(user.getName());
////                    selectUser.setPhone(user.getPhone());
////                    selectUser.setEmail(user.getEmail());
////                    selectUser.setPassword(user.getPassword());
////                    User newUser = userRepository.save(selectUser);
////                    System.out.println("user: " + newUser);
////        });
////    }
//        if(modifyUser.isPresent()){
//            modifyUser.ifPresent(selectUser ->{
//                selectUser.setName(user.getName());
//                selectUser.setPhone(user.getPhone());
//                selectUser.setEmail(user.getEmail());
//                selectUser.setPassword(user.getPassword());
//                User newUser = userRepository.save(selectUser);
//                System.out.println("user: "+newUser);
//            });
//            return ResponseEntity.ok(modifyUser.get());
//        } else {
//            System.out.println("업데이트 실패");
//
//            return ResponseEntity.notFound().build();
//        }
//
//    }

    }
