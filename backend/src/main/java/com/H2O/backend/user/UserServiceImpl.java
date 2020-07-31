package com.H2O.backend.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Component
interface UserService {

    Optional<User> findUserByUserId(String user);


    Optional<User> createUser(User user);
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
    public Optional<User> createUser(User user) {
        User createUser = new User();
        createUser.setUserId(user.getUserId());
        createUser.setEmail(user.getEmail());
        createUser.setPhone(user.getPhone());
        createUser.setName(user.getName());
        createUser.setPassword(user.getPassword());
        User result = userRepository.save(createUser);
        return Optional.of(result);
    }
}
