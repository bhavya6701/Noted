package com.project.noted.mvc;

import com.project.noted.entity.User;
import com.project.noted.jpa.UserJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserJpaRepository repository;

    public String checkUserLogin(String email, String password) {
        return repository.findUser(email, password);
    }

    public String addUser(User user) {
        return repository.addUser(user);
    }

    public List<User> getAllUsers() {
        return repository.findAll();
    }
}
