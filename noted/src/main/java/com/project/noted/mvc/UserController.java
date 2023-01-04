package com.project.noted.mvc;

import com.project.noted.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    //Login user by id
    @CrossOrigin
    @RequestMapping(method = RequestMethod.POST, value = "/user/login")
    public String getUser(@RequestBody Map<String, String> json) {
        return userService.checkUserLogin(json.get("email"), json.get("password"));
    }

    //Add a new user
    @CrossOrigin
    @RequestMapping(method = RequestMethod.POST, value = "/users")
    public String addUser(@RequestBody User user) {
        return userService.addUser(user);
    }

    //Get all the users
    @RequestMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

//Delete a user by id
//    @RequestMapping(method = RequestMethod.DELETE, value = "/users/{id}")
//    public void deleteUser(@PathVariable int id) {
//        userService.deleteUser(id);
//    }
//    //Update user info
//    @RequestMapping(method = RequestMethod.PUT, value = "/users/{id}")
//    public void updateUser(@RequestBody User user, @PathVariable String id) {
//        userService.updateUser(user, id);
//    }
}
