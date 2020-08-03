package com.H2O.backend.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Component
interface UserService {

    Optional<User> findUserByUserId(String user);

    User update(User selectUser);

    void delete(User selectUser);

    Optional<User> findId(String name, String phone);

    Optional<User> findPw(String userId, String name, String phone);

    Optional<User> signUp(User user);
}
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository userRepository;

    @Override
    public Optional<User> findUserByUserId(String user) {
        Optional<User> idCheck = userRepository.findByUserId(user);
        return idCheck;
    }

    @Override
    public User update(User selectUser) {
        return null;
    }

    @Override
    public void delete(User selectUser) {

    }

    @Override
    public Optional<User> findId(String name, String phone) {
        Optional<User> findId = userRepository.findUserId(name,phone);
        return findId;
    }

    @Override
    public Optional<User> findPw(String userId, String name, String phone) {
        Optional<User> findPw = userRepository.findUserPw(userId,name,phone);
        return findPw;
    }


    @Override
    public Optional<User> signUp(User user) {
        User createUser = new User();
        createUser.setUserId(user.getUserId());
        createUser.setPassword(user.getPassword());
        createUser.setName(user.getName());
        createUser.setPhone(user.getPhone());
        createUser.setEmail(user.getEmail());
        createUser.setAdminCheck(0);

        System.out.println(createUser);
        User userData = userRepository.save(createUser);
        return Optional.of(userData);

    }
}
