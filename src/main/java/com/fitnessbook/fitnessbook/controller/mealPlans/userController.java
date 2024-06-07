package com.fitnessbook.fitnessbook.controller.mealPlans;


import com.fitnessbook.fitnessbook.entities.userEnity;
import com.fitnessbook.fitnessbook.repositories.userRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;
import java.util.Optional;

@RestController
public class userController {

    @Autowired
    private userRepo userrepo;


    @GetMapping("/api/v1/user/{id}")
    public ResponseEntity<userEnity> getUser(@PathVariable String id) {
        try {
            Optional<userEnity> Optuser = userrepo.findById(id);
            if (Optuser.isPresent()) {
                userEnity user = Optuser.get();
                return new ResponseEntity<>(user, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

//    @PostMapping("/api/v1/user")
//    public ResponseEntity<String> registerUser(@RequestParam("image") MultipartFile imageFile,
//                                               @RequestParam("name") String name,
//                                               @RequestParam("email") String email,
//                                               @RequestParam("password") String password) {
//        try {
//            // Check if a user with the provided email already exists
//            Optional<userEnity> Optuser = userrepo.findByEmail(email);
//
//            // If user with provided email already exists, return error
//            if (Optuser.isPresent()) {
//                return new ResponseEntity<>("User with this email already exists", HttpStatus.BAD_REQUEST);
//            }
//
//            // Create a new UserEntity object
//            userEnity user = new userEnity();
//            user.setName(name);
//            user.setEmail(email);
//            user.setPassword(password);
//
//            // Check if image file is provided
//            if (imageFile != null && !imageFile.isEmpty()) {
//                // Set the image byte array
//                user.setImage(imageFile.getBytes());
//            }
//
//            // Save the user to the database
//            userrepo.save(user);
//
//            return new ResponseEntity<>("User registered", HttpStatus.OK);
//        } catch (IOException e) {
//            e.printStackTrace();
//            return new ResponseEntity<>("Failed to register user", HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }


    @PostMapping("/api/v1/user")
    public ResponseEntity<userEnity> getUserByEmail(@RequestBody Map<String, String> requestBody) {
        String email = requestBody.get("email");

        try {
            Optional<userEnity> Optuser = userrepo.findByEmail(email);
            if (Optuser.isPresent()) {
                userEnity user = Optuser.get();

                return new ResponseEntity<>(user, HttpStatus.OK);
            } else {

                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
