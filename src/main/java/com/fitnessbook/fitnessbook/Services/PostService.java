package com.fitnessbook.fitnessbook.Services;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import com.fitnessbook.fitnessbook.entities.Post;
import com.fitnessbook.fitnessbook.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


import org.springframework.web.multipart.MultipartFile;
//import com.social.socialfoodbackend.modal.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public Post save(Post post) {
        return postRepository.save(post);
    }

    public List<Post> getAll() {
        return postRepository.findAll();
    }

    public Optional<Post> getById(String id) {
        return postRepository.findById(id);
    }

    public void deleteById(String id) {
        postRepository.deleteById(id);
    }

    






}
