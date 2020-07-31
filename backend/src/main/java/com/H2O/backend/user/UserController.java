package com.H2O.backend.user;

public class UserController {
<<<<<<< Updated upstream
=======

    @Autowired User user;
    @Autowired UserRepository userRepository;
    @Autowired UserService userService;

    @PostMapping("/signUp")
    public ResponseEntity<User> signup(@RequestBody User user) {
        Optional<User> createUser = userService.createUser(user);
        if(createUser.isPresent()) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.badRequest().build();
        }

    }

//    @PostMapping(value = "/login")
//    public ResponseEntity<User> login(@RequestBody User user) {
//        System.out.println(">>>>"+user.toString());
//        Optional<User> findUser = userService.findUserByUserId(user.getUserId());
//        if(findUser.isPresent()) {
//            User requestLoginUser = findUser.get();
//            if(user.getPassword().equals(requestLoginUser.getPassword())) {
//                return ResponseEntity.ok(requestLoginUser);
//            } else {
//                return ResponseEntity.badRequest().build();
//            }
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//    }

>>>>>>> Stashed changes
}
