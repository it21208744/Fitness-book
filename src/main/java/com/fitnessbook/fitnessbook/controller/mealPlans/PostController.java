package com.fitnessbook.fitnessbook.controller.mealPlans;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

import com.fitnessbook.fitnessbook.entities.Post;
import com.fitnessbook.fitnessbook.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.MediaType;
import org.springframework.web.multipart.MultipartFile;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.zip.Deflater;
import java.util.zip.DeflaterOutputStream;


@RestController
//@RequestMapping("posts/")
//@CrossOrigin(origins = "http://localhost:8080")
@CrossOrigin("*")

public class PostController {
    @Autowired
    private PostRepository postRepository;


    @GetMapping("/api/posts")
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    @GetMapping("/api/post/{id}")
    public Post getPostById(@PathVariable String id) {
        return postRepository.findById(id).orElse(null);
    }

//    @PostMapping("/post")
//    public Post createPost(@RequestBody Post post) {
//        return postRepository.save(post);
//    }
//        @PostMapping(value = "/post", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
//        public Post createPost(@RequestBody Post post) {
//            return postRepository.save(post);
//        }


    @PostMapping(value = "/api/post", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Post> createPost(
            @RequestPart(value = "image", required = false) MultipartFile image,
            @RequestPart(value = "video", required = false) MultipartFile video,
            @RequestPart("description") String description) {
        try {
            byte[] imageData = null;
            byte[] videoData = null;

            // Check if image file is provided
            if (image != null) {
                imageData = image.getBytes();
            }

            // Check if video file is provided
            if (video != null) {
                videoData = video.getBytes();
            }

            // Create a new Post object
            Post post = new Post();
            post.setImageData(imageData);
            post.setVideoData(videoData);
            post.setDescription(description);

            // Save the post
            Post savedPost = postRepository.save(post);

            return ResponseEntity.status(HttpStatus.CREATED).body(savedPost);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

//    private byte[] compressBytes(byte[] data) throws IOException {
//        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
//        Deflater deflater = new Deflater();
//        DeflaterOutputStream deflaterOutputStream = new DeflaterOutputStream(outputStream, deflater);
//        deflaterOutputStream.write(data);
//        deflaterOutputStream.close();
//        return outputStream.toByteArray();
//    }

    @DeleteMapping("/api/post/{id}")
    public ResponseEntity<?> deletePost(@PathVariable String id) {
        System.out.println(id);
        postRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
    @PutMapping(value = "/api/post/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Post> updatePost(@PathVariable String id,
                                           @RequestPart(value = "image", required = false) MultipartFile image,
                                           @RequestPart(value = "video", required = false) MultipartFile video,
                                           @RequestPart("description") String description) {
        try {
            // Check if the post exists
            Optional<Post> optionalPost = postRepository.findById(id);
            if (!optionalPost.isPresent()) {
                return ResponseEntity.notFound().build();
            }

            // Get the existing post
            Post existingPost = optionalPost.get();

            // Update the image data if provided
            if (image != null) {
                byte[] imageData = image.getBytes();
                existingPost.setImageData(imageData);
            }

            // Update the video data if provided
            if (video != null) {
                byte[] videoData = video.getBytes();
                existingPost.setVideoData(videoData);
            }

            // Update the description
            existingPost.setDescription(description);

            // Save the updated post
            Post updatedPost = postRepository.save(existingPost);

            return ResponseEntity.ok(updatedPost);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }





}