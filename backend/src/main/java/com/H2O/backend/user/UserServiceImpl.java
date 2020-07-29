package com.H2O.backend.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
interface UserService {

    Optional<User> findUserByUserId(String user);

    User update(User selectUser);

    void delete(User selectUser);

    Optional<User> findUser(Long id);

    Optional<User> createUser(User user);
}

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
    public Optional<User> findUser(Long id) {
        return Optional.empty();
    }

    @Override
    public Optional<User> createUser(User user) {
        return Optional.empty();
    }
}
